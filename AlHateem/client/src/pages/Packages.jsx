import React from "react";

const Packages = () => {
  let plans = [
    {
      name: "Delux",
      days: "15",
      cost: "$1000",
    },

    {
      name: "Luxury",
      days: "15",
      cost: "$1030",
    },
  ];

  return (
    <>
      <center>
        <h1 className="font-extrabold text-5xl underline italic">Packages</h1>
        {plans.map((plan, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 border border-gray-300 rounded-lg p-6 m-4 max-w-md mx-auto bg-white shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {plan.name}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Duration: {plan.days} days
            </p>
            <p className="text-2xl font-bold text-green-600">{plan.cost}</p>
          </div>
        ))}
      </center>
    </>
  );
};

export default Packages;
