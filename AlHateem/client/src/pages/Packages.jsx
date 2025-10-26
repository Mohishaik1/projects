//Modules
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";


const Packages = () => {
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    async function fetchPackages(){
      try {
        const {data} = await axios.get('http://localhost:5500/api/user/addpackages')
        setPlans(data);
        // console.log(plans);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPackages();
  }, []);

  // const [packages, addPackages] = useState({
  //   name:'',
  //   days:'',
  //   cost:'',
  //   departure:'',
  //   departureDate:''
  // })



  return (
    <>
      <center className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-10 pr-4 sticky top-0 opacity-90 bg-gray-100 w-full flex-wrap justify-end text-xl">
          <Link to='/' className="text-black italic mb-4 inline-block mt-4 hover:bg-green-500 rounded">Home</Link>
          <br />
          <Link to='/contact' className="text-black italic mb-4 inline-block mt-4 hover:bg-green-500 rounded">Contact Us!</Link>
        </div>
        <h1 className="font-extrabold italic mb-8 text-7xl">Discover Our Spiritual Journeys</h1>
        <h4 className="text-2xl">Explore our carefully curated Hajj and Umrah packages designed to provide a meaningful and comfortable pilgrimage experience.</h4>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
            >
              {/* Package Image */}
              {plan.image ? (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {plan.cost}
                  </div>
                </div>
              ) : (
                <div className="relative h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <svg className="w-24 h-24 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {plan.cost}
                  </div>
                </div>
              )}
              
              {/* Package Details */}
              <div className="p-6">
                <h2 className="text-2xl text-gray-900 mb-4 text-center font-extrabold">
                  {plan.name}
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600 font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Duration
                    </span>
                    <span className="text-gray-900 font-bold">{plan.days} days</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600 font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      From
                    </span>
                    <span className="text-gray-900 font-bold">{plan.departure}</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600 font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Departure
                    </span>
                    <span className="text-gray-900 font-bold text-sm">
                      {plan.departureDate ? new Date(plan.departureDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBA'}
                    </span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-5xl font-extrabold italic">Our Packages Include</h1>
          <ul className="list-disc list-inside text-left max-w-4xl mx-auto mt-6 text-xl space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 ">
            <li className="border-2 ">Comprehensive travel arrangements including flights, accommodation, and local transportation.</li>
            <li className="border-2">Guided tours of significant religious sites with knowledgeable guides.</li>
            <li className="border-2">24/7 customer support to assist you throughout your journey.</li>
            <li className="border-2">All necessary permits and documentation for a hassle-free experience.</li>
            <li className="border-2">Culturally immersive experiences to enrich your pilgrimage.</li>
          </ul>
        </div>
      </center>
    </>
  );
};

export default Packages;
