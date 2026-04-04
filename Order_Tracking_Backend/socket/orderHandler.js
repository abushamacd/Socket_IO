import { getCollection } from "../config/database.js";
import {
  calculateTotal,
  orderDocument,
  orderIdGenerator,
  validateOrder,
} from "./../utils/helper.js";

export const orderHandler = (io, socket) => {
  console.log(`A connected user: ${socket.id}`);

  socket.on("placeOrder", async (data, callback) => {
    try {
      console.log(`Order place from socket id: ${socket.id}`);

      const validated = validateOrder(data);

      if (!validated.valid) {
        return callback({ success: false, message: validated.message });
      }

      const amounts = calculateTotal(data.items);
      const orderId = orderIdGenerator();
      const order = orderDocument(orderId, data, amounts);
      const orderColletion = getCollection("orders");
      await orderColletion.insertOne(order);

      socket.join(`Order-${orderId}`);
      socket.join(`customers`);
      io.to("admins").emit("newOrder", { order });

      callback({ success: true, order });
      console.log(`Order Created: ${orderId}`);
    } catch (err) {
      console.log(err);
      callback({ success: false, message: `Faild to place order` });
    }
  });
};
