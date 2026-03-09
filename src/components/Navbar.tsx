"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [image, setImage] = useState<string>("/atul.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        localStorage.setItem("profileImage", result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50"
    >
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          {/* Logo + Avatar */}
          <Link href="/" className="flex items-center gap-4 group relative">

            {/* Avatar */}
            <div
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current?.click();
              }}
              className="relative w-20 h-20 rounded-full overflow-hidden 
                         border-2 border-white 
                         ring-2 ring-gray-200 
                         shadow-md 
                         cursor-pointer 
                         transition duration-300 
                         hover:ring-gray-400"
            >
              <Image
                src={image}
                alt="Atul Tiwari"
                width={100}
                height={100}
                className="rounded-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition flex items-center justify-center text-white text-xs opacity-0 hover:opacity-100">
                photo
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Name */}
            <span className="text-xl font-semibold tracking-tight text-gray-900 group-hover:opacity-80 transition">
              Atul Tiwari <span className="text-gray-400">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-3 left-0 right-0 h-[2px] bg-gray-900 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Open to Work
            </div>



            <a
            href="https://drive.google.com/uc?export=download&id=1yjMLDHZA3LgWoS5zN9G68QXvPshmdcsf"
            target="_blank"
            rel="oopener noreferrer"
            className="px-5 py-2 text-sm font-medium rounded-md
                         bg-gray-900 text-white
                         hover:bg-black transition duration-300
                         shadow-sm">
                             Download CV
                             </a>

          </div>

        </div>
      </div>
    </motion.header>
  );
}