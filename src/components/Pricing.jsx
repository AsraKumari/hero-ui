import React from "react";

// All the pricing plans with their features are defined here
const pricingPlans = [
  {
    title: "Free",
    price: "$0.00",
    button: "Start for Free",
    features: [
      "Account Aggregation",
      "Expense Tracking",
      "Budgeting Tools",
      "Transaction Insights",
      "Basic Security"
    ],
  },
  {
    title: "Professional",
    price: "$98.00",
    tag: "Most Popular", // This plan gets a tag badge
    button: "Sign Up with Professional",
    highlight: true, // Highlighted with a ring
    features: [
      "Everything in Free",
      "Customizable Dashboards",
      "Advanced Budgeting",
      "Investment Tracking",
      "Enhanced Security"
    ],
  },
  {
    title: "Enterprise",
    price: "$160.00",
    button: "Sign Up with Enterprise",
    features: [
      "Financial Planning Tools",
      "Priority Support",
      "Premium Widgets",
      "Advanced Security",
      "Integration with 3rd-Party Services"
    ],
  },
];

// This is the main Pricing component
const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-black text-white py-20 px-6">
      {/* Header section with title and subtext */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple and Affordable Pricing Plans</h2>
        <p className="text-gray-400">Start tracking and improving your finance management</p>
      </div>

      {/* Pricing cards grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative group p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-white/5 transition-all overflow-hidden shadow-lg hover:shadow-2xl ${
              plan.highlight ? "ring-2 ring-purple-400" : ""
            }`}
          >
            {/* Shiny swipe effect on hover */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md transform -rotate-12 scale-150 translate-x-[-100%] group-hover:animate-cardShine" />
            </div>

            {/* If plan has a special tag (like Most Popular) it shows a badge */}
            {plan.tag && (
              <span className="absolute top-4 right-4 bg-purple-600 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {plan.tag}
              </span>
            )}

            {/* Plan Title */}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

            {/* Plan Price */}
            <p className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-sm font-medium text-gray-400">/month</span>
            </p>

            {/* Button to select or sign up for the plan */}
            <button
              className={`w-full py-2 rounded-full font-medium ${
                plan.highlight
                  ? "bg-orange-500 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              {plan.button}
            </button>

            {/* Feature list of each pricing plan */}
            <div className="mt-6 text-left">
              <p className="uppercase text-xs font-bold text-gray-400 mb-2">Features</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {/* Green dot before each feature */}
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
