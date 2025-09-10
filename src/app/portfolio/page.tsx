"use client"; // We need client-side code for the modal

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio from "../data/portfolio.json";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white font-vera-bold">My Photoshop Works</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolio.map((work) => (
          <div
            key={work.id}
            className="bg-white dark:bg-gray-800 p-2 rounded shadow cursor-pointer hover:scale-105 transition group relative portfolio-image-card"
            onClick={() => setSelectedImage(work.image)}
            style={{
              cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'><path d=\'M0 0l2 2l2-2h16l2 2v16l-2 2h-16l-2-2v-16z\' fill=\'%2300CED1\' stroke=\'%23000000\' stroke-width=\'1\'/><path d=\'M2 2l2 2l2-2h12l2 2v12l-2 2h-12l-2-2v-12z\' fill=\'%2300CED1\'/></svg>") 0 0, pointer'
            }}
          >
            <div className="w-full h-64 overflow-hidden rounded relative">
              <Image
                src={work.image}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-full object-cover object-top"
              />
              {/* Hover overlay with message */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Click to view full image</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-2 text-gray-700 dark:text-gray-300 font-vcr-mono">{work.description}</p>
          </div>
        ))}
      </div>

      {/* Modal with Animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                duration: 0.3
              }}
              className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full View"
                width={1200}
                height={800}
                className="rounded shadow-lg max-w-full max-h-full object-contain"
                style={{ 
                  maxWidth: '90vw', 
                  maxHeight: '90vh',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}