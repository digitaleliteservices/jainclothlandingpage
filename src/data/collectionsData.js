export const categoryHierarchy = {
  Men: {
    label: "Men",
    subcategories: ["All Men", "T-Shirts", "Shirts", "Jeans", "Trousers", "Shorts", "Ethnic Wear", "Jackets"],
    ethnicSub: ["Kurta", "Kurta Sets", "Sherwani"]
  },
  Women: {
    label: "Women",
    subcategories: ["All Women", "Tops", "T-Shirts", "Shirts", "Dresses", "Jeans", "Trousers", "Skirts", "Sarees", "Kurtis", "Salwar Suits", "Ethnic Wear"]
  },
  Kids: {
    label: "Kids",
    subcategories: ["All Kids", "Boys", "Girls"],
    boysSub: ["T-Shirts", "Shirts", "Jeans", "Shorts"],
    girlsSub: ["Tops", "Dresses", "Skirts", "Jeans"]
  },
  Collections: {
    label: "Collections",
    subcategories: ["All Collections", "New Arrivals", "Best Sellers", "Trending", "Festive Collection", "Summer Collection", "Sale"]
  }
};

export const categoriesData = [
  {
    id: 1,
    title: 'Ilkal Sarees',
    tag: 'MASTER CRAFT',
    desc: 'Signature Chikki Paras & Topi Teni red-and-white pallu silk sarees handwoven by master artisans in Bagalkot.',
    image: '/assets/images/cat_silk_saree_1790677798480.jpg',
    categoryKey: 'ilkal'
  },
  {
    id: 2,
    title: 'Bridal & Ethnic Wear',
    tag: 'BRIDAL TROUSSEAU',
    desc: 'Regal lehengas, banarasi silks, and ornate hand-embroidered ensembles crafted for memorable wedding rituals.',
    image: '/assets/images/cat_bridal_lehenga_1790677826632.jpg',
    categoryKey: 'bridal'
  },
  {
    id: 3,
    title: "Women's Collection",
    tag: 'EVERYDAY LUXURY',
    desc: 'Graceful anarkalis, festive kurtas, designer dupattas, and contemporary ethnic wear tailored for comfort.',
    image: '/assets/images/gen_women_1790678141932.jpg',
    categoryKey: 'women'
  },
  {
    id: 4,
    title: "Men's Collection",
    tag: 'ROYAL ATTIRE',
    desc: 'Royal silk kurtas, tailored bandhgalas, festive sherwanis, and lightweight ceremonial ethnic jackets.',
    image: '/assets/images/cat_menswear_1790677869067.jpg',
    categoryKey: 'men'
  },
  {
    id: 5,
    title: "Kids' Collection",
    tag: 'JOYFUL FESTIVE',
    desc: 'Charming pattu pavadais, dhoti sets, and festive celebratory wear designed for delicate skin and easy movement.',
    image: '/assets/images/cat_kids_1790677909697.jpg',
    categoryKey: 'kids'
  },
  {
    id: 6,
    title: 'Family & Festive Wear',
    tag: 'COORDINATED SETS',
    desc: 'Color-coordinated celebration ensembles crafted to unite parents, grandparents, and youth in festive joy.',
    image: '/assets/images/cat_family_1790677768539.jpg',
    categoryKey: 'bulk'
  }
];

export const catalogProducts = [
  {
    id: 1,
    title: 'Signature Maroon Topi Teni Saree',
    department: 'Women',
    subCategory: 'Sarees',
    category: 'ilkal',
    collectionTag: 'Festive Collection',
    tag: 'GI Tag Certified',
    specs: 'Pure Silk × Kondi Warp',
    subtext: '6.25m with Blouse',
    badge: 'Est. 1978 Series',
    desc: 'Pure mulberry silk body adorned with iconic white-and-red temple spearhead pallu and authentic Chikki Paras zari edging.',
    image: '/assets/images/prod_maroon_topi.jpg',
    occasion: 'Wedding Nuptials',
    border: 'Chikki Paras Border',
    color: 'Maroon / Crimson'
  },
  {
    id: 2,
    title: 'Peacock Blue & Mustard Chikki',
    department: 'Women',
    subCategory: 'Sarees',
    category: 'ilkal',
    collectionTag: 'Best Sellers',
    tag: 'Best Seller',
    specs: 'Silk-Cotton Handloom',
    subtext: 'Traditional 9-Yards Opt',
    badge: 'Lightweight',
    desc: 'Karnataka heritage weave blending breathable cotton warp with pure mulberry silk weft for effortless festive comfort.',
    image: '/assets/images/prod_peacock_blue.jpg',
    occasion: 'Temple Rituals',
    border: 'Chikki Paras Border',
    color: 'Peacock Blue'
  },
  {
    id: 3,
    title: 'Regal Velvet & Zari Bridal Lehenga',
    department: 'Women',
    subCategory: 'Ethnic Wear',
    category: 'bridal',
    collectionTag: 'Trending',
    tag: 'Bridal Couture',
    specs: 'Micro Velvet & Raw Silk',
    subtext: 'Double Dupatta Set',
    badge: 'Heirloom Piece',
    desc: 'Deep crimson velvet skirt accentuated with antique gold Kasuti patterns and hand-embroidered Zardozi borders.',
    image: '/assets/images/prod_velvet_lehenga.jpg',
    occasion: 'Wedding Nuptials',
    border: 'Temple Zari Brocade',
    color: 'Maroon / Crimson'
  },
  {
    id: 4,
    title: 'Ivory Silk Kurta & Bandhgala',
    department: 'Men',
    subCategory: 'Ethnic Wear',
    ethnicSub: 'Sherwani',
    category: 'men',
    collectionTag: 'New Arrivals',
    tag: "Men's Royal",
    specs: 'Raw Silk & Brocade',
    subtext: 'Includes Stole',
    badge: 'Custom Tailored',
    desc: 'Hand-tailored groom ensemble in lustrous ivory raw silk with royal antique brass buttons and matching churidar.',
    image: '/assets/images/prod_ivory_sherwani.jpg',
    occasion: 'Reception',
    border: 'Gomi Border',
    color: 'Classic Ivory'
  },
  {
    id: 5,
    title: 'Emerald Green Temple Zari Saree',
    department: 'Women',
    subCategory: 'Sarees',
    category: 'ilkal',
    collectionTag: 'Festive Collection',
    tag: 'Heirloom Edition',
    specs: 'Pure Mulberry Silk',
    subtext: 'Loom Finish Blouse',
    badge: 'Master Weaver Cut',
    desc: 'Lustrous dark green body with gold zari mayil (peacock) motifs, coupled with an auspicious Gayatri border.',
    image: '/assets/images/prod_emerald_green.jpg',
    occasion: 'Festive Puja',
    border: 'Gayatri Border',
    color: 'Forest Green'
  },
  {
    id: 6,
    title: "Kids' Golden Pattu Pavada",
    department: 'Kids',
    kidSection: 'Girls',
    subCategory: 'Dresses',
    category: 'kids',
    collectionTag: 'Festive Collection',
    tag: "Kids' Festive",
    specs: 'Pure Silk & Cotton Lining',
    subtext: 'Expandable Margin',
    badge: 'Hypoallergenic',
    desc: 'Traditional festive skirt & blouse stitched with pure silk zari, lined with feather-soft pure cotton for toddler comfort.',
    image: '/assets/images/prod_kids_pattu.jpg',
    occasion: 'Festive Puja',
    border: 'Temple Zari Brocade',
    color: 'Mustard Gold'
  },
  {
    id: 7,
    title: 'Dusk Rose Chanderi Anarkali Set',
    department: 'Women',
    subCategory: 'Kurtis',
    category: 'women',
    collectionTag: 'New Arrivals',
    tag: "Women's Festive",
    specs: 'Chanderi & Organza Dupatta',
    subtext: 'Showroom Trial Ready',
    badge: 'New Season',
    desc: 'Airy silhouette tailored with artisanal gota patti borders, paired with hand-dyed organza dupatta with scalloped edges.',
    image: '/assets/images/prod_dusk_anarkali.jpg',
    occasion: 'Sangeet',
    border: 'Gomi Border',
    color: 'Rani Pink'
  },
  {
    id: 8,
    title: "Boys' Dhoti & Nehru Jacket Set",
    department: 'Kids',
    kidSection: 'Boys',
    subCategory: 'Shirts',
    category: 'kids',
    collectionTag: 'Best Sellers',
    tag: "Kids' Celebration",
    specs: 'Art Silk & Handloom Dhoti',
    subtext: 'Quick-Wear Waist',
    badge: 'Pre-Stitched Easy',
    desc: 'Maroon brocade jacket with ivory pure cotton-silk kurta and readymade elasticated dhoti with kasavu border.',
    image: '/assets/images/prod_boys_dhoti.jpg',
    occasion: 'Festive Puja',
    border: 'Chikki Paras Border',
    color: 'Maroon / Crimson'
  },
  {
    id: 9,
    title: 'Wedding Trousseau & Gifting Hamper',
    department: 'Collections',
    subCategory: 'Festive Collection',
    category: 'bulk',
    collectionTag: 'Sale',
    tag: 'Bulk Orders',
    specs: '10+ Coordinated Drapes',
    subtext: 'Global Dispatch',
    badge: 'Custom Packaging',
    desc: 'Curated bundles of authentic Ilkal handlooms with custom personalized name embossing and auspicious turmeric pouches.',
    image: '/assets/images/prod_bulk_trousseau.jpg',
    occasion: 'Wedding Nuptials',
    border: 'Chikki Paras Border',
    color: 'Mustard Gold'
  }
];

export const generationsData = [
  {
    id: 1,
    title: "Men's Collection",
    desc: "Classic Nehru jackets, kurtas, and dignified ethnic wear for seniors & gentlemen.",
    image: "/assets/images/gen_grandfather_1790678097286.jpg"
  },
  {
    id: 2,
    title: "Women's Collection",
    desc: "Rich silk sarees, designer lehengas, and festive ethnic wear for modern women.",
    image: "/assets/images/gen_mom_daughter.jpg"
  },
  {
    id: 3,
    title: "Kids Collection",
    desc: "Vibrant, comfortable ethnic sets, dhotis, and lehenga cholis for children.",
    image: "/assets/images/gen_children_1790678192067.jpg"
  }
];

export const lookbookData = [
  { id: 1, title: 'Kanjivaram Silk Saree', image: '/assets/images/lookbook_1.jpg', desc: 'Heavy gold zari pallu with rich magenta silk.' },
  { id: 2, title: 'Bridal Lehenga Collection', image: '/assets/images/lookbook_2.jpg', desc: 'Crimson red zardozi embroidered bridal set.' },
  { id: 3, title: 'Royal Groom Sherwani', image: '/assets/images/lookbook_3.jpg', desc: 'Ivory royal groomsmen sherwani with stole.' },
  { id: 4, title: 'Kids Festive Ensemble', image: '/assets/images/lookbook_4.jpg', desc: 'Matching brother sister ethnic outfit.' },
  { id: 5, title: 'Festive Women Sarees', image: '/assets/images/lookbook_5.jpg', desc: 'Vibrant green gold Kanjivaram silk saree.' },
  { id: 6, title: 'Wedding Celebration Wear', image: '/assets/images/lookbook_6.jpg', desc: 'Pure silk bridal wear with gold jewelry.' }
];
