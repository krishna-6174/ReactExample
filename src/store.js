import { configureStore,  createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
  name: 'products',
  initialState: {
  vegItems : [
  {
    id: 1,
    title: "Fresh Tomatoes",
    description:
      "Farm-fresh juicy red tomatoes, rich in Vitamin C and perfect for curries, salads, soups, and sauces. Carefully handpicked to ensure quality and taste.",
    price: 40,
    offerPrice: 35,
    image: "/veg/tomato.png",
    rating: 4.5,
    reviewCount: 210,
    inStock: true,
  },
  {
    id: 2,
    title: "Golden Potatoes",
    description:
      "Premium-quality potatoes, rich in starch, perfect for fries, aloo paratha, chips, and curries. Naturally grown with no added chemicals.",
    price: 30,
    offerPrice: 28,
    image: "/veg/potato.png",
    rating: 4.3,
    reviewCount: 175,
    inStock: true,
  },
  {
    id: 3,
    title: "Ladies Finger (Bhindi)",
    description:
      "Crisp, tender green bhindi full of nutrition and taste. Great for crispy fries, dry sabzis, or gravy-based curries. A staple vegetable for Indian kitchens.",
    price: 50,
    offerPrice: 46,
    image: "/veg/bendi.png",
    rating: 4.4,
    reviewCount: 132,
    inStock: true,
  },
  {
    id: 4,
    title: "Bottle Gourd (Lauki)",
    description:
      "Light, nutritious bottle gourd that is excellent for weight loss and digestion. Perfect for curries, soups, and dal preparations.",
    price: 35,
    offerPrice: 30,
    image: "/veg/bottle_guard.png",
    rating: 4.1,
    reviewCount: 110,
    inStock: false,
  },
  {
    id: 5,
    title: "Desi Carrots",
    description:
      "Bright orange, crunchy carrots full of natural sweetness and antioxidants. Excellent for salads, juices, stir-fries, and soups.",
    price: 45,
    offerPrice: 40,
    image: "/veg/carrot.png",
    rating: 4.6,
    reviewCount: 260,
    inStock: true,
  },
  {
    id: 6,
    title: "Green Cabbage",
    description:
      "Fresh, tightly packed green cabbage heads perfect for stir-fries, curries, soups, and stuffing for momos and parathas.",
    price: 25,
    offerPrice: 22,
    image: "/veg/cabbage.png",
    rating: 4.4,
    reviewCount: 140,
    inStock: true,
  },
  {
    id: 7,
    title: "Cauliflower (Gobi)",
    description:
      "Fresh white florets of cauliflower, ideal for curries, gobi manchurian, pakoras, and healthy roasted snacks.",
    price: 55,
    offerPrice: 50,
    image: "/veg/cauliflower.png",
    rating: 4.5,
    reviewCount: 195,
    inStock: true,
  },
  {
    id: 8,
    title: "Spinach (Palak)",
    description:
      "Nutrient-rich spinach leaves, freshly harvested and rich in iron. Ideal for palak paneer, dal palak, and soups.",
    price: 20,
    offerPrice: 18,
    image: "/veg/spinach.png",
    rating: 4.7,
    reviewCount: 185,
    inStock: true,
  },
  {
    id: 9,
    title: "Brinjal (Baingan)",
    description:
      "Glossy purple brinjals with a soft, creamy texture. Perfect for baingan bharta, curries, and stir-fries.",
    price: 40,
    offerPrice: 36,
    image: "/veg/brinjal.png",
    rating: 4.2,
    reviewCount: 102,
    inStock: true,
  },
  {
    id: 10,
    title: "Capsicum (Bell Pepper)",
    description:
      "Bright green bell peppers with a crunchy bite, ideal for fried rice, pizza toppings, stir-fries, and curries.",
    price: 60,
    offerPrice: 55,
    image: "/veg/capsicum.png",
    rating: 4.6,
    reviewCount: 150,
    inStock: true,
  },
  {
    id: 11,
    title: "Fresh Green Peas",
    description:
      "Sweet and tender green peas, freshly shelled and perfect for matar paneer, pulao, upma, and snacks.",
    price: 70,
    offerPrice: 65,
    image: "/veg/peas.png",
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
  },
  {
    id: 12,
    title: "Red Onions",
    description:
      "Fresh red onions with strong flavor, a kitchen essential for curries, salads, and gravies.",
    price: 35,
    offerPrice: 30,
    image: "/veg/onion.png",
    rating: 4.4,
    reviewCount: 310,
    inStock: true,
  },
  {
    id: 13,
    title: "Garlic Pods",
    description:
      "Aromatic garlic bulbs with strong flavor, perfect for seasoning curries, chutneys, and roasted dishes.",
    price: 90,
    offerPrice: 82,
    image: "/veg/garlic.png",
    rating: 4.5,
    reviewCount: 165,
    inStock: true,
  },
  {
    id: 14,
    title: "Fresh Ginger",
    description:
      "Zesty ginger roots packed with flavor and medicinal properties. Ideal for teas, curries, and marinades.",
    price: 120,
    offerPrice: 110,
    image: "/veg/ginger.png",
    rating: 4.6,
    reviewCount: 145,
    inStock: true,
  },
  {
    id: 15,
    title: "Coriander Leaves (Dhaniya)",
    description:
      "Fragrant coriander leaves, freshly cut and perfect for garnishing curries, dals, and chutneys.",
    price: 15,
    offerPrice: 12,
    image: "/veg/coriander.png",
    rating: 4.7,
    reviewCount: 200,
    inStock: true,
  },
  {
    id: 16,
    title: "Mint Leaves (Pudina)",
    description:
      "Refreshing mint leaves that add a cooling touch to chutneys, raitas, biryanis, and mojitos.",
    price: 20,
    offerPrice: 18,
    image: "/veg/mint.png",
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
  },
  {
    id: 17,
    title: "White Radish (Mooli)",
    description:
      "Crunchy and juicy white radishes perfect for mooli paratha, salads, and sambhar.",
    price: 25,
    offerPrice: 22,
    image: "/veg/radish.png",
    rating: 4.3,
    reviewCount: 120,
    inStock: false,
  },
  {
    id: 18,
    title: "Drumstick (Moringa)",
    description:
      "Nutritious drumsticks rich in vitamins and minerals, commonly used in sambhar, curries, and rasam.",
    price: 40,
    offerPrice: 36,
    image: "/veg/drumstick.png",
    rating: 4.5,
    reviewCount: 130,
    inStock: true,
  },
  {
    id: 19,
    title: "Yellow Pumpkin",
    description:
      "Sweet, tender pumpkin that cooks into a soft, creamy texture. Perfect for curries, soups, and desserts.",
    price: 35,
    offerPrice: 30,
    image: "/veg/pumpkin.png",
    rating: 4.4,
    reviewCount: 90,
    inStock: true,
  },
  {
    id: 20,
    title: "Bitter Gourd (Karela)",
    description:
      "Green bitter gourd known for its health benefits. Great for stir-fries, stuffed karela, and curries.",
    price: 45,
    offerPrice: 40,
    image: "/veg/bitter_gourd.png",
    rating: 4.1,
    reviewCount: 80,
    inStock: true,
  },
],


//nonveg items..to display in NonVeg.jsx
nonvegItems : [
  {
    id: 101,
    title: "Fresh Chicken",
    description:
      "Farm-fresh, tender, and juicy chicken perfect for curries, biryanis, barbecues, and roasts. Skinless and cleaned for your convenience.",
    price: 200,
    offerPrice: 185,
    image: "/nonveg/chicken.png",
    rating: 4.6,
    reviewCount: 450,
    inStock: true,
  },
  {
    id: 102,
    title: "Premium Mutton",
    description:
      "Soft and flavorful mutton sourced from grass-fed goats. Ideal for slow-cooked curries, biryanis, and weekend feasts.",
    price: 550,
    offerPrice: 520,
    image: "/nonveg/mutton.webp",
    rating: 4.7,
    reviewCount: 320,
    inStock: true,
  },
  {
    id: 103,
    title: "Fresh River Fish",
    description:
      "Delicious river fish, rich in protein and omega-3, perfect for frying, steaming, or spicy fish curries.",
    price: 300,
    offerPrice: 280,
    image: "/nonveg/fish.png",
    rating: 4.4,
    reviewCount: 210,
    inStock: true,
  },
  {
    id: 104,
    title: "Juicy Prawns",
    description:
      "Fresh and succulent prawns, cleaned and deveined, ideal for curries, stir-fries, fried rice, and biryanis.",
    price: 400,
    offerPrice: 370,
    image: "/nonveg/prawns.png",
    rating: 4.5,
    reviewCount: 260,
    inStock: true,
  },
  {
    id: 105,
    title: "Farm-Fresh Eggs",
    description:
      "Protein-rich eggs with a golden yolk, perfect for breakfast, omelets, boiled eggs, and baking needs.",
    price: 60,
    offerPrice: 55,
    image: "/nonveg/eggs.png",
    rating: 4.8,
    reviewCount: 500,
    inStock: true,
  },
  {
    id: 106,
    title: "Sea Crab",
    description:
      "Fresh, juicy crabs packed with flavor. Great for crab curry, masala fry, and seafood lovers.",
    price: 500,
    offerPrice: 460,
    image: "/nonveg/crab.png",
    rating: 4.6,
    reviewCount: 170,
    inStock: true,
  },
  {
    id: 107,
    title: "Tender Lamb Meat",
    description:
      "Soft, lean lamb meat perfect for kebabs, curries, and aromatic grilled dishes. Trimmed and fresh.",
    price: 600,
    offerPrice: 560,
    image: "/nonveg/lamb.png",
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
  },
  {
    id: 108,
    title: "Farm Duck",
    description:
      "Rich and flavorful duck meat, excellent for slow-roasted dishes, curries, and festive meals.",
    price: 450,
    offerPrice: 420,
    image: "/nonveg/duck.png",
    rating: 4.3,
    reviewCount: 98,
    inStock: false,
  },
  {
    id: 109,
    title: "Fresh Squid (Calamari)",
    description:
      "Soft and tender squid, cleaned and ready to cook. Great for fried calamari rings, grills, and seafood curries.",
    price: 350,
    offerPrice: 320,
    image: "/nonveg/squid.png",
    rating: 4.5,
    reviewCount: 110,
    inStock: true,
  },
  {
    id: 110,
    title: "Lean Turkey Meat",
    description:
      "Protein-packed turkey meat, perfect for healthy meals, roasts, and grilled dishes. Low-fat and nutritious.",
    price: 500,
    offerPrice: 470,
    image: "/nonveg/turkey.png",
    rating: 4.4,
    reviewCount: 135,
    inStock: true,
  },
  {
    id: 112,
    title: "Fresh Goat Meat",
    description:
      "Tender goat meat ideal for traditional curries, stews, and slow cooking. Packed with authentic flavor.",
    price: 550,
    offerPrice: 520,
    image: "/nonveg/goat.png",
    rating: 4.6,
    reviewCount: 190,
    inStock: true,
  },
  {
    id: 113,
    title: "Premium Beef Cuts",
    description:
      "Juicy, tender beef cuts perfect for steaks, kebabs, and curries. Grass-fed and hygienically packed.",
    price: 700,
    offerPrice: 660,
    image: "/nonveg/beef.png",
    rating: 4.5,
    reviewCount: 160,
    inStock: true,
  },
  {
    id: 114,
    title: "Fresh Pork Meat",
    description:
      "Flavorful and juicy pork, ideal for roasts, curries, chops, and pulled pork recipes.",
    price: 400,
    offerPrice: 370,
    image: "/nonveg/pork.png",
    rating: 4.3,
    reviewCount: 100,
    inStock: true,
  },
  {
    id: 115,
    title: "Atlantic Salmon",
    description:
      "Premium salmon fillets, rich in omega-3 fatty acids. Perfect for grilling, baking, and sushi.",
    price: 800,
    offerPrice: 750,
    image: "/nonveg/salmon.png",
    rating: 4.9,
    reviewCount: 180,
    inStock: true,
  },
  {
    id: 117,
    title: "Mediterranean Octopus",
    description:
      "Tender octopus meat, cleaned and ready to cook. Ideal for Mediterranean-style grills and seafood platters.",
    price: 600,
    offerPrice: 550,
    image: "/nonveg/octopus.png",
    rating: 4.4,
    reviewCount: 85,
    inStock: false,
  },
  {
    id: 118,
    title: "Premium Lobster",
    description:
      "Sweet, succulent lobster freshly sourced from the sea. A delicacy perfect for luxury dining and seafood platters.",
    price: 1200,
    offerPrice: 1100,
    image: "/nonveg/lobster.png",
    rating: 4.9,
    reviewCount: 95,
    inStock: true,
  },
  {
    id: 120,
    title: "Fresh Oysters",
    description:
      "Juicy, tender oysters fresh from the sea, great for soups, grills, and raw preparations.",
    price: 500,
    offerPrice: 470,
    image: "/nonveg/oyster.png",
    rating: 4.2,
    reviewCount: 60,
    inStock: true,
  },
  {
    id: 121,
    title: "Salty Anchovies",
    description:
      "Small, flavorful anchovies that add a burst of umami to pizzas, salads, and seafood curries.",
    price: 250,
    offerPrice: 230,
    image: "/nonveg/anchovis.png",
    rating: 4.3,
    reviewCount: 70,
    inStock: true,
  },
  {
    id: 122,
    title: "Fresh Sardines",
    description:
      "Nutritious sardines rich in calcium and omega-3, perfect for grilling, frying, and curry preparations.",
    price: 220,
    offerPrice: 200,
    image: "/nonveg/sardine.png",
    rating: 4.5,
    reviewCount: 90,
    inStock: true,
  },
  {
    id: 123,
    title: "Smoked Ham",
    description:
      "Delicious smoked ham slices perfect for sandwiches, pizzas, and breakfast platters.",
    price: 600,
    offerPrice: 560,
    image: "/nonveg/ham.png",
    rating: 4.6,
    reviewCount: 115,
    inStock: true,
  },
  {
    id: 124,
    title: "Crispy Bacon",
    description:
      "Smoky, crispy bacon strips that make a perfect addition to burgers, salads, and breakfast meals.",
    price: 450,
    offerPrice: 420,
    image: "/nonveg/bacon.png",
    rating: 4.8,
    reviewCount: 160,
    inStock: true,
  },
  {
    id: 126,
    title: "Lean Venison",
    description:
      "Tender venison meat with a rich, earthy flavor. Ideal for steaks, curries, and healthy protein-packed meals.",
    price: 900,
    offerPrice: 850,
    image: "/nonveg/venison.png",
    rating: 4.4,
    reviewCount: 55,
    inStock: true,
  },
],
//milk items..to display in Milk.jsx
milkItems : [
  {
    id: 201,
    title: "Full Cream Milk",
    description:
      "Rich and creamy full cream milk, perfect for tea, coffee, milkshakes, and desserts. Packed with protein and calcium for a healthy lifestyle.",
    price: 60,
    discount: 10,
    rating: 4.7,
    reviewCount: 520,
    image: "/milk/full-cream.png",
    inStock: true,
  },
  {
    id: 202,
    title: "Toned Milk",
    description:
      "Healthy toned milk with reduced fat content, ideal for daily use and recommended for a balanced diet.",
    price: 50,
    discount: 5,
    rating: 4.5,
    reviewCount: 430,
    image: "/milk/toned-milk.webp",
    inStock: true,
  },
  {
    id: 203,
    title: "Double Toned Milk",
    description:
      "Low-fat double toned milk, great for fitness-conscious individuals. Keeps you light while maintaining nutrition.",
    price: 45,
    discount: 8,
    rating: 4.4,
    reviewCount: 390,
    image: "/milk/double-toned.webp",
    inStock: true,
  },
  {
    id: 204,
    title: "Skimmed Milk",
    description:
      "Fat-free skimmed milk, high in protein and calcium, suitable for weight management and heart health.",
    price: 40,
    discount: 5,
    rating: 4.3,
    reviewCount: 250,
    image: "/milk/skimmed-milk.png",
    inStock: true,
  },
  {
    id: 205,
    title: "Cow Milk",
    description:
      "Pure cow milk, sourced fresh every day, naturally nutritious and perfect for daily drinking.",
    price: 55,
    discount: 10,
    rating: 4.6,
    reviewCount: 600,
    image: "/milk/cow-milk.webp",
    inStock: true,
  },
  {
    id: 206,
    title: "Buffalo Milk",
    description:
      "Thick and creamy buffalo milk, rich in calcium and flavor. Best for making curd, paneer, and sweets.",
    price: 65,
    discount: 7,
    rating: 4.5,
    reviewCount: 350,
    image: "/milk/buffalo-milk.webp",
    inStock: true,
  },
  {
    id: 207,
    title: "Organic Milk",
    description:
      "Farm-fresh organic milk produced without chemicals, hormones, or preservatives for a natural taste.",
    price: 70,
    discount: 12,
    rating: 4.8,
    reviewCount: 450,
    image: "/milk/organic-milk.png",
    inStock: true,
  },
  {
    id: 208,
    title: "Flavored Milk - Chocolate",
    description:
      "Delicious chocolate-flavored milk, a treat loved by kids and adults alike. Perfect for a quick energy boost.",
    price: 80,
    discount: 10,
    rating: 4.7,
    reviewCount: 800,
    image: "/milk/chacolate-milk.png",
    inStock: true,
  },
  {
    id: 209,
    title: "Flavored Milk - Strawberry",
    description:
      "Sweet and refreshing strawberry milk, chilled and ready-to-drink. Great as a post-meal dessert drink.",
    price: 80,
    discount: 10,
    rating: 4.6,
    reviewCount: 720,
    image: "/milk/strawberry-milk.png",
    inStock: true,
  },
  {
    id: 210,
    title: "Flavored Milk - Vanilla",
    description:
      "Smooth vanilla-flavored milk, mildly sweet and creamy, perfect for milkshake lovers.",
    price: 80,
    discount: 10,
    rating: 4.5,
    reviewCount: 600,
    image: "/milk/vanilla-milk.png",
    inStock: true,
  },
  {
    id: 211,
    title: "Milk Powder",
    description:
      "Instant milk powder, easy to mix and convenient for tea, coffee, baking, and emergencies.",
    price: 200,
    discount: 15,
    rating: 4.4,
    reviewCount: 350,
    image: "/milk/milk-powder.png",
    inStock: true,
  },
  {
    id: 212,
    title: "Condensed Milk",
    description:
      "Thick and sweet condensed milk, ideal for Indian sweets, desserts, and ice creams.",
    price: 120,
    discount: 5,
    rating: 4.7,
    reviewCount: 420,
    image: "/milk/condensed-milk.png",
    inStock: true,
  },
  {
    id: 213,
    title: "Evaporated Milk",
    description:
      "Rich and creamy evaporated milk, perfect for baking, puddings, and custards.",
    price: 100,
    discount: 8,
    rating: 4.5,
    reviewCount: 250,
    image: "/milk/evaporated-milk.webp",
    inStock: true,
  },
  {
    id: 214,
    title: "UHT Milk",
    description:
      "Long-life UHT milk that stays fresh for months without refrigeration until opened.",
    price: 75,
    discount: 6,
    rating: 4.4,
    reviewCount: 300,
    image: "/milk/UHT-milk.webp",
    inStock: true,
  },
  {
    id: 215,
    title: "Lactose-Free Milk",
    description:
      "Easy-to-digest lactose-free milk, specially processed for people with lactose intolerance.",
    price: 90,
    discount: 10,
    rating: 4.6,
    reviewCount: 280,
    image: "/milk/lactose-milk.png",
    inStock: true,
  },
  {
    id: 216,
    title: "Buttermilk",
    description:
      "Refreshing buttermilk (chaas) seasoned with light spices. Great for digestion and cooling in summers.",
    price: 35,
    discount: 5,
    rating: 4.8,
    reviewCount: 520,
    image: "/milk/buttermilk.png",
    inStock: true,
  },
  {
    id: 217,
    title: "Curd",
    description:
      "Creamy, fresh curd (dahi), probiotic-rich and healthy. Perfect for raitas, lassis, and meals.",
    price: 60,
    discount: 10,
    rating: 4.7,
    reviewCount: 610,
    image: "/milk/curd.png",
    inStock: true,
  },
  {
    id: 218,
    title: "Paneer",
    description:
      "Soft and fresh paneer (cottage cheese), rich in protein and perfect for curries, snacks, and sandwiches.",
    price: 300,
    discount: 12,
    rating: 4.8,
    reviewCount: 700,
    image: "/milk/paneer.png",
    inStock: true,
  },
  {
    id: 219,
    title: "Cheese",
    description:
      "Delicious cheese, perfect for pizzas, pastas, burgers, and sandwiches. Rich in flavor and calcium.",
    price: 400,
    discount: 15,
    rating: 4.7,
    reviewCount: 580,
    image: "/milk/cheese-milk.png",
    inStock: true,
  },
  {
    id: 220,
    title: "Butter",
    description:
      "Smooth, creamy butter, perfect for bread, parathas, baking, and cooking.",
    price: 200,
    discount: 10,
    rating: 4.6,
    reviewCount: 450,
    image: "/milk/butter.png",
    inStock: true,
  },
  {
    id: 221,
    title: "Ghee",
    description:
      "Pure desi ghee, aromatic and flavorful. Adds richness to sweets, gravies, and Indian dishes.",
    price: 600,
    discount: 10,
    rating: 4.9,
    reviewCount: 810,
    image: "/milk/ghee.webp",
    inStock: true,
  },
  {
    id: 222,
    title: "Fresh Cream",
    description:
      "Rich and thick fresh cream, perfect for desserts, gravies, and baked goods.",
    price: 150,
    discount: 7,
    rating: 4.5,
    reviewCount: 360,
    image: "/milk/cream.webp",
    inStock: true,
  },
],


medicineItems : [

 {
    id: 301,
    title: "Paracetamol",
    description:
      "Widely used for fever reduction and mild pain relief. Trusted for headaches, body pain, and flu symptoms. Commonly sold as Crocin, Dolo-650.",
    price: 30,
    discount: 5,
    rating: 4.8,
    reviewCount: 1200,
    image: "/medicines/paracetamal.png",
    inStock: true,
  },
  {
    id: 302,
    title: "Ibuprofen",
    description:
      "Anti-inflammatory and pain-relieving medicine. Helps with headaches, muscle pain, menstrual cramps, and minor injuries.",
    price: 40,
    discount: 8,
    rating: 4.6,
    reviewCount: 980,
    image: "/medicines/ibuprofen.png",
    inStock: true,
  },
  {
    id: 303,
    title: "Amoxicillin",
    description:
      "A powerful antibiotic used to treat bacterial infections like throat infection, pneumonia, and ear infections. Always use under prescription.",
    price: 120,
    discount: 10,
    rating: 4.5,
    reviewCount: 560,
    image: "/medicines/amoxicillin.png",
    inStock: true,
  },
  {
    id: 304,
    title: "Cetirizine",
    description:
      "Fast-acting anti-allergic tablet used for runny nose, sneezing, watery eyes, and hay fever relief. Non-drowsy formula available.",
    price: 25,
    discount: 5,
    rating: 4.7,
    reviewCount: 1500,
    image: "/medicines/cetirizine.png",
    inStock: true,
  },
  {
    id: 305,
    title: "Vitamin C Tablets",
    description:
      "Boosts immunity, helps fight infections, promotes collagen production and healthy skin.",
    price: 150,
    discount: 12,
    rating: 4.8,
    reviewCount: 1120,
    image: "/medicines/vitamin-c.png",
    inStock: true,
  },
  {
    id: 306,
    title: "Multivitamin Tablets",
    description:
      "Complete multivitamin supplement with essential vitamins and minerals for daily energy, immunity, and wellness.",
    price: 200,
    discount: 15,
    rating: 4.7,
    reviewCount: 980,
    image: "/medicines/multivitamin.png",
    inStock: true,
  },
  {
    id: 307,
    title: "ORS Sachets",
    description:
      "Oral rehydration solution powder for quick recovery from dehydration caused by diarrhea, vomiting, or heat.",
    price: 15,
    discount: 5,
    rating: 4.9,
    reviewCount: 800,
    image: "/medicines/ors.avif",
    inStock: true,
  },
  {
    id: 308,
    title: "Cough Syrup",
    description:
      "Relieves both dry and wet cough, soothes throat irritation, and provides quick comfort for respiratory issues.",
    price: 90,
    discount: 7,
    rating: 4.5,
    reviewCount: 640,
    image: "/medicines/cough-syrup.webp",
    inStock: true,
  },
  {
    id: 309,
    title: "Azithromycin",
    description:
      "Broad-spectrum antibiotic used for bacterial infections like respiratory infections, skin infections, and typhoid fever. Prescription required.",
    price: 150,
    discount: 10,
    rating: 4.6,
    reviewCount: 410,
    image: "/medicines/azithromycin.png",
    inStock: true,
  },
  {
    id: 310,
    title: "Pain Relief Spray",
    description:
      "Instant pain relief spray for muscle pain, back pain, sprains, and joint stiffness. Quick absorption formula.",
    price: 180,
    discount: 12,
    rating: 4.8,
    reviewCount: 720,
    image: "/medicines/pain-spray.png",
    inStock: true,
  },
  {
    id: 311,
    title: "Digene",
    description:
      "Trusted antacid tablets and syrup for quick relief from acidity, gas, and indigestion.",
    price: 80,
    discount: 5,
    rating: 4.7,
    reviewCount: 550,
    image: "/medicines/digene.png",
    inStock: true,
  },
  {
    id: 312,
    title: "ORS Drink Bottle",
    description:
      "Ready-to-drink electrolyte solution to prevent dehydration during summer or after exercise.",
    price: 35,
    discount: 5,
    rating: 4.9,
    reviewCount: 420,
    image: "/medicines/ors-bottle.png",
    inStock: true,
  },
  {
    id: 313,
    title: "Insulin Injection",
    description:
      "Essential injection for diabetic patients to manage blood sugar levels effectively. Use as per doctor's prescription.",
    price: 500,
    discount: 10,
    rating: 4.8,
    reviewCount: 280,
    image: "/medicines/insulin.png",
    inStock: true,
  },
  {
    id: 314,
    title: "Glucometer Strips",
    description:
      "Easy-to-use test strips for monitoring blood sugar levels at home. Compatible with most glucometers.",
    price: 600,
    discount: 15,
    rating: 4.6,
    reviewCount: 320,
    image: "/medicines/glucometer-strips.png",
    inStock: true,
  },
  {
    id: 315,
    title: "Bandages",
    description:
      "Sterile adhesive bandages for wounds, cuts, and injuries. Provides protection and quick healing.",
    price: 50,
    discount: 10,
    rating: 4.7,
    reviewCount: 700,
    image: "/medicines/bandage.png",
    inStock: true,
  },
  {
    id: 316,
    title: "Antiseptic Liquid",
    description:
      "Antiseptic liquid used to disinfect wounds, prevent infections, and maintain hygiene. Trusted brands include Dettol and Savlon.",
    price: 120,
    discount: 8,
    rating: 4.8,
    reviewCount: 650,
    image: "/medicines/antiseptic.png",
    inStock: true,
  },
  {
    id: 317,
    title: "Vitamin D3",
    description:
      "Supports bone health, improves calcium absorption, and boosts immunity. Recommended for vitamin D deficiency.",
    price: 180,
    discount: 10,
    rating: 4.8,
    reviewCount: 480,
    image: "/medicines/vitamin-d3.png",
    inStock: true,
  },
  {
    id: 318,
    title: "Calcium Tablets",
    description:
      "Strengthens bones and teeth, helps prevent osteoporosis, and supports muscle function.",
    price: 200,
    discount: 10,
    rating: 4.7,
    reviewCount: 510,
    image: "/medicines/calcium.png",
    inStock: true,
  },
  {
    id: 319,
    title: "Iron Supplements",
    description:
      "Used to treat anemia and iron deficiency, improves energy levels and overall health.",
    price: 170,
    discount: 8,
    rating: 4.6,
    reviewCount: 370,
    image: "/medicines/iron.png",
    inStock: true,
  },
  {
    id: 320,
    title: "Electrolyte Powder",
    description:
      "Instant hydration energy drink powder. Replenishes salts and prevents dehydration during heat or exercise.",
    price: 40,
    discount: 5,
    rating: 4.9,
    reviewCount: 600,
    image: "/medicines/electrolyte.png",
    inStock: true,
  },
  {
    id: 321,
    title: "Hand Sanitizer",
    description:
      "Kills 99.9% of germs instantly. Pocket-friendly hygiene solution for home and travel use.",
    price: 70,
    discount: 12,
    rating: 4.8,
    reviewCount: 890,
    image: "/medicines/sanitizer.png",
    inStock: true,
  },
  {
    id: 322,
    title: "Thermometer",
    description:
      "Digital thermometer for accurate body temperature measurement. Suitable for home and clinic use.",
    price: 250,
    discount: 10,
    rating: 4.6,
    reviewCount: 320,
    image: "/medicines/thermometer.png",
    inStock: true,
  },
],
drinkItems: [
  {
    id: 420,
    title: "Fresh Orange Juice",
    description:
      "100% freshly squeezed oranges, rich in Vitamin C and natural sweetness. Perfect immunity booster.",
    price: 90,
    discount: 8,
    rating: 4.9,
    reviewCount: 820,
    image: "/drinks/orange-juice.png",
    inStock: true,
  },
  {
    id: 421,
    title: "Apple Juice",
    description:
      "Made from fresh apples, naturally sweet and packed with antioxidants. A healthy drink for all ages.",
    price: 85,
    discount: 7,
    rating: 4.8,
    reviewCount: 610,
    image: "/drinks/apple-juice.webp",
    inStock: true,
  },
  {
    id: 422,
    title: "Mango Juice",
    description:
      "Sweet and pulpy mango juice, loved by kids and adults. A tropical delight in every sip.",
    price: 95,
    discount: 10,
    rating: 4.9,
    reviewCount: 940,
    image: "/drinks/mango-juice.webp",
    inStock: true,
  },
  {
    id: 423,
    title: "Pineapple Juice",
    description:
      "Refreshing tropical juice made from ripe pineapples. Great source of Vitamin C and digestive enzymes.",
    price: 100,
    discount: 8,
    rating: 4.7,
    reviewCount: 530,
    image: "/drinks/pineapple-juice.jpg",
    inStock: true,
  },
  {
    id: 424,
    title: "Pomegranate Juice",
    description:
      "Rich in antioxidants and iron, this juice helps boost energy and improve heart health.",
    price: 120,
    discount: 10,
    rating: 4.9,
    reviewCount: 670,
    image: "/drinks/pomegranate-juice.webp",
    inStock: true,
  },
  {
    id: 425,
    title: "Mixed Fruit Juice",
    description:
      "A colorful blend of fresh seasonal fruits, offering a burst of flavors and essential nutrients.",
    price: 110,
    discount: 9,
    rating: 4.8,
    reviewCount: 720,
    image: "/drinks/mixed-fruit.webp",
    inStock: true,
  },
  {
    id: 400,
    title: "Coca-Cola",
    description:
      "Classic fizzy soft drink with a unique cola flavor. Perfectly refreshing and best served chilled. Available in bottles and cans.",
    price: 40,
    discount: 5,
    rating: 4.8,
    reviewCount: 2200,
    image: "/drinks/coca-cola.png",
    inStock: true,
  },
  {
    id: 401,
    title: "Pepsi",
    description:
      "Popular cola-flavored soft drink with a sweet, refreshing taste. Great companion for snacks and parties.",
    price: 40,
    discount: 5,
    rating: 4.7,
    reviewCount: 1900,
    image: "/drinks/pepsi.png",
    inStock: true,
  },
  {
    id: 402,
    title: "Sprite",
    description:
      "Lemon-lime flavored carbonated drink. Crisp, clear, and extra refreshing with a zesty twist.",
    price: 35,
    discount: 4,
    rating: 4.8,
    reviewCount: 2100,
    image: "/drinks/sprite.webp",
    inStock: true,
  },
  {
    id: 403,
    title: "Fanta Orange",
    description:
      "Fruity, bubbly orange-flavored soft drink. Bright, tangy, and sweet taste that kids and adults love.",
    price: 35,
    discount: 5,
    rating: 4.7,
    reviewCount: 1750,
    image: "/drinks/fanta-orange.webp",
    inStock: true,
  },
  {
    id: 404,
    title: "Mountain Dew",
    description:
      "Citrus-flavored soft drink with a bold and energizing taste. Great for game nights and outdoor fun.",
    price: 45,
    discount: 6,
    rating: 4.6,
    reviewCount: 1620,
    image: "/drinks/mountain-dew.png",
    inStock: true,
  },
  {
    id: 405,
    title: "Thumbs Up",
    description:
      "Strong cola-flavored fizzy drink with a signature punch. Loved by those who prefer bold, spicy cola taste.",
    price: 40,
    discount: 5,
    rating: 4.8,
    reviewCount: 1800,
    image: "/drinks/thumbs-up.webp",
    inStock: true,
  },
  {
    id: 406,
    title: "7UP",
    description:
      "Clear lemon-lime drink with a crisp, clean, and refreshing flavor. Perfect for mixing or drinking alone.",
    price: 35,
    discount: 5,
    rating: 4.7,
    reviewCount: 1450,
    image: "/drinks/7up.png",
    inStock: true,
  },
  {
    id: 407,
    title: "Limca",
    description:
      "Popular Indian lemon-lime soft drink with a tangy, zesty taste. Refreshing and light on the stomach.",
    price: 35,
    discount: 5,
    rating: 4.6,
    reviewCount: 1280,
    image: "/drinks/limca.png",
    inStock: true,
  },
  {
    id: 408,
    title: "Maaza Mango",
    description:
      "Thick, pulpy mango drink made from real mangoes. The ultimate choice for mango lovers all year round.",
    price: 50,
    discount: 8,
    rating: 4.9,
    reviewCount: 2500,
    image: "/drinks/maaza-mango.webp",
    inStock: true,
  },
  {
    id: 409,
    title: "Slice Mango",
    description:
      "Smooth, rich, and velvety mango drink with authentic fruit flavor. A true treat for summer thirst.",
    price: 50,
    discount: 8,
    rating: 4.8,
    reviewCount: 2300,
    image: "/drinks/slice-mango.png",
    inStock: true,
  },
  {
    id: 410,
    title: "Appy Fizz",
    description:
      "India’s first sparkling apple drink. Sweet, fizzy, and classy – a perfect mocktail base for parties.",
    price: 55,
    discount: 10,
    rating: 4.7,
    reviewCount: 1750,
    image: "/drinks/appy-fizz.webp",
    inStock: true,
  },
  {
    id: 411,
    title: "Paper Boat Aam Panna",
    description:
      "Traditional Indian raw mango summer cooler with a sweet, tangy, and spiced taste.",
    price: 60,
    discount: 8,
    rating: 4.8,
    reviewCount: 980,
    image: "/drinks/paper-boat.webp",
    inStock: true,
  },
  {
    id: 412,
    title: "Red Bull",
    description:
      "World-famous energy drink. Gives you wings with caffeine, taurine, and B-vitamins for instant energy.",
    price: 120,
    discount: 5,
    rating: 4.7,
    reviewCount: 3000,
    image: "/drinks/redbull.png",
    inStock: true,
  },
  {
    id: 413,
    title: "Monster Energy",
    description:
      "High-performance energy drink with a bold flavor and extra caffeine boost. Popular among gamers and athletes.",
    price: 130,
    discount: 7,
    rating: 4.6,
    reviewCount: 2200,
    image: "/drinks/monster.jpg",
    inStock: true,
  },
  {
    id: 414,
    title: "Gatorade",
    description:
      "Electrolyte sports drink designed to rehydrate and restore energy during workouts and sports.",
    price: 90,
    discount: 6,
    rating: 4.8,
    reviewCount: 1400,
    image: "/drinks/gatorade.jpg",
    inStock: true,
  },
  {
    id: 415,
    title: "Tender Coconut Water",
    description:
      "100% natural coconut water. Packed with electrolytes, light, and refreshing. Great for hydration.",
    price: 60,
    discount: 5,
    rating: 4.9,
    reviewCount: 1700,
    image: "/drinks/coconut-water.webp",
    inStock: true,
  },
  {
    id: 416,
    title: "Sugarcane Juice",
    description:
      "Traditional natural sugarcane drink, rich in nutrients and instantly energizing. Best served chilled.",
    price: 50,
    discount: 5,
    rating: 4.8,
    reviewCount: 890,
    image: "/drinks/sugarcane.jpg",
    inStock: true,
  },
  {
    id: 417,
    title: "Buttermilk",
    description:
      "Cool and refreshing spiced buttermilk drink. Excellent for digestion and summer heat relief.",
    price: 30,
    discount: 8,
    rating: 4.8,
    reviewCount: 1300,
    image: "/drinks/Buttermilk.webp",
    inStock: true,
  },
  {
    id: 418,
    title: "Cold Coffee",
    description:
      "Iced coffee blended with milk and sugar. Perfect pick-me-up drink for coffee lovers.",
    price: 80,
    discount: 10,
    rating: 4.7,
    reviewCount: 1600,
    image: "/drinks/cold-coffee.webp",
    inStock: true,
  },
  {
    id: 419,
    title: "Lassi",
    description:
      "Traditional Indian yogurt-based drink, available in sweet and salty variants. Thick and satisfying.",
    price: 50,
    discount: 8,
    rating: 4.9,
    reviewCount: 1100,
    image: "/drinks/lassi.png",
    inStock: true,
  },
],
  treatItems: [
  {
    id: 500,
    title: "Gulab Jamun",
    description:
      "Soft and spongy milk-solid dumplings, deep-fried to golden perfection and soaked in fragrant sugar syrup. A classic Indian dessert served warm or at room temperature.",
    price: 120,
    discount: 8,
    rating: 4.9,
    reviewCount: 1450,
    image: "/treats/julab-gamun.jpg",
    inStock: true,
  },
  {
    id: 501,
    title: "Rasgulla",
    description:
      "Delicate and spongy cottage cheese balls soaked in light sugar syrup. A melt-in-mouth treat that is light, refreshing, and perfect after meals.",
    price: 110,
    discount: 7,
    rating: 4.8,
    reviewCount: 980,
    image: "/treats/rasagulla.webp",
    inStock: true,
  },
  {
    id: 502,
    title: "Kaju Katli",
    description:
      "Thin diamond-shaped cashew nut fudge made with premium cashews, sugar, and ghee. Smooth, rich, and elegant sweet for festive occasions.",
    price: 250,
    discount: 10,
    rating: 4.9,
    reviewCount: 1320,
    image: "/treats/kaju-katli.webp",
    inStock: true,
  },
  {
    id: 503,
    title: "Laddu (Besan)",
    description:
      "Golden gram flour laddus roasted in ghee and mixed with sugar and cardamom. A wholesome, nutty-flavored sweet that everyone loves.",
    price: 150,
    discount: 8,
    rating: 4.8,
    reviewCount: 890,
    image: "/treats/laddu.png",
    inStock: true,
  },
  {
    id: 504,
    title: "Jalebi",
    description:
      "Crispy, coiled deep-fried sweet soaked in saffron-flavored sugar syrup. Served hot for the perfect crunchy and syrupy bite.",
    price: 100,
    discount: 7,
    rating: 4.7,
    reviewCount: 1250,
    image: "/treats/jalebi.png",
    inStock: true,
  },
  {
    id: 505,
    title: "Soan Papdi",
    description:
      "Flaky and melt-in-the-mouth traditional sweet made with gram flour, ghee, and sugar. Light, airy texture makes it a perfect tea-time treat.",
    price: 130,
    discount: 8,
    rating: 4.6,
    reviewCount: 720,
    image: "/treats/soan-papidi.webp",
    inStock: true,
  },
  {
    id: 506,
    title: "Barfi (Milk Barfi)",
    description:
      "Soft and creamy fudge made from milk solids, sugar, and a hint of cardamom. Can be garnished with pistachios or silver leaf.",
    price: 180,
    discount: 9,
    rating: 4.8,
    reviewCount: 870,
    image: "/treats/milk-barfi.png",
    inStock: true,
  },
  {
    id: 507,
    title: "Mysore Pak",
    description:
      "South Indian delicacy made from ghee, sugar, and gram flour. Rich, buttery, and crumbly in every bite – melts in your mouth instantly.",
    price: 190,
    discount: 8,
    rating: 4.7,
    reviewCount: 640,
    image: "/treats/mysore-pak.webp",
    inStock: true,
  },
  {
    id: 508,
    title: "Samosa",
    description:
      "Crispy golden pastry filled with spiced mashed potatoes, peas, and herbs. A perfect savory snack with tea and chutney.",
    price: 30,
    discount: 5,
    rating: 4.9,
    reviewCount: 3000,
    image: "/treats/samosa.webp",
    inStock: true,
  },
  {
    id: 509,
    title: "Kachori",
    description:
      "Deep-fried, flaky pastry stuffed with spiced lentil mixture or peas. Crunchy outside and flavorful inside – ideal for breakfast or snacks.",
    price: 35,
    discount: 5,
    rating: 4.8,
    reviewCount: 2500,
    image: "/treats/kachori.webp",
    inStock: true,
  },
  {
    id: 510,
    title: "Pakora (Veg Fritters)",
    description:
      "Crispy vegetable fritters made with gram flour and spices. Perfect rainy-day snack served with green chutney.",
    price: 50,
    discount: 6,
    rating: 4.7,
    reviewCount: 2100,
    image: "/treats/pakora.webp",
    inStock: true,
  },
  {
    id: 511,
    title: "Chivda (Namkeen Mixture)",
    description:
      "Crispy spiced mixture of flattened rice, peanuts, and lentils. Light, crunchy, and full of flavor for all-day munching.",
    price: 120,
    discount: 8,
    rating: 4.6,
    reviewCount: 1100,
    image: "/treats/chivda.png",
    inStock: true,
  },
  {
    id: 512,
    title: "Murukku",
    description:
      "Traditional South Indian crispy spiral snack made from rice flour and spices. Crunchy, savory, and addictive.",
    price: 140,
    discount: 7,
    rating: 4.7,
    reviewCount: 950,
    image: "/treats/murukku.webp",
    inStock: true,
  },
  {
    id: 513,
    title: "Banana Chips",
    description:
      "Thinly sliced raw bananas deep-fried till crisp and lightly salted. A crunchy, gluten-free snack alternative.",
    price: 90,
    discount: 6,
    rating: 4.8,
    reviewCount: 1800,
    image: "/treats/banana-chips.png",
    inStock: true,
  },
  {
    id: 514,
    title: "Mathri",
    description:
      "North Indian flaky and crispy biscuit-like snack made from flour and spices. Often served with pickle or tea.",
    price: 100,
    discount: 8,
    rating: 4.7,
    reviewCount: 820,
    image: "/treats/mathri.png",
    inStock: true,
  },
  {
    id: 515,
    title: "Khakhra",
    description:
      "Thin and crunchy Gujarati snack made from wheat flour and spices. Light, healthy, and perfect for guilt-free munching.",
    price: 80,
    discount: 7,
    rating: 4.8,
    reviewCount: 700,
    image: "/treats/khakhra.png",
    inStock: true,
  },
  {
    id: 516,
    title: "Sev",
    description:
      "Crunchy noodle-like savory snack made with gram flour. Can be eaten as-is or used as topping for chaats.",
    price: 70,
    discount: 6,
    rating: 4.6,
    reviewCount: 650,
    image: "/treats/sev.png",
    inStock: true,
  },
  {
    id: 517,
    title: "Bhakarwadi",
    description:
      "Spicy and tangy rolled snack filled with a flavorful masala mix. A popular Maharashtrian tea-time delight.",
    price: 130,
    discount: 8,
    rating: 4.7,
    reviewCount: 750,
    image: "/treats/bhakarwadi.png",
    inStock: true,
  },
  {
    id: 518,
    title: "Chakli",
    description:
      "Crunchy and spiral-shaped deep-fried snack made with rice flour and spices. A Diwali favorite and year-round snack.",
    price: 140,
    discount: 7,
    rating: 4.8,
    reviewCount: 980,
    image: "/treats/chakli.png",
    inStock: true,
  },
  {
    id: 519,
    title: "Pani Puri Kit",
    description:
      "Crispy puris with ready-to-mix spiced tangy water and fillings. Bring the street food experience home with this DIY kit.",
    price: 150,
    discount: 9,
    rating: 4.9,
    reviewCount: 2100,
    image: "/treats/pani-puri.png",
    inStock: true,
  },
]

  },
  reducers: {}
});



// ================= CART SLICE =================
const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.push({ ...item, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state)); // ✅ Fix: save array, not object
    },
    incrementQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(state));
        } else {
          const updatedState = state.filter((i) => i.id !== action.payload.id);
          localStorage.setItem("cart", JSON.stringify(updatedState));
          return updatedState;
        }
      }
    },
    removeFromCart: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

// ================= WISHLIST SLICE =================
const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: savedWishlist,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
    removeFromWishlist: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(updatedState));
      return updatedState;
    },
    clearWishlist: () => {
      localStorage.removeItem("wishlist");
      return [];
    },
  },
});

// ================= USERS SLICE =================
const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
const savedAuthState = JSON.parse(localStorage.getItem("authState") || "null");


const initialState = {
  allUsers: savedUsers, // ✅ List of all registered users
  isAuthenticated: savedAuthState?.isAuthenticated || false,
  currentUser: savedAuthState?.currentUser || null,
  error: null, // ✅ Track login errors
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // ✅ Register new user
    registerUser: (state, action) => {
      state.allUsers.push(action.payload); // add new user to list
      localStorage.setItem("users", JSON.stringify(state.allUsers));
    },

    // ✅ Login user (set current user + authentication)
    loginUser: (state, action) => {
       // clear error before checking
  state.error = null;
      const user = state.allUsers.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
        state.error = null; // clear previous errors
        localStorage.setItem(
          "authState",
          JSON.stringify({
            isAuthenticated: true,
            currentUser: user,
          })
        );
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.error = "Invalid login credentials"; // set error for useEffect
      }
    },

    // ✅ Update currently logged-in user (profile update)
    updateCurrentUser: (state, action) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };

        // also update in allUsers list
        const index = state.allUsers.findIndex(
          (u) => u.email === state.currentUser.email
        );
        if (index !== -1) state.allUsers[index] = state.currentUser;

        localStorage.setItem("users", JSON.stringify(state.allUsers));
        localStorage.setItem(
          "authState",
          JSON.stringify({
            isAuthenticated: state.isAuthenticated,
            currentUser: state.currentUser,
          })
        );
      }
    },

    // ✅ Logout user
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null;
      localStorage.setItem(
        "authState",
        JSON.stringify({
          isAuthenticated: false,
          currentUser: null,
        })
      );
    },

    // ✅ Check login state from localStorage (useful on app reload)
    checkLogin: (state) => {
      const savedAuth = JSON.parse(localStorage.getItem("authState") || "null");
      if (savedAuth) {
        state.isAuthenticated = savedAuth.isAuthenticated;
        state.currentUser = savedAuth.currentUser;
        state.error = null;
      }
    },
  },
});






// ================= ORDERS SLICE =================
const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");

const orderSlice = createSlice({
  name: "orders",
  initialState: savedOrders,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state));
    },
    removeOrder: (state, action) => {
      const updatedState = state.filter((order) => order.id !== action.payload.id);
      localStorage.setItem("orders", JSON.stringify(updatedState));
      return updatedState;
    },
    clearOrders: () => {
      localStorage.removeItem("orders");
      return [];
    },
  },
});



// ================= CONFIGURE STORE =================
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    products: productsSlice.reducer,
    users: usersSlice.reducer,
    orders: orderSlice.reducer,
  },
});


// ✅ Export Actions
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export const {
  registerUser,
  loginUser,
  updateCurrentUser,
  logoutUser,
  checkLogin,
} = usersSlice.actions;

export const { addOrder, removeOrder, clearOrders } = orderSlice.actions;
export default store;
