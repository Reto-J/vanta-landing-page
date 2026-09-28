export const pricingPlans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started.",
    price: "$0",
    period: "forever",
    features: [
      "Up to 3 projects",
      "Basic task management",
      "AI assistant",
      "5 GB storage",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "For teams that want to move faster and work smarter.",
    price: "$18",
    period: "per user / month",
    features: [
      "Unlimited projects",
      "Advanced AI automation",
      "Team collaboration",
      "100 GB storage",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Scale",
    description: "For growing organizations with advanced needs.",
    price: "$39",
    period: "per user / month",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Advanced permissions",
      "Priority support",
      "Custom workflows",
    ],
    popular: false,
  },
];