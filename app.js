/**
 * ASAD KHAN RESTAURANT — CORE APPLICATION LOGIC
 * Authentic Shinwari Karahi, Live Charcoal BBQ & Royal Dastarkhwan
 */

// ========================================================
// 1. COMPREHENSIVE MENU DATABASE
// ========================================================
const RESTAURANT_MENU = [
  // --- SHINWARI & KARAHI ---
  {
    id: "shinwari-lamb-karahi",
    name: "Shinwari Lamb Karahi (Desi Ghee)",
    urduName: "شینواری دم پخت دنبہ کڑاہی",
    category: "shinwari",
    priceHalf: 2100,
    priceFull: 3950,
    basePrice: 2100,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    badge: "Crown Signature",
    tag: "bestseller",
    isMutton: true,
    spiceLevel: "Mild (Rock Salt & Tomatoes)",
    spiceCode: "mild",
    prepTime: "35 mins",
    desc: "Cooked fresh in natural lamb fat, luscious ripe tomatoes, and Himalayan rock salt over open firewood flame. No synthetic spices."
  },
  {
    id: "shinwari-desi-murgh-karahi",
    name: "Desi Murgh Shinwari Karahi",
    urduName: "دیسی مرغ شینواری کڑاہی",
    category: "shinwari",
    priceHalf: 1450,
    priceFull: 2700,
    basePrice: 1450,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    badge: "Organic Country Chicken",
    tag: "mild",
    isMutton: false,
    spiceLevel: "Mild",
    spiceCode: "mild",
    prepTime: "30 mins",
    desc: "Free-range organic chicken gently braised in desi ghee, green chillies, and crushed garlic cloves."
  },
  {
    id: "mutton-dum-pukht",
    name: "Royal Mutton Dum Pukht (Dunba)",
    urduName: "روائل مٹن دم پخت (پشتون روایتی)",
    category: "shinwari",
    priceHalf: 2400,
    priceFull: 4500,
    basePrice: 2400,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "Slow-Cooked 4 Hours",
    tag: "mutton",
    isMutton: true,
    spiceLevel: "Mild Herbal",
    spiceCode: "mild",
    prepTime: "Pre-Order / 45 mins",
    desc: "Sealed dough clay-pot slow braise of mountain mutton with potatoes, whole garlic pods, ginger root, and cracked black pepper."
  },
  {
    id: "shinwari-white-mutton-karahi",
    name: "Shinwari White Butter Mutton",
    urduName: "شینواری وائٹ مکھنی کڑاہی",
    category: "shinwari",
    priceHalf: 2200,
    priceFull: 4100,
    basePrice: 2200,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    badge: "Rich Cream & Cashews",
    tag: "bestseller",
    isMutton: true,
    spiceLevel: "Mild Creamy",
    spiceCode: "mild",
    prepTime: "35 mins",
    desc: "Tender goat mutton simmered in fresh dairy cream, churned butter, yogurt, and crushed green cardamoms."
  },

  // --- CHARCOAL BBQ & KEBABS ---
  {
    id: "peshawari-chappal-kabab",
    name: "Peshawari Mutton Chappal Kabab",
    urduName: "پشاوری مٹن چپلی کباب",
    category: "bbq",
    priceHalf: 850,
    priceFull: 1600,
    basePrice: 850,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    badge: "Crispy Sizzler",
    tag: "bestseller",
    isMutton: true,
    spiceLevel: "Spicy & Tangy",
    spiceCode: "spicy",
    prepTime: "20 mins",
    desc: "Minced mountain mutton kneaded with pomegranate seeds (anardana), coriander seeds, fresh tomato discs, fried in mutton tallow."
  },
  {
    id: "beef-seekh-kabab",
    name: "Smoky Charcoal Beef Seekh Kabab (4 Pcs)",
    urduName: "سیخ کباب بیف چارکول",
    category: "bbq",
    priceHalf: 750,
    priceFull: 1400,
    basePrice: 750,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    badge: "Charcoal Master",
    tag: "spicy",
    isMutton: false,
    spiceLevel: "Medium Spicy",
    spiceCode: "spicy",
    prepTime: "15 mins",
    desc: "Skewered spiced minced beef roasted over red-hot coconut-shell coals, infused with raw papaya and secret aromatic herbs."
  },
  {
    id: "reshmi-malai-boti",
    name: "Royal Chicken Malai Boti (8 Pcs)",
    urduName: "ریشمی ملائی بوٹی چارکول",
    category: "bbq",
    priceHalf: 680,
    priceFull: 1250,
    basePrice: 680,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    badge: "Melt In Mouth",
    tag: "mild",
    isMutton: false,
    spiceLevel: "Mild Velvet",
    spiceCode: "mild",
    prepTime: "20 mins",
    desc: "Boneless chicken thigh cubes marinated in heavy cream, hung curd, white pepper, and mace, roasted to velvety softness."
  },
  {
    id: "balochi-sajji",
    name: "Balochi Sajji with Fragrant Rice (Full)",
    urduName: "بلوچی سجی روایتی مع چاول",
    category: "bbq",
    priceHalf: 1100,
    priceFull: 1950,
    basePrice: 1950,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    badge: "Traditional Skewer",
    tag: "bestseller",
    isMutton: false,
    spiceLevel: "Mild Citrus & Salt",
    spiceCode: "mild",
    prepTime: "30 mins",
    desc: "Whole chicken charcoal-roasted on vertical skewers with crisp crackling skin, served on seasoned long-grain rice."
  },
  {
    id: "mutton-chops-bbq",
    name: "Charcoal Lamb Chops (Champen) - 6 Pcs",
    urduName: "مٹن چانپیں باربی کیو",
    category: "bbq",
    priceHalf: 1350,
    priceFull: 2400,
    basePrice: 1350,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "Prime Cut",
    tag: "mutton",
    isMutton: true,
    spiceLevel: "Medium Spicy",
    spiceCode: "spicy",
    prepTime: "25 mins",
    desc: "Tender lamb rib chops marinated in roasted cumin, raw papaya, and garlic oil, seared to smoky caramelization."
  },

  // --- RICE & BIRYANI ---
  {
    id: "mutton-saffron-biryani",
    name: "Asad Khan Special Mutton Saffron Biryani",
    urduName: "روائل مٹن زعفرانی بریانی",
    category: "rice",
    priceHalf: 880,
    priceFull: 1650,
    basePrice: 880,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Dum Recipe",
    tag: "bestseller",
    isMutton: true,
    spiceLevel: "Rich & Aromatic",
    spiceCode: "spicy",
    prepTime: "20 mins",
    desc: "Aged long-grain basmati layered with tender spiced lamb shank, natural saffron milk, fried onions, and mint."
  },
  {
    id: "peshawari-kabuli-pulao",
    name: "Authentic Peshawari Kabuli Pulao",
    urduName: "پشاوری کابلی پلاؤ کشمش و بادام",
    category: "rice",
    priceHalf: 850,
    priceFull: 1550,
    basePrice: 850,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    badge: "Sweet & Savory",
    tag: "mild",
    isMutton: true,
    spiceLevel: "Mild Sweet-Savory",
    spiceCode: "mild",
    prepTime: "15 mins",
    desc: "Fluffy sella rice simmered in lamb stock, crowned with glazed carrots, black raisins, toasted almonds, and a tender mutton joint."
  },

  // --- HANDI & CURRIES ---
  {
    id: "chicken-makhni-handi",
    name: "Clay Pot Chicken Makhni Handi",
    urduName: "مکھنی چکن ہانڈی مٹی والی",
    category: "handi",
    priceHalf: 1150,
    priceFull: 2150,
    basePrice: 1150,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    badge: "Desi Butter Rich",
    tag: "bestseller",
    isMutton: false,
    spiceLevel: "Mild Butter",
    spiceCode: "mild",
    prepTime: "25 mins",
    desc: "Boneless chicken simmered in clay matka with rich tomato-cashew reduction, farm butter, and dry fenugreek (kasuri methi)."
  },
  {
    id: "mutton-roghan-josh",
    name: "Shahi Mutton Roghan Josh",
    urduName: "شاہی مٹن روغن جوش",
    category: "handi",
    priceHalf: 1850,
    priceFull: 3400,
    basePrice: 1850,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Kashmiri",
    tag: "mutton",
    isMutton: true,
    spiceLevel: "Aromatic Medium",
    spiceCode: "spicy",
    prepTime: "30 mins",
    desc: "Slow-braised lamb shanks enriched with ratajot root for ruby hue, whole cardamom, and sun-dried ginger."
  },

  // --- FRESH TANDOOR NAAN ---
  {
    id: "garlic-roghni-naan",
    name: "Garlic Butter Roghni Naan",
    urduName: "گارلک مکھنی روغنی نان",
    category: "tandoor",
    priceHalf: 90,
    priceFull: 90,
    basePrice: 90,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    badge: "Clay Tandoor",
    tag: "mild",
    isMutton: false,
    spiceLevel: "Garlic Butter",
    spiceCode: "mild",
    prepTime: "8 mins",
    desc: "Fluffy leavened flatbread brushed with milk, topped with crushed garlic, coriander, and golden desi ghee."
  },
  {
    id: "kandahari-sesame-naan",
    name: "Kandahari Sesame Roghni Naan",
    urduName: "قندھاری تل والا نان",
    category: "tandoor",
    priceHalf: 80,
    priceFull: 80,
    basePrice: 80,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    badge: "Tandoor Fresh",
    tag: "mild",
    isMutton: false,
    spiceLevel: "Nutty Sesame",
    spiceCode: "mild",
    prepTime: "8 mins",
    desc: "Traditional elongated naan coated with toasted sesame seeds and melted butter."
  },
  {
    id: "cheese-stuffed-naan",
    name: "Melted Mozzarella Stuffed Naan",
    urduName: "چیزی چیز نان تندوری",
    category: "tandoor",
    priceHalf: 280,
    priceFull: 280,
    basePrice: 280,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    badge: "Cheese Pull",
    tag: "bestseller",
    isMutton: false,
    spiceLevel: "Mild Cheesy",
    spiceCode: "mild",
    prepTime: "10 mins",
    desc: "Packed with melted cheese and herbs, straight out of the clay tandoor."
  },

  // --- DESSERTS & KAHWA ---
  {
    id: "peshawari-saffron-kahwa",
    name: "Peshawari Green Tea Kahwa (Pot)",
    urduName: "پشاوری زعفرانی قہوہ بادامی",
    category: "desserts",
    priceHalf: 250,
    priceFull: 450,
    basePrice: 250,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    badge: "Digestive Elixir",
    tag: "mild",
    isMutton: false,
    spiceLevel: "Cardamom & Saffron",
    spiceCode: "mild",
    prepTime: "5 mins",
    desc: "Authentic green tea leaves infused with green cardamom, saffron threads, lemon wedge, and slivered almonds."
  },
  {
    id: "shahi-matka-kheer",
    name: "Shahi Matka Zafrani Kheer",
    urduName: "شاہی مٹکا زعفرانی کھیر",
    category: "desserts",
    priceHalf: 320,
    priceFull: 320,
    basePrice: 320,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    badge: "Clay Matka",
    tag: "bestseller",
    isMutton: false,
    spiceLevel: "Sweet",
    spiceCode: "mild",
    prepTime: "Instant",
    desc: "Slow-reduced milk pudding scented with kewra water, saffron strands, pistachio dust, served chilled in clay cups."
  },
  {
    id: "hot-gulab-jamun",
    name: "Hot Desi Ghee Gulab Jamun (2 Pcs)",
    urduName: "گرم دیسی گھی گلاب جامن",
    category: "desserts",
    priceHalf: 220,
    priceFull: 220,
    basePrice: 220,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    badge: "Pure Khoya",
    tag: "mild",
    isMutton: false,
    spiceLevel: "Sweet",
    spiceCode: "mild",
    prepTime: "Instant",
    desc: "Warm khoya dumplings fried in pure desi ghee, soaked in rose cardamom sugar syrup."
  }
];

// ========================================================
// 2. SIGNATURE DELICACIES (HERO FEATURE SECTION)
// ========================================================
const SIGNATURE_PICKS = [
  {
    id: "shinwari-lamb-karahi",
    title: "Shinwari Lamb Karahi",
    urdu: "شینواری دنبہ کڑاہی",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Crown Specialty",
    desc: "The heartbeat of Khyber cuisine. Fresh mountain lamb cuts, natural tallow fat, sweet summer tomatoes, and pure mineral rock salt.",
    price: "Rs. 2,100 / Half Kg",
    spice: "Mild Pure Meat"
  },
  {
    id: "peshawari-chappal-kabab",
    title: "Peshawari Mutton Chappal Kabab",
    urdu: "پشاوری مٹن چپلی کباب",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    badge: "Crisp & Juicy",
    desc: "Coarse hand-pounded mutton mince seasoned with toasted coriander, crushed pomegranate seeds, fresh mint, and griddled over flat pans.",
    price: "Rs. 850 / Pair",
    spice: "Tangy Zest 🌶️"
  },
  {
    id: "mutton-saffron-biryani",
    title: "Emperor's Mutton Saffron Biryani",
    urdu: "روائل زعفرانی مٹن بریانی",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    badge: "Slow Dum Cooked",
    desc: "Aromatic basmati steamed under seal with tenderized meat cuts, saffron-steeped dairy, golden fried onions, and whole spices.",
    price: "Rs. 880 / Half Kg",
    spice: "Fragrant Royal 👑"
  }
];

// ========================================================
// 3. VERIFIED CUSTOMER REVIEWS
// ========================================================
let CUSTOMER_REVIEWS = [
  {
    author: "Malik Usman Khan",
    city: "Islamabad / F-7",
    dish: "Shinwari Lamb Karahi & Garlic Naan",
    rating: 5,
    date: "2 days ago",
    comment: "Hands down the most genuine Shinwari Karahi outside of Khyber Agency. The lamb was so tender it fell off the bone, and the natural meat flavor cooked with rock salt is unmatched. The family Dastarkhwan ambiance was royal!"
  },
  {
    author: "Dr. Ayesha Siddiqui",
    city: "Peshawar Ring Road",
    dish: "Chappal Kabab & Saffron Biryani",
    rating: 5,
    date: "1 week ago",
    comment: "The crisp outer crust and juicy interior of the chappal kabab took me back to traditional Namak Mandi. Absolutely clean, top-tier hospitality, and the Peshawari Kahwa at the end completed our feast."
  },
  {
    author: "Zarrar Haider",
    city: "Lahore DHA",
    dish: "Balochi Sajji & Reshmi Malai Boti",
    rating: 5,
    date: "3 weeks ago",
    comment: "Ordered through their online takeaway for a family gathering of 12. Everything arrived burning hot in thermal packs. The Malai Boti melted like butter! Will definitely order again."
  }
];

// ========================================================
// 4. CART & APPLICATION STATE
// ========================================================
const appState = {
  cart: [],
  currentCategory: "all",
  currentTag: "all",
  searchQuery: "",
  orderType: "delivery", // 'delivery' | 'takeaway' | 'dinein'
  appliedPromo: null,
  activeModalDish: null,
  modalSelectedPortion: "half",
  modalQuantity: 1,
  modalAddons: [],
  // Feast builder state
  feastGuests: 4,
  feastTheme: "shinwari"
};

// Available Promo Codes
const PROMO_CODES = {
  "KHAN15": { discountPercent: 15, name: "15% Heritage Discount" },
  "SHINWARI": { flatDiscount: 300, name: "Rs. 300 Off Feast Discount" },
  "ASAD10": { discountPercent: 10, name: "10% Royal Welcome" }
};

// ========================================================
// 5. INITIALIZATION & DOM ATTACHMENTS
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  initSignatures();
  renderMenuItems();
  renderFeastSummary();
  renderReviews();
  setupEventListeners();
  loadCartFromStorage();
  updateCartBadge();
  setupDateDefault();
});

function setupDateDefault() {
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

// ========================================================
// 6. RENDER FUNCTIONS
// ========================================================

/** Render Chef's Signatures */
function initSignatures() {
  const grid = document.getElementById("signatures-grid");
  if (!grid) return;

  grid.innerHTML = SIGNATURE_PICKS.map(item => `
    <article class="signature-card">
      <div class="sig-img-wrap">
        <img src="${item.image}" alt="${item.title}" class="sig-img" loading="lazy">
        <span class="sig-badge">${item.badge}</span>
        <span class="sig-spice-badge">${item.spice}</span>
      </div>
      <div class="sig-body">
        <span class="sig-urdu-name">${item.urdu}</span>
        <h3 class="sig-title">${item.title}</h3>
        <p class="sig-desc">${item.desc}</p>
        <div class="sig-footer">
          <div class="sig-price">${item.price}</div>
          <button type="button" class="btn btn-gold-solid btn-sm open-dish-btn" data-id="${item.id}">
            <span>Order Sizzler</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/** Render Filtered Menu Items */
function renderMenuItems() {
  const grid = document.getElementById("menu-items-grid");
  const emptyState = document.getElementById("empty-search-state");
  if (!grid) return;

  let filtered = RESTAURANT_MENU.filter(dish => {
    // Category match
    const categoryMatch = appState.currentCategory === "all" || dish.category === appState.currentCategory;
    
    // Tag match
    let tagMatch = true;
    if (appState.currentTag === "bestseller") tagMatch = dish.tag === "bestseller";
    else if (appState.currentTag === "mild") tagMatch = dish.spiceCode === "mild";
    else if (appState.currentTag === "spicy") tagMatch = dish.spiceCode === "spicy";
    else if (appState.currentTag === "mutton") tagMatch = dish.isMutton === true;

    // Search query match
    let searchMatch = true;
    if (appState.searchQuery.trim() !== "") {
      const q = appState.searchQuery.toLowerCase();
      searchMatch = dish.name.toLowerCase().includes(q) ||
                    dish.urduName.toLowerCase().includes(q) ||
                    dish.desc.toLowerCase().includes(q) ||
                    dish.category.toLowerCase().includes(q);
    }

    return categoryMatch && tagMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = filtered.map(dish => {
    const isNaanOrDessert = dish.category === "tandoor" || (dish.category === "desserts" && dish.priceHalf === dish.priceFull);
    const priceDisplay = isNaanOrDessert 
      ? `Rs. ${dish.basePrice.toLocaleString()}` 
      : `From Rs. ${dish.priceHalf.toLocaleString()}`;

    return `
      <article class="menu-food-card" data-dish-id="${dish.id}">
        <div class="food-card-img-wrap">
          <img src="${dish.image}" alt="${dish.name}" class="food-card-img" loading="lazy">
          <span class="food-card-badge">${dish.badge}</span>
        </div>
        <div class="food-card-body">
          <span class="food-card-urdu">${dish.urduName}</span>
          <h3 class="food-card-title">${dish.name}</h3>
          <p class="food-card-desc">${dish.desc}</p>
          <div class="food-card-meta">
            <span>⏱️ ${dish.prepTime}</span>
            <span>🌶️ ${dish.spiceLevel}</span>
          </div>
          <div class="food-card-footer">
            <div class="food-card-price">${priceDisplay}</div>
            <button type="button" class="btn btn-outline-gold btn-sm open-dish-btn" data-id="${dish.id}">
              <span>+ Customize</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ========================================================
// 7. FEAST BUILDER CALCULATOR LOGIC
// ========================================================
const FEAST_CONFIG = {
  shinwari: {
    title: "Pure Shinwari Lamb Feast",
    desc: "Authentic Khyber experience featuring melt-in-mouth lamb karahi, char-grilled skewers, and steaming hot tandoor naans.",
    getBreakdown: (guests) => {
      if (guests === 2) {
        return {
          title: "Couple's Shinwari Delight (2 Persons)",
          items: ["0.5 Kg Desi Ghee Lamb Karahi", "2x Peshawari Chappal Kababs", "3x Garlic Roghni Naans", "Zeera Raita & Salad", "2x Peshawari Saffron Kahwa"],
          origPrice: 3800,
          discPrice: 3250
        };
      } else if (guests === 4) {
        return {
          title: "Family Shinwari Feast (4-5 Persons)",
          items: ["1.0 Kg Shinwari Desi Ghee Lamb Karahi", "4x Peshawari Chappal Kababs", "6x Garlic Roghni Naans", "Large Bowl Zeera Raita & Fresh Salad", "1x Pot Peshawari Saffron Kahwa (4 Cups)", "2x Shahi Matka Kheer"],
          origPrice: 7100,
          discPrice: 6050
        };
      } else if (guests === 8) {
        return {
          title: "Grand Shinwari Gathering (8 Persons)",
          items: ["2.0 Kg Shinwari Lamb Karahi", "8x Peshawari Chappal Kababs", "12x Garlic & Sesame Roghni Naans", "1x Platter Kabuli Pulao with Meat", "Large Raita & Salad Platters", "2x Pots Saffron Kahwa", "4x Shahi Matka Kheer"],
          origPrice: 14500,
          discPrice: 12300
        };
      } else {
        return {
          title: "Royal Shinwari Mehfil (12+ Persons)",
          items: ["3.0 Kg Shinwari Lamb Karahi", "1.0 Kg Desi Murgh Karahi", "12x Chappal Kababs", "20x Assorted Roghni Naans", "2x Trays Saffron Dum Mutton Biryani", "Unlimited Raita, Fresh Mint Salad", "3x Pots Royal Kahwa", "6x Shahi Matka Kheer"],
          origPrice: 22000,
          discPrice: 18700
        };
      }
    }
  },
  bbq: {
    title: "Charcoal BBQ Extravaganza",
    desc: "A smoke-infused celebration with juicy seekh kebabs, creamy malai boti, lamb chops, and fresh condiments.",
    getBreakdown: (guests) => {
      if (guests === 2) {
        return {
          title: "Duo BBQ Platter (2 Persons)",
          items: ["4x Charcoal Beef Seekh Kababs", "4x Reshmi Malai Boti Skewers", "3x Kandahari Sesame Naans", "Mint Chutney & Salad", "2x Fresh Mint Lemonades"],
          origPrice: 3100,
          discPrice: 2650
        };
      } else if (guests === 4) {
        return {
          title: "Family Charcoal BBQ Feast (4-5 Persons)",
          items: ["8x Charcoal Beef Seekh Kababs", "8x Reshmi Malai Boti", "1x Whole Balochi Sajji with Rice", "6x Kandahari Sesame Naans", "Mint Raita & Fresh Onion Salad", "1x Pot Peshawari Kahwa"],
          origPrice: 5900,
          discPrice: 4990
        };
      } else if (guests === 8) {
        return {
          title: "Grand BBQ Grill Fest (8 Persons)",
          items: ["16x Beef Seekh Kababs", "16x Reshmi Malai Boti", "8x BBQ Lamb Chops (Champen)", "2x Whole Balochi Sajji Platters with Rice", "14x Assorted Naans", "Large Chutneys & Raita", "4x Matka Kheer"],
          origPrice: 13200,
          discPrice: 11200
        };
      } else {
        return {
          title: "Emperor's BBQ Banquet (12+ Persons)",
          items: ["24x Beef Seekh Kababs", "24x Malai Boti", "12x BBQ Lamb Chops", "3x Whole Balochi Sajji Platters", "25x Fresh Naans", "Large Saffron Biryani Tray", "Pots of Kahwa & Chilled Matka Kheer"],
          origPrice: 20500,
          discPrice: 17400
        };
      }
    }
  },
  "royal-mix": {
    title: "The Emperor's Mix Spread",
    desc: "The pinnacle experience: Lamb Karahi + BBQ Skewers + Saffron Biryani + Naan & Royal Sweets.",
    getBreakdown: (guests) => {
      if (guests === 2) {
        return {
          title: "Royal Couple's Mix (2 Persons)",
          items: ["0.5 Kg Shinwari Lamb Karahi", "4x Reshmi Malai Boti", "1x Plate Saffron Mutton Biryani", "3x Garlic Roghni Naans", "Raita, Salad & Saffron Kahwa"],
          origPrice: 4200,
          discPrice: 3570
        };
      } else if (guests === 4) {
        return {
          title: "Family Emperor's Spread (4-5 Persons)",
          items: ["1.0 Kg Shinwari Desi Ghee Lamb Karahi", "6x Seekh Kababs", "6x Malai Boti", "1x Platter Saffron Mutton Biryani", "6x Garlic Roghni Naans", "Raita, Kachumber Salad, 1x Pot Kahwa"],
          origPrice: 7800,
          discPrice: 6600
        };
      } else if (guests === 8) {
        return {
          title: "Grand Emperor's Mehfil (8 Persons)",
          items: ["1.5 Kg Shinwari Lamb Karahi", "12x Seekh Kababs", "12x Malai Boti", "2x Platters Saffron Biryani", "14x Roghni Naans", "Full Balochi Sajji with Rice", "Raita, Salad, 4x Matka Kheer, Kahwa"],
          origPrice: 15800,
          discPrice: 13400
        };
      } else {
        return {
          title: "Sultan's Royal Mega Feast (12+ Persons)",
          items: ["2.5 Kg Shinwari Lamb Karahi", "18x Seekh Kababs", "18x Malai Boti", "3x Platters Saffron Mutton Biryani", "2x Whole Balochi Sajji", "25x Roghni Naans", "Special Matka Kheer & Kahwa for All"],
          origPrice: 24500,
          discPrice: 20800
        };
      }
    }
  }
};

function renderFeastSummary() {
  const themeObj = FEAST_CONFIG[appState.feastTheme];
  if (!themeObj) return;

  const bundle = themeObj.getBreakdown(appState.feastGuests);

  const titleEl = document.getElementById("feast-package-title");
  const descEl = document.getElementById("feast-package-desc");
  const origPriceEl = document.getElementById("feast-original-price");
  const bundlePriceEl = document.getElementById("feast-bundle-price");
  const listEl = document.getElementById("feast-items-breakdown");

  if (titleEl) titleEl.textContent = bundle.title;
  if (descEl) descEl.textContent = themeObj.desc;
  if (origPriceEl) origPriceEl.textContent = `Rs. ${bundle.origPrice.toLocaleString()}`;
  if (bundlePriceEl) bundlePriceEl.textContent = `Rs. ${bundle.discPrice.toLocaleString()}`;

  if (listEl) {
    listEl.innerHTML = bundle.items.map(item => `
      <div class="summary-item-row">
        <span class="summary-item-bullet">✦</span>
        <span>${item}</span>
      </div>
    `).join("");
  }
}

// ========================================================
// 8. DISH CUSTOMIZATION MODAL
// ========================================================
function openDishModal(dishId) {
  const dish = RESTAURANT_MENU.find(d => d.id === dishId);
  if (!dish) return;

  appState.activeModalDish = dish;
  appState.modalSelectedPortion = (dish.priceHalf && dish.priceHalf !== dish.priceFull) ? "half" : "standard";
  appState.modalQuantity = 1;
  appState.modalAddons = [];

  const overlay = document.getElementById("item-modal-overlay");
  const imgEl = document.getElementById("modal-dish-img");
  const tagEl = document.getElementById("modal-dish-tag");
  const titleEl = document.getElementById("modal-dish-title");
  const urduEl = document.getElementById("modal-dish-urdu");
  const descEl = document.getElementById("modal-dish-desc");
  const portionGroup = document.getElementById("portion-select-group");
  const portionOptions = document.getElementById("portion-options");
  const qtyVal = document.getElementById("modal-qty-val");
  const instructions = document.getElementById("modal-dish-instructions");

  if (imgEl) imgEl.src = dish.image;
  if (imgEl) imgEl.alt = dish.name;
  if (tagEl) tagEl.textContent = dish.badge;
  if (titleEl) titleEl.textContent = dish.name;
  if (urduEl) urduEl.textContent = dish.urduName;
  if (descEl) descEl.textContent = dish.desc;
  if (qtyVal) qtyVal.textContent = "1";
  if (instructions) instructions.value = "";

  // Reset checkboxes
  document.querySelectorAll('input[name="modal-addon"]').forEach(cb => cb.checked = false);

  // Setup portions
  const hasHalfs = dish.priceHalf && dish.priceHalf !== dish.priceFull;
  if (hasHalfs) {
    portionGroup.style.display = "block";
    portionOptions.innerHTML = `
      <div class="portion-btn active" data-portion="half">
        <strong>Half Kg / Standard</strong>
        <span>Rs. ${dish.priceHalf.toLocaleString()}</span>
      </div>
      <div class="portion-btn" data-portion="full">
        <strong>Full 1.0 Kg / Grand</strong>
        <span>Rs. ${dish.priceFull.toLocaleString()}</span>
      </div>
    `;

    portionOptions.querySelectorAll(".portion-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        portionOptions.querySelectorAll(".portion-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        appState.modalSelectedPortion = btn.dataset.portion;
        updateModalPrice();
      });
    });
  } else {
    portionGroup.style.display = "none";
    appState.modalSelectedPortion = "standard";
  }

  updateModalPrice();
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
}

function closeDishModal() {
  const overlay = document.getElementById("item-modal-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  }
  appState.activeModalDish = null;
}

function updateModalPrice() {
  if (!appState.activeModalDish) return;
  const dish = appState.activeModalDish;

  let unitPrice = dish.basePrice;
  if (dish.priceHalf && dish.priceHalf !== dish.priceFull) {
    unitPrice = appState.modalSelectedPortion === "full" ? dish.priceFull : dish.priceHalf;
  }

  // Calculate selected addons
  let addonsTotal = 0;
  document.querySelectorAll('input[name="modal-addon"]:checked').forEach(cb => {
    addonsTotal += parseInt(cb.dataset.price, 10) || 0;
  });

  const total = (unitPrice + addonsTotal) * appState.modalQuantity;
  const priceDisplay = document.getElementById("modal-final-price");
  if (priceDisplay) {
    priceDisplay.textContent = `Rs. ${total.toLocaleString()}`;
  }
}

// ========================================================
// 9. SHOPPING CART MANAGEMENT
// ========================================================
function addToCart(cartItem) {
  // Check if identical item (same dish, portion, spice, instructions) exists
  const existingIndex = appState.cart.findIndex(item => 
    item.dishId === cartItem.dishId &&
    item.portion === cartItem.portion &&
    item.spice === cartItem.spice &&
    JSON.stringify(item.addons.sort()) === JSON.stringify(cartItem.addons.sort())
  );

  if (existingIndex > -1) {
    appState.cart[existingIndex].quantity += cartItem.quantity;
  } else {
    appState.cart.push(cartItem);
  }

  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  showToast(`Added ${cartItem.quantity}x ${cartItem.name} to Feast Cart! 🥘`);
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-container");
  const emptyMessage = document.getElementById("cart-empty-message");
  const footer = document.getElementById("cart-drawer-footer");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const discountRow = document.getElementById("promo-discount-row");
  const discountVal = document.getElementById("cart-discount-val");
  const deliveryLabel = document.getElementById("cart-delivery-label");
  const deliveryVal = document.getElementById("cart-delivery-val");
  const grandTotalEl = document.getElementById("cart-grandtotal-val");
  const checkoutModalTotal = document.getElementById("checkout-modal-total");

  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = "";
    emptyMessage.style.display = "block";
    footer.style.display = "none";
    updateCartBadge();
    return;
  }

  emptyMessage.style.display = "none";
  footer.style.display = "block";

  // Render items
  container.innerHTML = appState.cart.map((item, index) => {
    const addonsText = item.addons.length > 0 ? `+ ${item.addons.join(", ")}` : "";
    const portionText = item.portion === "full" ? "1.0 Kg (Full)" : item.portion === "half" ? "0.5 Kg (Half)" : "Standard";

    return `
      <div class="cart-item-row" data-index="${index}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${portionText} • ${item.spice} ${addonsText ? `<br><small>${addonsText}</small>` : ""}</div>
          <div class="cart-item-price">Rs. ${(item.unitPrice * item.quantity).toLocaleString()}</div>
        </div>
        <div class="cart-item-actions">
          <button type="button" class="remove-item-btn" data-index="${index}" title="Remove item">&times;</button>
          <div class="qty-counter" style="padding: 2px;">
            <button type="button" class="qty-btn" style="width:24px;height:24px;font-size:0.9rem;" data-action="dec" data-index="${index}">-</button>
            <span class="qty-val" style="min-width:24px;font-size:0.85rem;">${item.quantity}</span>
            <button type="button" class="qty-btn" style="width:24px;height:24px;font-size:0.9rem;" data-action="inc" data-index="${index}">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach quantity / removal handlers
  container.querySelectorAll(".remove-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index, 10);
      removeItemFromCart(idx);
    });
  });

  container.querySelectorAll('.qty-btn[data-action]').forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index, 10);
      const action = btn.dataset.action;
      if (action === "inc") {
        appState.cart[idx].quantity += 1;
      } else if (action === "dec") {
        if (appState.cart[idx].quantity > 1) {
          appState.cart[idx].quantity -= 1;
        } else {
          removeItemFromCart(idx);
          return;
        }
      }
      saveCartToStorage();
      renderCartDrawer();
      updateCartBadge();
    });
  });

  // Calculate Subtotal
  let subtotal = 0;
  appState.cart.forEach(item => {
    subtotal += item.unitPrice * item.quantity;
  });

  // Calculate Discount
  let discount = 0;
  if (appState.appliedPromo) {
    if (appState.appliedPromo.discountPercent) {
      discount = Math.round((subtotal * appState.appliedPromo.discountPercent) / 100);
    } else if (appState.appliedPromo.flatDiscount) {
      discount = Math.min(appState.appliedPromo.flatDiscount, subtotal);
    }
  }

  // Calculate Delivery Fee
  let deliveryFee = 0;
  if (appState.orderType === "delivery") {
    deliveryFee = subtotal > 3500 ? 0 : 150;
    deliveryLabel.textContent = subtotal > 3500 ? "Hot Delivery (Order > Rs. 3,500)" : "Hot Delivery Fee";
    deliveryVal.textContent = deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`;
  } else if (appState.orderType === "takeaway") {
    deliveryLabel.textContent = "Self Pickup at Restaurant";
    deliveryVal.textContent = "FREE";
  } else {
    deliveryLabel.textContent = "Dine-In Table Service";
    deliveryVal.textContent = "FREE";
  }

  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (discount > 0) {
    discountRow.style.display = "flex";
    discountVal.textContent = `- Rs. ${discount.toLocaleString()} (${appState.appliedPromo.name})`;
  } else {
    discountRow.style.display = "none";
  }

  grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;
  if (checkoutModalTotal) checkoutModalTotal.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  updateCartBadge();
}

function removeItemFromCart(index) {
  const removed = appState.cart.splice(index, 1)[0];
  saveCartToStorage();
  renderCartDrawer();
  updateCartBadge();
  if (removed) {
    showToast(`Removed ${removed.name} from cart.`);
  }
}

function updateCartBadge() {
  let count = 0;
  let subtotal = 0;
  appState.cart.forEach(item => {
    count += item.quantity;
    subtotal += item.unitPrice * item.quantity;
  });

  const counterEl = document.getElementById("cart-counter");
  const badgeTotalEl = document.getElementById("cart-total-badge");
  const drawerCountEl = document.getElementById("cart-drawer-count");

  if (counterEl) counterEl.textContent = count;
  if (badgeTotalEl) badgeTotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (drawerCountEl) drawerCountEl.textContent = `${count} ${count === 1 ? "item" : "items"}`;
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  renderCartDrawer();
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

// Local Storage helpers
function saveCartToStorage() {
  try {
    localStorage.setItem("asad_khan_cart", JSON.stringify(appState.cart));
  } catch (e) {
    console.error("Storage save error", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("asad_khan_cart");
    if (saved) {
      appState.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Storage load error", e);
  }
}

// ========================================================
// 10. WHATSAPP DIRECT ORDER GENERATOR
// ========================================================
function generateWhatsAppOrderMessage(customerDetails = {}) {
  let msg = `*Assalam-o-Alaikum Asad Khan Restaurant!* 👑\n`;
  msg += `I would like to place an order from your website.\n\n`;
  msg += `*Order Type:* ${appState.orderType.toUpperCase()}\n`;

  if (customerDetails.name) msg += `*Name:* ${customerDetails.name}\n`;
  if (customerDetails.phone) msg += `*Phone:* ${customerDetails.phone}\n`;
  if (customerDetails.address && appState.orderType === "delivery") {
    msg += `*Address:* ${customerDetails.address}\n`;
  }
  if (customerDetails.paymentMethod) {
    msg += `*Payment:* ${customerDetails.paymentMethod}\n`;
  }

  msg += `\n*=== ORDERED ITEMS ===*\n`;

  let subtotal = 0;
  appState.cart.forEach((item, i) => {
    const itemTotal = item.unitPrice * item.quantity;
    subtotal += itemTotal;
    const portionStr = item.portion === "full" ? "1.0 Kg (Full)" : item.portion === "half" ? "0.5 Kg (Half)" : "Standard";
    msg += `${i + 1}. *${item.name}* (x${item.quantity})\n`;
    msg += `   • Portion: ${portionStr}\n`;
    msg += `   • Spice: ${item.spice}\n`;
    if (item.addons && item.addons.length > 0) {
      msg += `   • Add-ons: ${item.addons.join(", ")}\n`;
    }
    if (item.instructions) {
      msg += `   • Notes: ${item.instructions}\n`;
    }
    msg += `   • Price: Rs. ${itemTotal.toLocaleString()}\n\n`;
  });

  let discount = 0;
  if (appState.appliedPromo) {
    if (appState.appliedPromo.discountPercent) {
      discount = Math.round((subtotal * appState.appliedPromo.discountPercent) / 100);
    } else if (appState.appliedPromo.flatDiscount) {
      discount = Math.min(appState.appliedPromo.flatDiscount, subtotal);
    }
    msg += `*Promo (${appState.appliedPromo.name}):* -Rs. ${discount.toLocaleString()}\n`;
  }

  let deliveryFee = appState.orderType === "delivery" ? (subtotal > 3500 ? 0 : 150) : 0;
  msg += `*Delivery Fee:* ${deliveryFee === 0 ? "FREE" : "Rs. " + deliveryFee}\n`;
  msg += `*GRAND TOTAL PAYABLE:* Rs. ${(subtotal - discount + deliveryFee).toLocaleString()}\n\n`;
  msg += `Please confirm preparation and dispatch time. Shukriya!`;

  return encodeURIComponent(msg);
}

// ========================================================
// 11. REVIEWS RENDERING & SUBMISSION
// ========================================================
function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) return;

  grid.innerHTML = CUSTOMER_REVIEWS.map(r => `
    <article class="review-card">
      <div class="review-card-header">
        <div class="reviewer-info">
          <strong>${r.author}</strong>
          <small>📍 ${r.city || "Verified Guest"} • ${r.date}</small>
        </div>
        <div class="stars-gold">${"★".repeat(r.rating)}</div>
      </div>
      <div class="review-dish-tag">Ordered: ${r.dish}</div>
      <p class="review-text">"${r.comment}"</p>
    </article>
  `).join("");
}

// ========================================================
// 12. EVENT LISTENERS SETUP
// ========================================================
function setupEventListeners() {
  // Mobile drawer
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const closeMobileDrawer = document.getElementById("close-mobile-drawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => mobileDrawer.classList.add("active"));
  }
  if (closeMobileDrawer && mobileDrawer) {
    closeMobileDrawer.addEventListener("click", () => mobileDrawer.classList.remove("active"));
  }
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileDrawer) mobileDrawer.classList.remove("active");
    });
  });

  // Cart open / close
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("close-cart-btn");
  const cartOverlay = document.getElementById("cart-drawer-overlay");
  const cartStartOrderBtn = document.getElementById("cart-start-order-btn");

  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);
  if (cartStartOrderBtn) {
    cartStartOrderBtn.addEventListener("click", () => {
      closeCartDrawer();
      const menuSec = document.getElementById("menu-section");
      if (menuSec) menuSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Order type switcher
  document.querySelectorAll(".type-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".type-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      appState.orderType = tab.dataset.ordertype;
      const addrGroup = document.getElementById("delivery-address-group");
      if (addrGroup) {
        addrGroup.style.display = appState.orderType === "delivery" ? "block" : "none";
      }
      renderCartDrawer();
    });
  });

  // Category filter tabs
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      appState.currentCategory = btn.dataset.category;
      renderMenuItems();
    });
  });

  // Tag filter chips
  document.querySelectorAll(".tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".tag-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      appState.currentTag = chip.dataset.filterTag;
      renderMenuItems();
    });
  });

  // Search input live filtering
  const searchInput = document.getElementById("menu-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = appState.searchQuery.length > 0 ? "flex" : "none";
      }
      renderMenuItems();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      appState.searchQuery = "";
      clearSearchBtn.style.display = "none";
      renderMenuItems();
    });
  }

  const resetFilterBtn = document.getElementById("reset-filter-btn");
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
      appState.currentCategory = "all";
      appState.currentTag = "all";
      appState.searchQuery = "";
      if (searchInput) searchInput.value = "";
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      const allCat = document.querySelector('.category-btn[data-category="all"]');
      if (allCat) allCat.classList.add("active");
      document.querySelectorAll(".tag-chip").forEach(c => c.classList.remove("active"));
      const allTag = document.querySelector('.tag-chip[data-filter-tag="all"]');
      if (allTag) allTag.classList.add("active");
      renderMenuItems();
    });
  }

  // Open Dish Modal delegation
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-dish-btn");
    if (btn) {
      const dishId = btn.dataset.id;
      openDishModal(dishId);
    }
  });

  // Modal Close & Actions
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOverlay = document.getElementById("item-modal-overlay");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeDishModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeDishModal();
    });
  }

  // Modal Qty buttons
  const qtyMinus = document.getElementById("modal-qty-minus");
  const qtyPlus = document.getElementById("modal-qty-plus");
  const qtyVal = document.getElementById("modal-qty-val");

  if (qtyMinus) {
    qtyMinus.addEventListener("click", () => {
      if (appState.modalQuantity > 1) {
        appState.modalQuantity -= 1;
        if (qtyVal) qtyVal.textContent = appState.modalQuantity;
        updateModalPrice();
      }
    });
  }
  if (qtyPlus) {
    qtyPlus.addEventListener("click", () => {
      appState.modalQuantity += 1;
      if (qtyVal) qtyVal.textContent = appState.modalQuantity;
      updateModalPrice();
    });
  }

  // Modal Addons Checkbox listeners
  document.querySelectorAll('input[name="modal-addon"]').forEach(cb => {
    cb.addEventListener("change", updateModalPrice);
  });

  // Modal Form Submission (Add to Cart)
  const itemCustomForm = document.getElementById("item-customization-form");
  if (itemCustomForm) {
    itemCustomForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!appState.activeModalDish) return;

      const dish = appState.activeModalDish;
      const spiceInput = document.querySelector('input[name="spice-level"]:checked');
      const spiceVal = spiceInput ? spiceInput.value : "Authentic Shinwari";

      const selectedAddons = [];
      let addonsCost = 0;
      document.querySelectorAll('input[name="modal-addon"]:checked').forEach(cb => {
        selectedAddons.push(cb.value);
        addonsCost += parseInt(cb.dataset.price, 10) || 0;
      });

      let baseCost = dish.basePrice;
      if (dish.priceHalf && dish.priceHalf !== dish.priceFull) {
        baseCost = appState.modalSelectedPortion === "full" ? dish.priceFull : dish.priceHalf;
      }

      const instructionsEl = document.getElementById("modal-dish-instructions");
      const instructions = instructionsEl ? instructionsEl.value.trim() : "";

      const cartItem = {
        dishId: dish.id,
        name: dish.name,
        image: dish.image,
        portion: appState.modalSelectedPortion,
        unitPrice: baseCost + addonsCost,
        quantity: appState.modalQuantity,
        spice: spiceVal,
        addons: selectedAddons,
        instructions: instructions
      };

      addToCart(cartItem);
      closeDishModal();
    });
  }

  // Feast Builder Guest Selection
  document.querySelectorAll(".guest-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".guest-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      appState.feastGuests = parseInt(pill.dataset.guests, 10);
      renderFeastSummary();
    });
  });

  // Feast Builder Theme Selection
  document.querySelectorAll(".theme-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".theme-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      appState.feastTheme = card.dataset.theme;
      renderFeastSummary();
    });
  });

  // Add Complete Feast to Order
  const addFeastBtn = document.getElementById("add-feast-to-cart-btn");
  if (addFeastBtn) {
    addFeastBtn.addEventListener("click", () => {
      const themeObj = FEAST_CONFIG[appState.feastTheme];
      const bundle = themeObj.getBreakdown(appState.feastGuests);

      const feastCartItem = {
        dishId: `feast-${appState.feastTheme}-${appState.feastGuests}`,
        name: bundle.title,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        portion: `${appState.feastGuests} Persons Spread`,
        unitPrice: bundle.discPrice,
        quantity: 1,
        spice: "Royal Blend & Authentic Rock Salt",
        addons: ["Complimentary Kahwa & Naans"],
        instructions: "Prepared hot on order with VIP Dastarkhwan styling"
      };

      addToCart(feastCartItem);
      openCartDrawer();
    });
  }

  // Promo Code Handler
  const applyPromoBtn = document.getElementById("apply-promo-btn");
  const promoInput = document.getElementById("promo-input");
  const promoFeedback = document.getElementById("promo-feedback");

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) return;

      if (PROMO_CODES[code]) {
        appState.appliedPromo = PROMO_CODES[code];
        if (promoFeedback) {
          promoFeedback.className = "promo-feedback success";
          promoFeedback.textContent = `✓ Promo "${code}" applied: ${appState.appliedPromo.name}!`;
        }
        renderCartDrawer();
        showToast(`Promo "${code}" applied successfully! 🎉`);
      } else {
        if (promoFeedback) {
          promoFeedback.className = "promo-feedback error";
          promoFeedback.textContent = `✕ Invalid code. Try code "KHAN15" for 15% off.`;
        }
      }
    });
  }

  // Direct WhatsApp Checkout
  const checkoutWhatsAppBtn = document.getElementById("checkout-whatsapp-btn");
  if (checkoutWhatsAppBtn) {
    checkoutWhatsAppBtn.addEventListener("click", () => {
      if (appState.cart.length === 0) {
        showToast("Your feast cart is empty! Add dishes first.");
        return;
      }
      const waUrl = `https://wa.me/923001234567?text=${generateWhatsAppOrderMessage()}`;
      window.open(waUrl, "_blank");
    });
  }

  // Standard Checkout Modal
  const checkoutStandardBtn = document.getElementById("checkout-standard-btn");
  const checkoutModal = document.getElementById("checkout-modal-overlay");
  const closeCheckoutModal = document.getElementById("close-checkout-modal");

  if (checkoutStandardBtn && checkoutModal) {
    checkoutStandardBtn.addEventListener("click", () => {
      if (appState.cart.length === 0) {
        showToast("Your cart is empty! Add dishes before checkout.");
        return;
      }
      closeCartDrawer();
      checkoutModal.classList.add("active");
    });
  }

  if (closeCheckoutModal && checkoutModal) {
    closeCheckoutModal.addEventListener("click", () => {
      checkoutModal.classList.remove("active");
    });
  }

  // Order Checkout Form Submission
  const orderCheckoutForm = document.getElementById("order-checkout-form");
  if (orderCheckoutForm) {
    orderCheckoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("order-cust-name").value;
      const phone = document.getElementById("order-cust-phone").value;
      const address = document.getElementById("order-cust-address").value;
      const payment = document.getElementById("order-payment-method").value;
      const time = document.getElementById("order-delivery-time").value;
      const riderNotes = document.getElementById("order-rider-notes").value;

      const customerDetails = {
        name, phone, address, paymentMethod: payment, time, riderNotes
      };

      // Generate Ticket & Show Receipt
      if (checkoutModal) checkoutModal.classList.remove("active");
      showReceiptModal(customerDetails);

      // Clear Cart
      appState.cart = [];
      saveCartToStorage();
      updateCartBadge();
    });
  }

  // Table Reservation Form Submission
  const resForm = document.getElementById("table-reservation-form");
  if (resForm) {
    resForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("res-name").value;
      const phone = document.getElementById("res-phone").value;
      const date = document.getElementById("res-date").value;
      const time = document.getElementById("res-time").value;
      const guests = document.getElementById("res-guests").value;
      const seating = document.getElementById("res-seating").value;
      const occasion = document.getElementById("res-occasion").value;
      const notes = document.getElementById("res-notes").value;

      const resCode = "AKR-" + Math.floor(1000 + Math.random() * 9000);

      showReservationVoucher({
        resCode, name, phone, date, time, guests, seating, occasion, notes
      });

      resForm.reset();
      setupDateDefault();
    });
  }

  // Review Form Toggle & Post
  const writeReviewBtn = document.getElementById("write-review-btn");
  const reviewFormBox = document.getElementById("review-form-container");
  const cancelReviewBtn = document.getElementById("cancel-review-btn");
  const customerReviewForm = document.getElementById("customer-review-form");

  if (writeReviewBtn && reviewFormBox) {
    writeReviewBtn.addEventListener("click", () => {
      reviewFormBox.style.display = reviewFormBox.style.display === "none" ? "block" : "none";
      if (reviewFormBox.style.display === "block") {
        reviewFormBox.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (cancelReviewBtn && reviewFormBox) {
    cancelReviewBtn.addEventListener("click", () => {
      reviewFormBox.style.display = "none";
    });
  }

  if (customerReviewForm) {
    customerReviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("rev-author").value;
      const city = document.getElementById("rev-city").value || "Dine-In Guest";
      const dish = document.getElementById("rev-dish").value;
      const rating = parseInt(document.getElementById("rev-rating").value, 10);
      const comment = document.getElementById("rev-comment").value;

      CUSTOMER_REVIEWS.unshift({
        author, city, dish, rating, date: "Just now", comment
      });

      renderReviews();
      customerReviewForm.reset();
      if (reviewFormBox) reviewFormBox.style.display = "none";
      showToast("Thank you for your royal review! Shukriya 👑");
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach(f => f.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    }
  });

  // Modal Closers
  const closeReceiptBtn = document.getElementById("close-receipt-btn");
  const receiptOverlay = document.getElementById("receipt-modal-overlay");
  if (closeReceiptBtn && receiptOverlay) {
    closeReceiptBtn.addEventListener("click", () => receiptOverlay.classList.remove("active"));
  }

  const closeVoucherBtn = document.getElementById("close-voucher-btn");
  const voucherOverlay = document.getElementById("res-voucher-modal-overlay");
  if (closeVoucherBtn && voucherOverlay) {
    closeVoucherBtn.addEventListener("click", () => voucherOverlay.classList.remove("active"));
  }
}

// ========================================================
// 13. RECEIPT & VOUCHER POPUPS
// ========================================================
function showReceiptModal(details) {
  const overlay = document.getElementById("receipt-modal-overlay");
  const ticketEl = document.getElementById("digital-receipt-ticket");
  const waShareBtn = document.getElementById("receipt-whatsapp-share-btn");

  const orderNum = "ORD-" + Math.floor(10000 + Math.random() * 90000);
  const now = new Date().toLocaleString();

  let itemsHtml = appState.cart.map(item => `
    <div class="receipt-item-line">
      <span>${item.quantity}x ${item.name} (${item.portion})</span>
      <strong>Rs. ${(item.unitPrice * item.quantity).toLocaleString()}</strong>
    </div>
  `).join("");

  ticketEl.innerHTML = `
    <div class="ticket-header">
      <div>
        <span class="ticket-no">Order #${orderNum}</span>
        <div style="font-size:0.75rem; color:#9ca3af;">${now}</div>
      </div>
      <div style="text-align:right;">
        <span style="color:#fbbf24; font-weight:700;">${appState.orderType.toUpperCase()}</span>
      </div>
    </div>
    <div style="margin-bottom:12px; font-size:0.85rem; color:#d1d5db;">
      <strong>Guest:</strong> ${details.name} (${details.phone})<br>
      ${details.address ? `<strong>Address:</strong> ${details.address}<br>` : ""}
      <strong>Payment:</strong> ${details.paymentMethod}
    </div>
    <div class="receipt-items-list">
      ${itemsHtml}
    </div>
  `;

  // WhatsApp quick link for customer
  const waMsg = generateWhatsAppOrderMessage(details);
  waShareBtn.href = `https://wa.me/923001234567?text=${waMsg}`;

  overlay.classList.add("active");
  showToast("Your official feast order has been confirmed! 🔥");
}

function showReservationVoucher(res) {
  const overlay = document.getElementById("res-voucher-modal-overlay");
  const content = document.getElementById("royal-voucher-content");

  content.innerHTML = `
    <div class="ticket-header">
      <div>
        <span class="ticket-no">${res.resCode}</span>
        <div style="font-size:0.75rem; color:#9ca3af;">Asad Khan Restaurant VIP Pass</div>
      </div>
      <div style="text-align:right;">
        <span style="color:#22c55e; font-weight:700;">CONFIRMED</span>
      </div>
    </div>
    <div style="font-size:0.9rem; line-height:1.7; color:#e5e7eb;">
      <strong>Guest Name:</strong> ${res.name}<br>
      <strong>Contact:</strong> ${res.phone}<br>
      <strong>Date & Time:</strong> 📅 ${res.date} at 🕒 ${res.time}<br>
      <strong>Seating Preference:</strong> ${res.seating}<br>
      <strong>Party Size:</strong> 👥 ${res.guests} <br>
      <strong>Occasion:</strong> ${res.occasion}
      ${res.notes ? `<br><strong>Special Notes:</strong> <em>${res.notes}</em>` : ""}
    </div>
    <div style="margin-top:14px; padding-top:10px; border-top:1px dashed #f59e0b; font-size:0.78rem; color:#9ca3af;">
      📍 Plot 42-B, Main Gourmet Boulevard, Ring Road Interchange. Valet parking free. We hold reservations for 20 minutes.
    </div>
  `;

  overlay.classList.add("active");
  showToast("Table successfully reserved at Asad Khan Restaurant! 👑");
}

// ========================================================
// 14. TOAST NOTIFICATION SYSTEM
// ========================================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>👑</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.3s, transform 0.3s";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
