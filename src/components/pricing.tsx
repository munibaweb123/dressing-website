'use client';

import { useState } from 'react';

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  
  const pricingPlans = [
    { name: 'FREE', price: 0, features: ['Unlimited product updates'] },
    { name: 'STANDARD', price: 9.99, features: ['Unlimited product updates', 'Advanced analytics'] },
    { name: 'PREMIUM', price: 19.99, features: ['Unlimited product updates', 'Priority support', 'Advanced analytics'] },
  ];

  return (
    <section className="flex flex-col items-center p-10 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
      <p className="text-gray-600 mb-6">Choose the plan that fits your needs.</p>

      <div className="flex items-center space-x-3 mb-6">
        <span>Monthly</span>
        <button 
          className={`relative w-12 h-6 flex items-center bg-blue-500 rounded-full p-1 transition-all ${yearly ? 'bg-blue-700' : ''}`}
          onClick={() => setYearly(!yearly)}
        >
          <span 
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all ${yearly ? 'translate-x-6' : ''}`}
          ></span>
        </button>
        <span>Yearly <span className="text-blue-500 font-semibold">(Save 25%)</span></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`border rounded-lg p-6 text-center hover:scale-110 ${index === 1 ? 'bg-blue-900 text-white' : 'bg-white'}`}>
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-lg mt-2">Organize across all apps by hand</p>
            <p className="text-4xl font-bold my-4">{yearly ? (plan.price * 12 * 0.75).toFixed(2) : plan.price} $</p>
            <p className="text-gray-500">Per {yearly ? 'Year' : 'Month'}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className='font-bold text-center p-4 text-2xl'>Trusted By Over 5000 Big Companies</p>
    </section>
  );
};

export default Pricing;
