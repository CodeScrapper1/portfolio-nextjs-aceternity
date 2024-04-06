"use client";
import React from "react";
import { motion } from "framer-motion";
import { Category } from "@/utils/data";
import { textVarient } from "@/utils/motion";

interface CatListProps {
  selectedCategoryId?: number | null;
  setSelectedCategoryId: (categoryId: number) => void;
  categories: Category[];
}
const Categories = ({
  selectedCategoryId,
  setSelectedCategoryId,
  categories,
}: CatListProps) => {
  return (
    <motion.div
      variants={textVarient}
      initial="hidden"
      whileInView="show"
      className="flex justify-center flex-wrap gap-4"
    >
      <button
        onClick={() => setSelectedCategoryId(0)}
        className={`${
          selectedCategoryId == 0 && "bg-purple-500"
        } bg-black border-purple-500 border-[1px] text-white font-bold py-2 px-4 rounded-lg`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          onClick={() => setSelectedCategoryId(cat.id)}
          className={`${
            selectedCategoryId == cat.id && "bg-purple-500"
          } bg-black border-purple-500 border-[1px] text-white font-bold py-2 px-4 rounded-lg`}
        >
          {cat.name}
        </button>
      ))}
    </motion.div>
  );
};

export default Categories;
