'use client';

import { Star } from "lucide-react";
import Image from "next/image";

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bridal Client",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20professional%20woman%20portrait%2C%20satisfied%20beauty%20salon%20client%2C%20beautiful%20makeup%20and%20hairstyling%2C%20confident%20smile%2C%20luxury%20salon%20experience%2C%20professional%20headshot%20style&width=100&height=100&seq=testimonial-1&orientation=squarish",
    rating: 5,
    message:
      "The team at 360 Salon made my wedding day absolutely perfect. Their attention to detail and artistic vision exceeded all my expectations. I felt like a true princess!",
  },
  {
    name: "Jessica Chen",
    role: "Academy Graduate",
    image:
      "https://readdy.ai/api/search-image?query=young%20professional%20beauty%20artist%20portrait%2C%20successful%20academy%20graduate%2C%20confident%20makeup%20artist%2C%20professional%20beauty%20industry%20worker%2C%20modern%20beauty%20professional%20headshot&width=100&height=100&seq=testimonial-2&orientation=squarish",
    rating: 5,
    message:
      "The academy program transformed my passion into a thriving career. The instructors are world-class, and the hands-on training prepared me for real-world success.",
  },
  {
    name: "Maria Rodriguez",
    role: "Regular Client",
    image:
      "https://readdy.ai/api/search-image?query=sophisticated%20woman%20portrait%2C%20loyal%20salon%20client%2C%20beautiful%20hair%20and%20makeup%2C%20elegant%20professional%20look%2C%20satisfied%20customer%2C%20luxury%20beauty%20service%20experience&width=100&height=100&seq=testimonial-3&orientation=squarish",
    rating: 5,
    message:
      "I've been coming to 360 Salon for over two years, and they never disappoint. The quality of service and the luxurious atmosphere keep me coming back every time.",
  },
  {
    name: "Amanda Foster",
    role: "Academy Graduate",
    image:
      "https://readdy.ai/api/search-image?query=confident%20beauty%20professional%20portrait%2C%20successful%20nail%20artist%2C%20academy%20graduate%2C%20professional%20beauty%20industry%20worker%2C%20modern%20nail%20technician%20headshot&width=100&height=100&seq=testimonial-4&orientation=squarish",
    rating: 5,
    message:
      "The nail art course at 360 Academy opened doors I never imagined. Now I run my own successful nail studio, thanks to the comprehensive training I received.",
  },
  {
    name: "Emily Watson",
    role: "Spa Client",
    image:
      "https://readdy.ai/api/search-image?query=relaxed%20woman%20portrait%2C%20spa%20treatment%20client%2C%20peaceful%20expression%2C%20wellness%20and%20beauty%20client%2C%20luxury%20spa%20experience%2C%20professional%20beauty%20service%20customer&width=100&height=100&seq=testimonial-5&orientation=squarish",
    rating: 5,
    message:
      "The spa treatments at 360 are pure bliss. The therapists are incredibly skilled, and the atmosphere is so relaxing. It's my monthly escape from stress.",
  },
  {
    name: "Rachel Kim",
    role: "Hair Client",
    image:
      "https://readdy.ai/api/search-image?query=stylish%20woman%20portrait%2C%20beautiful%20hair%20transformation%20client%2C%20professional%20hair%20styling%20results%2C%20confident%20smile%2C%20luxury%20salon%20experience%2C%20modern%20hairstyle&width=100&height=100&seq=testimonial-6&orientation=squarish",
    rating: 5,
    message:
      "My stylist at 360 completely understood my vision and created the perfect look for me. The color correction was flawless, and I receive compliments everywhere I go!",
  },
];

const RatingStars = ({ count }: { count: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, role, image, rating, message }: any) => {
  return (
    <div className="max-w-md w-full p-8 bg-[#F9FAFB] shadow-xl rounded-xl border border-zinc-100/50 relative">
      {/* Golden Top Bar */}
      <div className="absolute top-0 left-10 h-1 w-1/6 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-full"></div>

      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-6 pt-">
        <Image
        height={20}
        width={20}
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />

        <div>
          <p className="text-lg font-bold text-zinc-800">{name}</p>
          <p className="text-sm font-medium text-amber-600">{role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <RatingStars count={rating} />
      </div>

      {/* Message */}
      <div className="relative">
        <p className="text- italic text-zinc-600 leading-relaxed font-serif pr-4">
          "{message}"
        </p>

        <div className="absolute bottom-[-15px] right-0 text-7xl font-extrabold text-zinc-200 opacity-80 pointer-events-none translate-x-1/4 translate-y-1/4">
          ”
        </div>
      </div>
    </div>
  );
};



export default function Stories () {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Client <span className="text-[#CA8A04]">Stories</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Hear from our satisfied clients and successful academy graduates who
            have experienced the 360 difference in beauty and education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              role={item.role}
              image={item.image}
              rating={item.rating}
              message={item.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
