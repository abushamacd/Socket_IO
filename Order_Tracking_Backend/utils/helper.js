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
