// Components/FoodCarousel.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// ✅ Food Images
import Margherita_Pizza from "../../../GlobalAssets/FoodItemPng/Margherita_Pizza.png";
import BBQ_Chicken_Wings from "../../../GlobalAssets/FoodItemPng/BBQ_Chicken_Wings.png";
import Strawberry_Smoothie from "../../../GlobalAssets/FoodItemPng/Strawberry_Smoothie.png";
import Veggie_Pizza from "../../../GlobalAssets/FoodItemPng/Veggie_Pizza.png";
import Spicy_Tacos from "../../../GlobalAssets/FoodItemPng/Spicy_Tacos.png";
import Pasta_Alfredo from "../../../GlobalAssets/FoodItemPng/Pasta_Alfredo.png";
import Chocolate_Donut from "../../../GlobalAssets/FoodItemPng/Chocolate_Donut.png";
import Caesar_Salad from "../../../GlobalAssets/FoodItemPng/Caesar_Salad.png";
import Sushi_Platter from "../../../GlobalAssets/FoodItemPng/Sushi_Platter.png";
import French_Fries from "../../../GlobalAssets/FoodItemPng/French_Fries.png";
import Ice_Cream from "../../../GlobalAssets/FoodItemPng/Ice_Cream.png";
import Chicken_Burger from "../../../GlobalAssets/FoodItemPng/Chicken_Burger.png";
import Veggie_Burger from "../../../GlobalAssets/FoodItemPng/Veggie_Burger.png";
import Grilled_Salmon from "../../../GlobalAssets/FoodItemPng/Grilled_Salmon.png";
import Cheese_Sandwich from "../../../GlobalAssets/FoodItemPng/Cheese_Sandwich.png";
import Pancakes from "../../../GlobalAssets/FoodItemPng/Pancakes.png";
import Ramen_Bowl from "../../../GlobalAssets/FoodItemPng/Ramen_Bowl.png";
import Butter_Chicken from "../../../GlobalAssets/FoodItemPng/Butter_Chicken.png";
import Falafel_Wrap from "../../../GlobalAssets/FoodItemPng/Falafel_Wrap.png";
import Tiramisu from "../../../GlobalAssets/FoodItemPng/Tiramisu.png";

// ✅ Static Food Items
const foodItems = [
  { id: 1, name: "Margherita Pizza", description: "Classic cheese & tomato delight 🍕", img: Margherita_Pizza, gradient: "from-yellow-100 to-red-100", textColor: "text-red-600", subTextColor: "text-red-400" },
  { id: 2, name: "BBQ Chicken Wings", description: "Spicy, smoky & finger-licking good 🍗", img: BBQ_Chicken_Wings, gradient: "from-orange-100 to-red-200", textColor: "text-orange-600", subTextColor: "text-orange-400" },
  { id: 3, name: "Strawberry Smoothie", description: "Fresh strawberries blended to perfection 🍓🥤", img: Strawberry_Smoothie, gradient: "from-pink-100 to-red-200", textColor: "text-pink-600", subTextColor: "text-pink-400" },
  { id: 4, name: "Veggie Pizza", description: "Light, colorful, and topped with fresh veggies 🌿🍕", img: Veggie_Pizza, gradient: "from-green-100 to-emerald-200", textColor: "text-emerald-700", subTextColor: "text-emerald-500" },
  { id: 5, name: "Spicy Tacos", description: "Hot, crunchy & flavorful 🌮", img: Spicy_Tacos, gradient: "from-yellow-100 to-orange-200", textColor: "text-yellow-600", subTextColor: "text-yellow-500" },
  { id: 6, name: "Pasta Alfredo", description: "Creamy pasta with tender bites 🍝", img: Pasta_Alfredo, gradient: "from-amber-100 to-orange-100", textColor: "text-amber-700", subTextColor: "text-amber-500" },
  { id: 7, name: "Chocolate Donut", description: "Soft, sweet & chocolaty 🍩", img: Chocolate_Donut, gradient: "from-yellow-100 to-amber-200", textColor: "text-amber-800", subTextColor: "text-amber-500" },
  { id: 8, name: "Caesar Salad", description: "Fresh green with tangy dressing 🥗", img: Caesar_Salad, gradient: "from-green-100 to-emerald-200", textColor: "text-emerald-700", subTextColor: "text-emerald-500" },
  { id: 9, name: "Sushi Platter", description: "Fresh fish with perfect rice 🍣", img: Sushi_Platter, gradient: "from-blue-100 to-cyan-200", textColor: "text-cyan-700", subTextColor: "text-cyan-500" },
  { id: 10, name: "French Fries", description: "Crispy & golden brown 🍟", img: French_Fries, gradient: "from-yellow-100 to-orange-100", textColor: "text-yellow-600", subTextColor: "text-yellow-500" },
  { id: 11, name: "Ice Cream", description: "Cold, creamy & delightful 🍨", img: Ice_Cream, gradient: "from-pink-100 to-purple-200", textColor: "text-pink-600", subTextColor: "text-purple-400" },
  { id: 12, name: "Chicken Burger", description: "Juicy grilled chicken burger 🍔", img: Chicken_Burger, gradient: "from-orange-100 to-red-200", textColor: "text-orange-600", subTextColor: "text-red-400" },
  { id: 13, name: "Veggie Burger", description: "Healthy & delicious 🌱", img: Veggie_Burger, gradient: "from-green-100 to-lime-200", textColor: "text-emerald-700", subTextColor: "text-lime-500" },
  { id: 14, name: "Grilled Salmon", description: "Tender fish with lemon butter 🐟🍋", img: Grilled_Salmon, gradient: "from-blue-100 to-indigo-200", textColor: "text-indigo-700", subTextColor: "text-blue-500" },
  { id: 15, name: "Cheese Sandwich", description: "Golden grilled & cheesy 🥪🧀", img: Cheese_Sandwich, gradient: "from-yellow-100 to-orange-200", textColor: "text-yellow-700", subTextColor: "text-orange-500" },
  { id: 16, name: "Pancakes", description: "Fluffy, syrupy & sweet 🥞🍯", img: Pancakes, gradient: "from-amber-100 to-yellow-200", textColor: "text-amber-700", subTextColor: "text-yellow-600" },
  { id: 17, name: "Ramen Bowl", description: "Hot noodles in rich broth 🍜", img: Ramen_Bowl, gradient: "from-red-100 to-orange-200", textColor: "text-red-600", subTextColor: "text-orange-500" },
  { id: 18, name: "Butter Chicken", description: "Rich, creamy & spiced Indian curry 🍛", img: Butter_Chicken, gradient: "from-orange-100 to-yellow-200", textColor: "text-orange-700", subTextColor: "text-yellow-600" },
  { id: 19, name: "Falafel Wrap", description: "Crispy falafel with tahini 🥙", img: Falafel_Wrap, gradient: "from-green-100 to-lime-200", textColor: "text-green-700", subTextColor: "text-lime-500" },
  { id: 20, name: "Tiramisu", description: "Coffee-flavored Italian dessert ☕🍰", img: Tiramisu, gradient: "from-yellow-50 to-amber-100", textColor: "text-amber-700", subTextColor: "text-yellow-600" },
];

// ✅ Food Card Component
const FoodCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
    transition={{ type: "spring", stiffness: 160, damping: 18 }}
    className={`flex-shrink-0 w-64 md:w-72 h-[21rem] bg-gradient-to-br ${item.gradient}
      rounded-3xl p-6 flex flex-col justify-between items-center snap-center
      border border-white/50 shadow-lg backdrop-brightness-110 contrast-125 saturate-125`}
  >
    {/* Image */}
    <motion.div
      initial={{ scale: 0.9, rotate: -6 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden 
                 shadow-[0_10px_30px_rgba(0,0,0,0.25)] border-4 border-white/80 
                 bg-white/40 backdrop-blur-md"
    >
      <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
    </motion.div>

    {/* Text */}
    <div className="flex flex-col items-center gap-1 px-2 text-center">
      <h3 className={`text-lg md:text-xl font-extrabold tracking-wide ${item.textColor}`}>
        {item.name}
      </h3>
      <p className={`${item.subTextColor} text-sm md:text-base leading-snug opacity-90`}>
        {item.description}
      </p>
    </div>

    {/* Button with Shimmer */}
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
      className="relative overflow-hidden flex items-center justify-center gap-2 
                 bg-black text-white px-5 py-2 rounded-xl shadow-lg 
                 hover:shadow-[0_8px_25px_rgba(0,0,0,0.6)] font-semibold 
                 text-sm md:text-base"
    >
      Order Now <FiArrowRight />
      <motion.div
        className="absolute top-0 left-0 w-20 h-full 
                   bg-gradient-to-r from-transparent via-white to-transparent
                   opacity-95 blur-md brightness-125 transform -skew-x-12"
        animate={{ x: [0, 140, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  </motion.div>
);

// ✅ Main Component
const FoodCarousel = () => (
  <section
    className="relative py-20 md:py-28 rounded-3xl overflow-hidden 
               bg-white/10 backdrop-blur-3xl 
               shadow-[0_25px_80px_rgba(0,0,0,0.35),inset_0_1px_20px_rgba(255,255,255,0.3)] 
               border border-white/20"
  >
    {/* Glow Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow-50/10 pointer-events-none" />

    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-14 relative z-10"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold 
                     bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-700 
                     bg-clip-text text-transparent drop-shadow-lg">
        Explore Our Premium Menu ✨
      </h2>
      <p className="text-gray-700/80 mt-3 text-lg md:text-xl font-medium">
        Curated with passion • Served with elegance
      </p>
    </motion.div>

    {/* Cards Carousel */}
    <div className="flex gap-8 md:gap-10 px-6 md:px-16 overflow-x-auto 
                    scrollbar-hide snap-x snap-mandatory relative z-10">
      {foodItems.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>

    {/* Hide Scrollbar */}
    <style>
      {`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}
    </style>
  </section>
);
export default FoodCarousel;