// Pages/ClientFoodItemsPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

// ✅ Import Food Images
import Margherita_Pizza from "../../GlobalAssets/FoodItemPng/Margherita_Pizza.png";
import BBQ_Chicken_Wings from "../../GlobalAssets/FoodItemPng/BBQ_Chicken_Wings.png";
import Strawberry_Smoothie from "../../GlobalAssets/FoodItemPng/Strawberry_Smoothie.png";
import Veggie_Pizza from "../../GlobalAssets/FoodItemPng/Veggie_Pizza.png";
import Spicy_Tacos from "../../GlobalAssets/FoodItemPng/Spicy_Tacos.png";
import Pasta_Alfredo from "../../GlobalAssets/FoodItemPng/Pasta_Alfredo.png";
import Chocolate_Donut from "../../GlobalAssets/FoodItemPng/Chocolate_Donut.png";
import Caesar_Salad from "../../GlobalAssets/FoodItemPng/Caesar_Salad.png";
import Sushi_Platter from "../../GlobalAssets/FoodItemPng/Sushi_Platter.png";
import French_Fries from "../../GlobalAssets/FoodItemPng/French_Fries.png";
import Ice_Cream from "../../GlobalAssets/FoodItemPng/Ice_Cream.png";
import Chicken_Burger from "../../GlobalAssets/FoodItemPng/Chicken_Burger.png";
import Veggie_Burger from "../../GlobalAssets/FoodItemPng/Veggie_Burger.png";
import Grilled_Salmon from "../../GlobalAssets/FoodItemPng/Grilled_Salmon.png";
import Cheese_Sandwich from "../../GlobalAssets/FoodItemPng/Cheese_Sandwich.png";
import Pancakes from "../../GlobalAssets/FoodItemPng/Pancakes.png";
import Ramen_Bowl from "../../GlobalAssets/FoodItemPng/Ramen_Bowl.png";
import Butter_Chicken from "../../GlobalAssets/FoodItemPng/Butter_Chicken.png";
import Falafel_Wrap from "../../GlobalAssets/FoodItemPng/Falafel_Wrap.png";
import Tiramisu from "../../GlobalAssets/FoodItemPng/Tiramisu.png";
import Pepperoni_Pizza from "../../GlobalAssets/FoodItemPng/Pepperoni_Pizza.png";
import Garlic_Bread from "../../GlobalAssets/FoodItemPng/Garlic_Bread.png";
import Mango_Lassi from "../../GlobalAssets/FoodItemPng/Mango_Lassi.png";
import Cold_Coffee from "../../GlobalAssets/FoodItemPng/Cold_Coffee.png";
import Blueberry_Muffin from "../../GlobalAssets/FoodItemPng/Blueberry_Muffin.png";
import Veg_Hakka_Noodles from "../../GlobalAssets/FoodItemPng/Veg_Hakka_Noodles.png";
import Chicken_Biryani from "../../GlobalAssets/FoodItemPng/Chicken_Biryani.png";
import Mutton_Kebab from "../../GlobalAssets/FoodItemPng/Mutton_Kebab.png";
import Onion_Rings from "../../GlobalAssets/FoodItemPng/Onion_Rings.png";
import Fish_Tacos from "../../GlobalAssets/FoodItemPng/Fish_Tacos.png";
import Veg_Spring_Roll from "../../GlobalAssets/FoodItemPng/Veg_Spring_Roll.png";
import Club_Sandwich from "../../GlobalAssets/FoodItemPng/Club_Sandwich.png";
import Avocado_Salad from "../../GlobalAssets/FoodItemPng/Avocado_Salad.png";
// import Greek_Salad from "../../GlobalAssets/FoodItemPng/Greek_Salad.png";
import Fried_Rice from "../../GlobalAssets/FoodItemPng/Fried_Rice.png";
import Dal_Makhani from "../../GlobalAssets/FoodItemPng/Dal_Makhani.png";
import Chole_Bhature from "../../GlobalAssets/FoodItemPng/Chole_Bhature.png";
import Veg_Pulao from "../../GlobalAssets/FoodItemPng/Veg_Pulao.png";
// import Idli_Sambar from "../../GlobalAssets/FoodItemPng/Idli_Sambar.png";
// import Masala_Dosa from "../../GlobalAssets/FoodItemPng/Masala_Dosa.png";
// import Omelette from "../../GlobalAssets/FoodItemPng/Omelette.png";
// import French_Toast from "../../GlobalAssets/FoodItemPng/French_Toast.png";
// import Chicken_Shawarma from "../../GlobalAssets/FoodItemPng/Chicken_Shawarma.png";
// import Hummus_with_Pita from "../../GlobalAssets/FoodItemPng/Hummus_with_Pita.png";
// import Baklava from "../../GlobalAssets/FoodItemPng/Baklava.png";
// import Shish_Kebab from "../../GlobalAssets/FoodItemPng/Shish_Kebab.png";
// import Tempura from "../../GlobalAssets/FoodItemPng/Tempura.png";
// import Miso_Soup from "../../GlobalAssets/FoodItemPng/Miso_Soup.png";
// import Udon_Noodles from "../../GlobalAssets/FoodItemPng/Udon_Noodles.png";
// import Teriyaki_Chicken from "../../GlobalAssets/FoodItemPng/Teriyaki_Chicken.png";
// import Lobster_Roll from "../../GlobalAssets/FoodItemPng/Lobster_Roll.png";
// import Prawn_Curry from "../../GlobalAssets/FoodItemPng/Prawn_Curry.png";
// import Crab_Cakes from "../../GlobalAssets/FoodItemPng/Crab_Cakes.png";
// import Clam_Chowder from "../../GlobalAssets/FoodItemPng/Clam_Chowder.png";
// import Cupcake from "../../GlobalAssets/FoodItemPng/Cupcake.png";
// import Brownie from "../../GlobalAssets/FoodItemPng/Brownie.png";
// import Cheesecake from "../../GlobalAssets/FoodItemPng/Cheesecake.png";
// import Panna_Cotta from "../../GlobalAssets/FoodItemPng/Panna_Cotta.png";
// import Smoothie_Bowl from "../../GlobalAssets/FoodItemPng/Smoothie_Bowl.png";
// import Protein_Shake from "../../GlobalAssets/FoodItemPng/Protein_Shake.png";

// ✅ Full 60-item Menu
const menuItems = [
  { id: 1, name: "Margherita_Pizza", category: "Pizza", price: 299, image: Margherita_Pizza, glow: "from-red-400/30 to-orange-400/30" },
  { id: 2, name: "BBQ_Chicken_Wings", category: "Chicken", price: 349, image: BBQ_Chicken_Wings, glow: "from-orange-500/30 to-red-500/30" },
  { id: 3, name: "Strawberry_Smoothie", category: "Drinks", price: 149, image: Strawberry_Smoothie, glow: "from-pink-400/30 to-rose-400/30" },
  { id: 4, name: "Veggie_Pizza", category: "Pizza", price: 329, image: Veggie_Pizza, glow: "from-green-400/30 to-lime-400/30" },
  { id: 5, name: "Spicy_Tacos", category: "Mexican", price: 249, image: Spicy_Tacos, glow: "from-yellow-400/30 to-orange-400/30" },
  { id: 6, name: "Pasta_Alfredo", category: "Pasta", price: 399, image: Pasta_Alfredo, glow: "from-yellow-300/30 to-amber-200/30" },
  { id: 7, name: "Chocolate_Donut", category: "Dessert", price: 99, image: Chocolate_Donut, glow: "from-amber-700/30 to-yellow-600/30" },
  { id: 8, name: "Caesar_Salad", category: "Salad", price: 199, image: Caesar_Salad, glow: "from-green-300/30 to-emerald-400/30" },
  { id: 9, name: "Sushi_Platter", category: "Japanese", price: 899, image: Sushi_Platter, glow: "from-pink-300/30 to-yellow-300/30" },
  { id: 10, name: "French_Fries", category: "Snacks", price: 129, image: French_Fries, glow: "from-yellow-300/30 to-amber-400/30" },
  { id: 11, name: "Ice_Cream", category: "Dessert", price: 149, image: Ice_Cream, glow: "from-pink-200/30 to-purple-300/30" },
  { id: 12, name: "Chicken_Burger", category: "Burgers", price: 249, image: Chicken_Burger, glow: "from-yellow-400/30 to-red-400/30" },
  { id: 13, name: "Veggie_Burger", category: "Burgers", price: 229, image: Veggie_Burger, glow: "from-green-400/30 to-lime-300/30" },
  { id: 14, name: "Grilled_Salmon", category: "Seafood", price: 1199, image: Grilled_Salmon, glow: "from-orange-300/30 to-pink-300/30" },
  { id: 15, name: "Cheese_Sandwich", category: "Snacks", price: 149, image: Cheese_Sandwich, glow: "from-yellow-200/30 to-amber-300/30" },
  { id: 16, name: "Pancakes", category: "Breakfast", price: 179, image: Pancakes, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 17, name: "Ramen_Bowl", category: "Japanese", price: 499, image: Ramen_Bowl, glow: "from-red-300/30 to-orange-400/30" },
  { id: 18, name: "Butter_Chicken", category: "Indian", price: 349, image: Butter_Chicken, glow: "from-orange-500/30 to-red-500/30" },
  { id: 19, name: "Falafel_Wrap", category: "Middle Eastern", price: 229, image: Falafel_Wrap, glow: "from-green-300/30 to-emerald-400/30" },
  { id: 20, name: "Tiramisu", category: "Dessert", price: 299, image: Tiramisu, glow: "from-amber-400/30 to-yellow-300/30" },
  { id: 21, name: "Pepperoni_Pizza", category: "Pizza", price: 349, image: Pepperoni_Pizza, glow: "from-red-500/30 to-yellow-400/30" },
  { id: 22, name: "Garlic_Bread", category: "Snacks", price: 129, image: Garlic_Bread, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 23, name: "Mango_Lassi", category: "Drinks", price: 99, image: Mango_Lassi, glow: "from-yellow-300/30 to-orange-300/30" },
  { id: 24, name: "Cold_Coffee", category: "Drinks", price: 149, image: Cold_Coffee, glow: "from-brown-300/30 to-yellow-200/30" },
  { id: 25, name: "Blueberry_Muffin", category: "Dessert", price: 89, image: Blueberry_Muffin, glow: "from-purple-300/30 to-blue-300/30" },
  { id: 26, name: "Veg_Hakka_Noodles", category: "Indian", price: 179, image: Veg_Hakka_Noodles, glow: "from-green-300/30 to-orange-300/30" },
  { id: 27, name: "Chicken_Biryani", category: "Indian", price: 299, image: Chicken_Biryani, glow: "from-yellow-400/30 to-red-400/30" },
  { id: 28, name: "Mutton_Kebab", category: "Indian", price: 399, image: Mutton_Kebab, glow: "from-red-400/30 to-orange-400/30" },
  { id: 29, name: "Onion_Rings", category: "Snacks", price: 139, image: Onion_Rings, glow: "from-yellow-300/30 to-amber-400/30" },
  { id: 30, name: "Fish_Tacos", category: "Mexican", price: 249, image: Fish_Tacos, glow: "from-yellow-300/30 to-orange-400/30" },
  { id: 31, name: "Veg_Spring_Roll", category: "Snacks", price: 159, image: Veg_Spring_Roll, glow: "from-green-300/30 to-emerald-300/30" },
  { id: 32, name: "Club_Sandwich", category: "Snacks", price: 189, image: Club_Sandwich, glow: "from-yellow-300/30 to-amber-400/30" },
  { id: 33, name: "Avocado_Salad", category: "Salad", price: 219, image: Avocado_Salad, glow: "from-green-400/30 to-lime-400/30" },
  // { id: 34, name: "Greek_Salad", category: "Salad", price: 229, image: Greek_Salad, glow: "from-green-400/30 to-blue-300/30" },
  { id: 35, name: "Fried_Rice", category: "Indian", price: 199, image: Fried_Rice, glow: "from-yellow-200/30 to-orange-200/30" },
  { id: 36, name: "Dal_Makhani", category: "Indian", price: 249, image: Dal_Makhani, glow: "from-orange-300/30 to-brown-300/30" },
  { id: 37, name: "Chole_Bhature", category: "Indian", price: 229, image: Chole_Bhature, glow: "from-yellow-400/30 to-red-400/30" },
  { id: 38, name: "Veg_Pulao", category: "Indian", price: 199, image: Veg_Pulao, glow: "from-green-300/30 to-yellow-200/30" },
  // { id: 39, name: "Idli_Sambar", category: "Breakfast", price: 99, image: Idli_Sambar, glow: "from-orange-300/30 to-yellow-300/30" },
  // { id: 40, name: "Masala_Dosa", category: "Breakfast", price: 149, image: Masala_Dosa, glow: "from-yellow-300/30 to-orange-400/30" },
  // { id: 41, name: "Omelette", category: "Breakfast", price: 89, image: Omelette, glow: "from-yellow-200/30 to-orange-200/30" },
  // { id: 42, name: "French_Toast", category: "Breakfast", price: 129, image: French_Toast, glow: "from-yellow-300/30 to-amber-300/30" },
  // { id: 43, name: "Chicken_Shawarma", category: "Middle Eastern", price: 249, image: Chicken_Shawarma, glow: "from-red-300/30 to-yellow-300/30" },
  // { id: 44, name: "Hummus_with_Pita", category: "Middle Eastern", price: 199, image: Hummus_with_Pita, glow: "from-yellow-200/30 to-brown-300/30" },
  // { id: 45, name: "Baklava", category: "Dessert", price: 299, image: Baklava, glow: "from-yellow-300/30 to-brown-400/30" },
  // { id: 46, name: "Shish_Kebab", category: "Middle Eastern", price: 349, image: Shish_Kebab, glow: "from-red-300/30 to-orange-300/30" },
  // { id: 47, name: "Tempura", category: "Japanese", price: 399, image: Tempura, glow: "from-yellow-200/30 to-red-300/30" },
  // { id: 48, name: "Miso_Soup", category: "Japanese", price: 149, image: Miso_Soup, glow: "from-green-200/30 to-yellow-200/30" },
  // { id: 49, name: "Udon_Noodles", category: "Japanese", price: 249, image: Udon_Noodles, glow: "from-yellow-200/30 to-orange-200/30" },
  // { id: 50, name: "Teriyaki_Chicken", category: "Japanese", price: 349, image: Teriyaki_Chicken, glow: "from-orange-300/30 to-red-400/30" },
  // { id: 51, name: "Lobster_Roll", category: "Seafood", price: 1399, image: Lobster_Roll, glow: "from-orange-400/30 to-pink-400/30" },
  // { id: 52, name: "Prawn_Curry", category: "Seafood", price: 799, image: Prawn_Curry, glow: "from-red-400/30 to-orange-400/30" },
  // { id: 53, name: "Crab_Cakes", category: "Seafood", price: 999, image: Crab_Cakes, glow: "from-yellow-300/30 to-orange-300/30" },
  // { id: 54, name: "Clam_Chowder", category: "Seafood", price: 699, image: Clam_Chowder, glow: "from-yellow-200/30 to-white/30" },
  // { id: 55, name: "Cupcake", category: "Dessert", price: 99, image: Cupcake, glow: "from-pink-300/30 to-yellow-300/30" },
  // { id: 56, name: "Brownie", category: "Dessert", price: 129, image: Brownie, glow: "from-brown-300/30 to-yellow-200/30" },
  // { id: 57, name: "Cheesecake", category: "Dessert", price: 199, image: Cheesecake, glow: "from-yellow-200/30 to-pink-200/30" },
  // { id: 58, name: "Panna_Cotta", category: "Dessert", price: 249, image: Panna_Cotta, glow: "from-red-200/30 to-yellow-200/30" },
  // { id: 59, name: "Smoothie_Bowl", category: "Breakfast", price: 179, image: Smoothie_Bowl, glow: "from-purple-200/30 to-pink-200/30" },
  // { id: 60, name: "Protein_Shake", category: "Drinks", price: 199, image: Protein_Shake, glow: "from-yellow-200/30 to-brown-300/30" },
];

const ClientFoodItemsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems.filter((item) => activeCategory === "All" || item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 px-6 md:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12 mt-25">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Premium Menu ✨
        </h1>
        <p className="text-gray-700 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Experience luxury dining with fresh ingredients, crafted flavors, and a touch of elegance.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {["All","Pizza","Burgers","Chicken","Pasta","Dessert","Drinks","Snacks","Salad","Japanese","Mexican","Seafood","Breakfast","Indian","Middle Eastern"].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all backdrop-blur-md ${
              activeCategory === cat
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg ring-2 ring-red-300/50"
                : "bg-white/70 border border-gray-200 text-gray-600 hover:bg-white shadow-sm"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
              className="relative bg-gradient-to-br from-white/90 via-gray-50 to-gray-100 backdrop-blur-xl rounded-3xl 
                         shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]
                         p-7 flex flex-col items-center text-center transform-gpu transition-all duration-500 border border-gray-100 group"
            >
              {/* Glow Accent */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700`}
              ></div>

              {/* Food Image */}
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-pink-100 to-red-200 
                              flex items-center justify-center shadow-[inset_0_8px_16px_rgba(255,255,255,0.6)] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.35)]"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                {/* Price Badge */}
                <span className="absolute bottom-2 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 
                                 text-gray-900 px-3 py-1 text-xs font-bold rounded-full 
                                 shadow-[0_6px_12px_rgba(0,0,0,0.25)] ring-2 ring-yellow-200">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="mt-6 text-lg font-extrabold text-gray-900 tracking-tight drop-shadow-md">
                {item.name}
              </h3>
              <span className="text-xs mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 
                               text-gray-700 shadow-inner font-medium">
                {item.category}
              </span>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.2, boxShadow: "0px 12px 30px rgba(220,38,38,0.45)" }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 p-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 
                           hover:from-red-600 hover:to-red-700 text-white 
                           shadow-[0_10px_20px_rgba(0,0,0,0.25)] ring-2 ring-red-300/40 transition-all duration-300"
              >
                <FiShoppingCart className="w-6 h-6 drop-shadow-sm" />
              </motion.button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">No items found 😔</p>
        )}
      </div>
    </div>
  );
};

export default ClientFoodItemsPage;
