'use client';

import { Brush, Check, Droplets, Heart, Leaf, Scissors, Sparkles } from "lucide-react";

const ServiceList = [
  {
    title: "Hair",
    desc: "Cutting, coloring, styling, and treatments with premium products",
    features: [
      "Precision Cuts",
      "Color Correction",
      "Hair Treatments",
      "Styling",
    ],
    icon: <Scissors className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Makeup",
    desc: "Professional makeup for special occasions and everyday elegance",
    features: [
      "Bridal Makeup",
      "Event Styling",
      "Makeup Lessons",
      "Consultations",
    ],
    icon: <Sparkles className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Nails",
    desc: "Manicures, pedicures, and artistic nail designs",
    features: ["Gel Manicures", "Nail Art", "Pedicures", "Extensions"],
    icon: <Brush className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Skin",
    desc: "Advanced skincare treatments and facial therapies",
    features: ["Deep Cleansing", "Anti-Aging", "Hydration", "Problem Skin"],
    icon: <Heart className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Spa",
    desc: "Relaxation and wellness treatments for mind and body",
    features: ["Massages", "Body Treatments", "Aromatherapy", "Wellness"],
    icon: <Leaf className="w-6 h-6 text-yellow-600" />,
  },
];


const ServiceCard = ({ title, desc, features, icon }: any) => {
  return (
    <div className="bg-white px-6 py-10 rounded-lg shadow-md hover:shadow-lg transition group">
      <div className="bg-yellow-100 group-hover:bg-yellow-200 transition-all duration-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-2 font-playfair">{title}</h3>

      <p className="text-gray-600 mb-4">{desc}</p>

      <ul className="space-y-2 text-gray-600 text-sm mb-4">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2">
            <Check size={16} className="text-[#CA8A04]" /> {f}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function Services () {

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Salon <span className="text-[#CA8A04]">Services</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Indulge in our comprehensive range of luxury beauty services, each
            designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {ServiceList.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-linear-to-tr from-yellow-500 to-yellow-600 hover:to-yellow-700 text-white cursor-pointer px-8 py-3 rounded-md text-lg font-semibold">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};
