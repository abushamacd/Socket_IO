import { validateOrder } from "./../utils/helper";

export const orderHandler = (io, socket) => {
  console.log(`A connected user: ${socket.id}`);

  socket.on("placeOrder", async (data, callback) => {
    try {
      console.log(`Order place from socket id: ${socket.id}`);

      const validated = validateOrder(data);

      if (!validated.valid) {
        return callback({ success: false, message: validated.message });
      }
    } catch (err) {
      console.log(err);
    }
  });
};
