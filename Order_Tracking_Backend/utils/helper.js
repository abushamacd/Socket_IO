export function validateOrder(data) {
  if (!data.customerName?.trim()) {
    return {
      valid: false,
      message: "Customer name is required",
    };
  }
  if (!data.customerPhone?.trim()) {
    return {
      valid: false,
      message: "Customer phone is required",
    };
  }
  if (!data.customerAddress?.trim()) {
    return {
      valid: false,
      message: "Customer address is required",
    };
  }
  if (!Array.isArray(data.items)) {
    return {
      valid: false,
      message: "Order must one item",
    };
  }

  return {
    valid: true,
  };
}

// order id generator
