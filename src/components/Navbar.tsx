"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const DEFAULT_IMAGE = "/atul.jpg";
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);

  // Load saved image
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // 🔥 Optimized Image Upload Handler
  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Limit file size (1MB max)
    if (file.size > 1024 * 1024) {
      alert("Image must be less than 1MB");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 300; // resize to 300x300

        canvas.width = MAX_SIZE;
        canvas.height = MAX_SIZE;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Draw resized image
        ctx.drawImage(img, 0, 0, MAX_SIZE, MAX_SIZE);

        // Compress to JPEG (0.7 quality)
        const optimizedBase64 = canvas.toDataURL("image/jpeg", 0.7);

        setImage(optimizedBase64);
        localStorage.setItem("profileImage", optimizedBase64);
      };
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    localStorage.removeItem("profileImage");
    setImage(DEFAULT_IMAGE);
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

            <div
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current?.click();
              }}
              className="relative w-20 h-20 rounded-full overflow-hidden 
                         border-2 border-white 
                         ring-2 ring-gray-200 
                         shadow-md cursor-pointer
                         hover:ring-gray-400 transition"
            >
              <Image
                key={image}                 // 🔥 force re-render
                src={image}
                alt="Atul Tiwari"
                width={100}
                height={100}
                unoptimized                // 🔥 disable Next cache
                className="rounded-full object-cover"
              />

              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition flex items-center justify-center text-white text-xs opacity-0 hover:opacity-100">
                Change
              </div>
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            <span className="text-xl font-semibold tracking-tight text-gray-900">
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
                  className={`relative text-sm font-medium transition ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
     <div className="flex items-center gap-6"> <div 
     className="hidden md:flex items-center gap-2 text-xs text-gray-500"> 
     <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
     Open to Work </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1yjMLDHZA3LgWoS5zN9G68QXvPshmdcsf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-md
                         bg-gray-900 text-white
                         hover:bg-black transition"
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </motion.header>
  );
}