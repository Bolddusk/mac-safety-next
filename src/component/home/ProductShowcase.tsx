"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  icon?: LucideIcon;
  iconImage?: string;
  href: string;
  image: string;
}

const products: Product[] = [
  {
    name: "NIXN Suite",
    description:
      "Our AI-powered safety intelligence platform. Real-time risk assessment, incident prediction, and operational analytics from a single pane of glass.",
    iconImage: "/uploads/nixn-icon.png",
    href: "/nixn",
    image: "/uploads/nixn-dashboard.png",
  },
  {
    name: "On-site",
    description:
      "Expert safety professionals embedded directly into your operations. 500+ consultants ready to deploy where work happens.",
    iconImage: "/uploads/bulldog-icon.jpg",
    href: "/industries",
    image: "/uploads/onsite-map.png",
  },
  {
    name: "Hardware",
    description:
      "Ruggedized field devices and sensors designed for high-risk environments. Purpose-built to capture data at the point of work.",
    iconImage: "/uploads/wac-hardware-icon.png",
    href: "/fieldkit",
    image: "/uploads/hardware-fieldkit.png",
  },
  {
    name: "ForgeWorks",
    description:
      "MAC builds enterprise everything-apps for companies that can no longer live in 27 different apps.",
    iconImage: "/uploads/forgeworks-icon.png",
    href: "/forgeworks",
    image: "/uploads/forgeworks-dashboard.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 bg-[#0b0b0d] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#eba200] text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4 font-alliance"
          >
            Our Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-alliance mb-3 md:mb-4"
          >
            Four Products, One Connected Platform.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto font-alliance px-2"
          >
            MAC builds enterprise everything-apps for companies that can no
            longer live in 27 different apps.
          </motion.p>
        </div>

        {/* Products Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="relative bg-[#16171a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
                data-testid={`card-product-${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {/* Product Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} interface`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171a] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 overflow-hidden">
                    {product.iconImage ? (
                      <img
                        src={product.iconImage}
                        alt={`${product.name} icon`}
                        className="w-full h-full object-cover"
                      />
                    ) : product.icon ? (
                      <product.icon className="w-5 h-5 text-white" />
                    ) : null}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-alliance">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base mb-6 font-alliance leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <Link href={product.href}>
                    <button
                      className="px-5 py-2.5 rounded-lg bg-[#eba200] text-black font-medium text-sm font-alliance hover:bg-[#d49200] transition-colors duration-200"
                      data-testid={`button-explore-${product.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Explore {product.name}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
