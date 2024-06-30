"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-parallax";
import bg from "/public/tea.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full p-4 bg-white shadow-md z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          className="container mx-auto flex justify-between items-center"
        >
          <div className="text-xl font-bold">
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
            >
              Logo
            </motion.span>
          </div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
              >
                Home
              </motion.span>
            </a>
            <a href="#" className="hover:underline">
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              >
                About
              </motion.span>
            </a>
            <a href="#" className="hover:underline">
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
              >
                Contact
              </motion.span>
            </a>
          </nav>
        </motion.div>
      </header>
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to Our Site
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className="text-xl mb-8"
          >
            We create amazing experiences
          </motion.p>
          <motion.a
            href="#"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Get Started
          </motion.a>
        </div>
      </section>
      {/* Image Section */}
      <section className="h-screen flex items-center justify-center">
        <Parallax bgImage={bg.src} strength={200}>
          <div className="relative w-full h-96 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-1/2 h-full"
            >
              <Image
                src={bg}
                fill
                objectFit="cover"
                className="rounded-lg shadow-lg object-cover"
                alt="Sample Image"
                priority
              />
            </motion.div>
          </div>
        </Parallax>
      </section>
      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          © 2024 Your Company
        </motion.div>
      </footer>
    </div>
  );
}
