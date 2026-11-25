/* MOUNA CARS — luxury car rental, Casablanca. Edit only this file for content.
   ⚠ prices, fees, deposit, map link = PLACEHOLDERS, confirm with the client. */
window.AGENCY_CONFIG = {
  name: "Mouna Cars",
  logo: "public/logo.png",
  logoText: "Mouna Cars",
  whatsapp: "212661201647",
  whatsappDisplay: "+212 661 201 647",
  email: "",
  currency: "MAD",
  defaultLang: "fr",
  languages: ["fr", "en"],
  brand: { primary: "#9A7410", accent: "#E7B437" },
  tagline: {
    fr: "Location de voitures de luxe à Casablanca. Livraison partout au Maroc.",
    en: "Luxury car rental in Casablanca. Delivery anywhere in Morocco.",
    ar: "كراء السيارات الفاخرة بالدار البيضاء والتوصيل إلى جميع مدن المملكة"
  },
  eyebrow: { fr: "Casablanca · Maroc", en: "Casablanca · Morocco", ar: "الدار البيضاء · المغرب" },
  brands: ["Ferrari", "McLaren", "Porsche", "Mercedes-AMG", "Range Rover", "Maserati", "Cupra", "Volkswagen"],
  locations: [
    { id: "cmn-city", fr: "Casablanca — Centre-ville", en: "Casablanca — City centre", ar: "", fee: 0 },
    { id: "cmn-airport", fr: "Casablanca — Aéroport Mohammed V", en: "Casablanca — Mohammed V Airport", ar: "", fee: 150 },
    { id: "rab", fr: "Rabat — Livraison", en: "Rabat — Delivery", ar: "", fee: 400 },
    { id: "rak", fr: "Marrakech — Livraison", en: "Marrakech — Delivery", ar: "", fee: 600 },
    { id: "tng", fr: "Tanger — Livraison", en: "Tangier — Delivery", ar: "", fee: 800 },
    { id: "aga", fr: "Agadir — Livraison", en: "Agadir — Delivery", ar: "", fee: 800 }
  ],
  rules: { minAge: 25, licenseYears: 3, deposit: 10000, mileage: "250 km/jour", mileageAr: "250 كم/يوم" },
  // category: premium (supercars) | suv | comfort | economy. hero:true = shown in the hero showcase.
  cars: [
    { id: "ferrari-296", name: "Ferrari 296 GTB", category: "premium", image: "assets/cars/ferrari-296.webp", price: 9000, transmission: "auto", fuel: "hybrid", seats: 2, available: true, hero: true },
    { id: "mclaren-570s", name: "McLaren 570S", category: "premium", image: "assets/cars/mclaren-570s.webp", price: 8000, transmission: "auto", fuel: "petrol", seats: 2, available: true, hero: true },
    { id: "mercedes-sls", name: "Mercedes SLS AMG", category: "premium", image: "assets/cars/mercedes-sls.webp", price: 7000, transmission: "auto", fuel: "petrol", seats: 2, available: true },
    { id: "coupe-bleu", name: "Coupé Sport Bleu", category: "premium", image: "assets/cars/coupe-bleu.webp", price: 4500, transmission: "auto", fuel: "petrol", seats: 2, available: true },
    { id: "porsche-911", name: "Porsche 911 Carrera", category: "premium", image: "assets/cars/porsche-911.webp", price: 5500, transmission: "auto", fuel: "petrol", seats: 4, available: true, hero: true },
    { id: "mercedes-g63", name: "Mercedes-AMG G63", category: "suv", image: "assets/cars/mercedes-g63.webp", price: 4500, transmission: "auto", fuel: "petrol", seats: 5, available: true, hero: true },
    { id: "range-rover-vogue", name: "Range Rover Vogue — Nouvelle génération", category: "suv", image: "assets/cars/range-rover-vogue.webp", price: 3500, transmission: "auto", fuel: "diesel", seats: 5, available: true, hero: true },
    { id: "range-rover-vogue-2", name: "Range Rover Vogue — Nouvelle génération (2)", category: "suv", image: "assets/cars/range-rover-vogue-2.webp", price: 3500, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "range-rover-vogue-old", name: "Range Rover Vogue — Ancienne génération", category: "suv", image: "assets/cars/range-rover-vogue-old.webp", price: 3000, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "range-rover-vogue-old-2", name: "Range Rover Vogue — Ancienne génération (2)", category: "suv", image: "assets/cars/range-rover-vogue-old-2.webp", price: 3000, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "range-rover-sport", name: "Range Rover Sport", category: "suv", image: "assets/cars/range-rover-sport.webp", price: 2800, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "maserati-grecale", name: "Maserati Grecale Trofeo", category: "suv", image: "assets/cars/maserati-grecale.webp", price: 2800, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "porsche-macan-gts", name: "Porsche Macan GTS", category: "suv", image: "assets/cars/porsche-macan-gts.webp", price: 2500, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "porsche-macan-s", name: "Porsche Macan S", category: "suv", image: "assets/cars/porsche-macan-s.webp", price: 2400, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "porsche-macan-s-2", name: "Porsche Macan S (2)", category: "suv", image: "assets/cars/porsche-macan-s-2.webp", price: 2400, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "porsche-macan", name: "Porsche Macan", category: "suv", image: "assets/cars/porsche-macan.webp", price: 2200, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "jeep-grand-cherokee", name: "Jeep Grand Cherokee", category: "suv", image: "assets/cars/jeep-grand-cherokee.webp", price: 1800, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "range-rover-evoque", name: "Range Rover Evoque", category: "suv", image: "assets/cars/range-rover-evoque.webp", price: 1500, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "vw-touareg", name: "Volkswagen Touareg", category: "suv", image: "assets/cars/vw-touareg.webp", price: 1500, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "cupra-formentor", name: "Cupra Formentor", category: "suv", image: "assets/cars/cupra-formentor.webp", price: 1200, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "geely-okavango", name: "Geely Okavango", category: "suv", image: "assets/cars/geely-okavango.webp", price: 900, transmission: "auto", fuel: "petrol", seats: 7, available: true },
    { id: "c3-aircross-vert", name: "Citroën C3 Aircross — Vert", category: "suv", image: "assets/cars/c3-aircross-vert.webp", price: 500, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "c3-aircross-beige", name: "Citroën C3 Aircross — Beige", category: "suv", image: "assets/cars/c3-aircross-beige.webp", price: 500, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "porsche-panamera", name: "Porsche Panamera", category: "comfort", image: "assets/cars/porsche-panamera.webp", price: 3200, transmission: "auto", fuel: "petrol", seats: 4, available: true },
    { id: "porsche-panamera-2", name: "Porsche Panamera (2)", category: "comfort", image: "assets/cars/porsche-panamera-2.webp", price: 3200, transmission: "auto", fuel: "petrol", seats: 4, available: true },
    { id: "hyundai-staria", name: "Hyundai Staria VIP", category: "comfort", image: "assets/cars/hyundai-staria.webp", price: 1800, transmission: "auto", fuel: "diesel", seats: 7, available: true },
    { id: "mercedes-e-class", name: "Mercedes E-Class", category: "comfort", image: "assets/cars/mercedes-e-class.webp", price: 1300, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "mercedes-cla", name: "Mercedes CLA", category: "comfort", image: "assets/cars/mercedes-cla.webp", price: 1000, transmission: "auto", fuel: "petrol", seats: 5, available: true },
    { id: "mercedes-c-class", name: "Mercedes C-Class", category: "comfort", image: "assets/cars/mercedes-c-class.webp", price: 900, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "fiat-500", name: "Fiat 500", category: "economy", image: "assets/cars/fiat-500.webp", price: 400, transmission: "auto", fuel: "petrol", seats: 4, available: true },
    { id: "dacia-sandero", name: "Dacia Sandero", category: "economy", image: "assets/cars/dacia-sandero.webp", price: 300, transmission: "auto", fuel: "diesel", seats: 5, available: true },
    { id: "nissan-micra", name: "Nissan Micra", category: "economy", image: "assets/cars/nissan-micra.webp", price: 300, transmission: "auto", fuel: "petrol", seats: 5, available: true }
  ],
  map: {
    url: "https://www.google.com/maps/search/?api=1&query=Mouna+Cars+Casablanca",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Mouna+Cars+Casablanca"
  },
  instagram: "https://www.instagram.com/mounacars/",
  supabase: { enabled: false, url: "", anonKey: "", table: "leads" }
};
