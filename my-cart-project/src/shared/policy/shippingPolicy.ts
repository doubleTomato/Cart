// 배송비
export const SHIPPING_POLICIES = [
  {
    id: "default",

    type: "CONDITIONAL",

    fee: 3000,

    freeThreshold: 50000
  },

  {
    id: "free",

    type: "FREE",

    fee: 0
  }
];