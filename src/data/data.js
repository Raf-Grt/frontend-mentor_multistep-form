export const formData = {
  name: "",
  email: "",
  phone: "",
  plan: {
    type: "arcade",
    billed: "monthly",
  },
  addons: [],
};

export const priceData = {
  monthly: {
    plan: {
      arcade: 9,
      advanced: 12,
      pro: 15,
    },
    addons: {
      onlineService: 1,
      storage: 2,
      customizableProfile: 2,
    },
  },
  yearly: {
    plan: {
      arcade: 90,
      advanced: 120,
      pro: 150,
    },
    addons: {
      onlineService: 10,
      storage: 20,
      customizableProfile: 20,
    },
  },
};
