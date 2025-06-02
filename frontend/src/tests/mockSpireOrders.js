// Mock Spire Orders
// File for what we expect the orders to look like (subject to change, take with a grain of salt)

export const mockSpireOrders = [
  {
    orderNumber: "20252001512", // Should be correct, key could differ
    orderDate: "2025-06-05", // Should be correct, key could differ
    status: "backlog", // Backlog for now, in spire it could be 'Pending' or 'Received'
    drains: {
      "1": { total: 36, box: "Marathon", size: "3.75", coatings: "TPO" }, // The map could vary, we won't know until we get access
      "2": { total: 25, box: "TopShield", size: "3.625", coatings: "PVC" }
    }
  }
];