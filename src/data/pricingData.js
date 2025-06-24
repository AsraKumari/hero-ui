// src/data/pricingData.js

export const pricingPlans = [
  {
    id: "free",
    title: "Free",
    price: "$0.00",
    button: "Start for Free",
    features: [
      "Account Aggregation",
      "Expense Tracking",
      "Budgeting Tools",
      "Transaction Insights",
      "Basic Security",
    ],
  },
  {
    id: "professional",
    title: "Professional",
    price: "$98.00",
    tag: "Most Popular",
    button: "Sign Up with Professional",
    highlight: true,
    features: [
      "Everything in Free",
      "Customizable Dashboards",
      "Advanced Budgeting",
      "Investment Tracking",
      "Enhanced Security",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "$160.00",
    button: "Sign Up with Enterprise",
    features: [
      "Financial Planning Tools",
      "Priority Support",
      "Premium Widgets",
      "Advanced Security",
      "Integration with 3rd-Party Services",
    ],
  },
];
