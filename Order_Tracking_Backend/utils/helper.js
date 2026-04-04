export const validateOrder = (data) => {
  if (!data.customerName?.trim()) {
    return { valid: false, message: `Customer name is required` };
  }

  if (!data.customerPhone?.trim()) {
    return { valid: false, message: `Phone number is required` };
  }

  if (!data.customerAddress?.trim()) {
    return { valid: false, message: `Address is required` };
  }

  if (!Array.isArray(data.items)) {
    return { valid: false, message: `At least one item order` };
  }

  return { valid: true };
};

export const orderIdGenerator = () => {
  const now = new Date();
  const years = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const orderNumber = Math.ceil(Math.random() * 1000);

  return `ORD-${years}${month}${day}-${orderNumber}`;
};

export const calculateTotal = (items) => {
  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const tax = subTotal * 0.1;
  const deliveryFee = 35;
  const total = subTotal + tax + deliveryFee;

  return {
    total: Math.round((total * 100) / 100),
    subTotal: Math.round((subTotal * 100) / 100),
    tax: Math.round((tax * 100) / 100),
    deliveryFee,
  };
};
