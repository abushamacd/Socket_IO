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
