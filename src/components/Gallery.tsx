"use client";

import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    name: "Hair",
    url: "https://readdy.ai/api/search-image?query=stunning%20hair%20transformation%20before%20and%20after%2C%20professional%20hair%20coloring%20and%20styling%2C%20luxury%20salon%20results%2C%20beautiful%20hair%20makeover%2C%20elegant%20hairstyling%20work%2C%20premium%20hair%20treatment%20results&width=400&height=500&seq=gallery-1&orientation=portrait",
  },
  {
    name: "Makeup",
    url: "https://readdy.ai/api/search-image?query=professional%20bridal%20makeup%20transformation%2C%20elegant%20wedding%20makeup%20look%2C%20before%20and%20after%20makeup%20artistry%2C%20luxury%20makeup%20application%2C%20beautiful%20bride%20makeup%2C%20professional%20makeup%20artist%20work&width=400&height=500&seq=gallery-2&orientation=portrait",
  },
  {
    name: "Nail Art",
    url: "https://readdy.ai/api/search-image?query=artistic%20nail%20art%20designs%2C%20professional%20nail%20salon%20work%2C%20elegant%20manicure%20results%2C%20creative%20nail%20designs%2C%20luxury%20nail%20art%2C%20beautiful%20nail%20transformations&width=400&height=300&seq=gallery-3&orientation=landscape",
  },
  {
    name: "Academy Training",
    url: "https://readdy.ai/api/search-image?query=beauty%20academy%20students%20in%20training%20session%2C%20professional%20beauty%20education%20classroom%2C%20hands-on%20learning%20environment%2C%20instructor%20teaching%20beauty%20techniques%2C%20modern%20academy%20setting&width=400&height=300&seq=gallery-4&orientation=landscape",
  },
  {
    name: "Salon Interior",
    url: "https://readdy.ai/api/search-image?query=luxury%20salon%20interior%20ambiance%2C%20elegant%20beauty%20salon%20atmosphere%2C%20modern%20salon%20design%2C%20professional%20styling%20stations%2C%20sophisticated%20salon%20environment%2C%20premium%20beauty%20space&width=400&height=500&seq=gallery-5&orientation=portrait",
  },
  {
    name: "Skin Treatment",
    url: "https://readdy.ai/api/search-image?query=professional%20skincare%20facial%20treatment%2C%20spa%20therapy%20session%2C%20relaxing%20facial%20treatment%2C%20skincare%20professional%20at%20work%2C%20luxury%20spa%20environment%2C%20skin%20therapy%20results&width=400&height=300&seq=gallery-6&orientation=landscape",
  },
  {
    name: "Graduation",
    url: "https://readdy.ai/api/search-image?query=graduation%20ceremony%20beauty%20academy%2C%20successful%20beauty%20students%20with%20certificates%2C%20professional%20achievement%20celebration%2C%20academy%20graduation%20event%2C%20beauty%20education%20success&width=400&height=300&seq=gallery-7&orientation=landscape",
  },
  {
    name: "Evening Makeup",
    url: "https://readdy.ai/api/search-image?query=elegant%20evening%20makeup%20look%2C%20professional%20makeup%20artistry%2C%20sophisticated%20makeup%20transformation%2C%20luxury%20makeup%20application%2C%20beautiful%20evening%20makeup%2C%20professional%20makeup%20results&width=400&height=500&seq=gallery-8&orientation=portrait",
  },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState('')
  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Our <span className="text-[#CA8A04]">Gallery</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Witness the artistry and transformations that happen at 360 Salon &
            Academy. From stunning makeovers to successful graduates, see our
            work in action.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.name}
              onClick={() => setSelectedImage(image.url)}
              className="h-full w-full bg-gray-300 rounded-lg overflow-hidden relative group"
            >
              <Image
              height={200}
              width={200}
                src={image.url}
                alt="Gallery"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-300"
              />
              <div className="absolute group-hover:opacity-100 opacity-0 transition-all duration-200 inset-0 bg-zinc-900/50 flex flex-col gap-2 items-center justify-center">
                <span className="px-4 py-1 bg-[#EAB308] font-semibold rounded-full">
                  {image.name}
                </span>
                <span className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ZoomIn size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40">
          <div className=" p-2">
            {/* IMAGE CONTAINER */}
            <div className="relative w-[650px] h-[600px] max-w-[90vw] max-h-[90vh] overflow-hidden">
              <Image
                src={selectedImage}
                alt=""
                fill
                className="object-contain shadow-2xl rounded-2xl"
                unoptimized
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage("")}
              className="absolute top-10 right-10 bg-white/80 hover:bg-white text-black rounded-full h-10 w-10 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
