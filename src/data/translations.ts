export type Language = "en" | "romanUrdu" | "urdu";

export const languageNames: Record<Language, string> = {
  en: "EN",
  romanUrdu: "Roman Urdu",
  urdu: "اردو",
};

type TranslationRecord = Record<Language, string>;

export const translations: Record<string, TranslationRecord> = {
  // ─── Navigation ───
  "nav.home": { en: "Home", romanUrdu: "Home", urdu: "ہوم" },
  "nav.about": { en: "About Us", romanUrdu: "Hamare Baare Mein", urdu: "ہمارے بارے میں" },
  "nav.products": { en: "Products", romanUrdu: "Products", urdu: "مصنوعات" },
  "nav.industries": { en: "Industries", romanUrdu: "Industries", urdu: "صنعتیں" },
  "nav.contact": { en: "Contact", romanUrdu: "Rabta", urdu: "رابطہ" },
  "nav.getQuote": { en: "Get a Quote", romanUrdu: "Quote Lein", urdu: "قیمت حاصل کریں" },

  // ─── Hero ───
  "hero.eyebrow": {
    en: "30 Years in Jodia Bazar, Karachi",
    romanUrdu: "30 Saal Jodia Bazar, Karachi Mein",
    urdu: "30 سال جوڈیا بازار، کراچی میں",
  },
  "hero.title": {
    en: "Al Mobeen Enterprise",
    romanUrdu: "Al Mobeen Enterprise",
    urdu: "المبین انٹرپرائز",
  },
  "hero.tagline": {
    en: "Trusted Bulk Chemical Distributor, Serving Pakistan Since 1995",
    romanUrdu: "Qabil-e-Aitemaad Bulk Chemical Distributor, 1995 Se Pakistan Ki Khidmat Mein",
    urdu: "قابل اعتماد بلک کیمیکل ڈسٹریبیوٹر، 1995 سے پاکستان کی خدمت میں",
  },
  "hero.subtitle": {
    en: "Reliable sourcing of industrial chemicals in bulk from Pakistan's leading importers and dealers.",
    romanUrdu: "Pakistan ke bade importers aur dealers se bulk industrial chemicals ki bharosemand sourcing.",
    urdu: "پاکستان کے بڑے امپورٹرز اور ڈیلرز سے بلک صنعتی کیمیکلز کی بھروسہ مند سورسنگ۔",
  },
  "hero.cta.quote": { en: "Request a Quote", romanUrdu: "Quote Ka Talab Karein", urdu: "قیمت کی درخواست کریں" },
  "hero.cta.whatsapp": { en: "Chat on WhatsApp", romanUrdu: "WhatsApp Par Baat Karein", urdu: "واٹس ایپ پر بات کریں" },

  // ─── Stats ───
  "stats.years": { en: "Years in Business", romanUrdu: "Saal Ka Tajurba", urdu: "سالوں کا تجربہ" },
  "stats.products": { en: "Products Available", romanUrdu: "Products Dastiyab", urdu: "مصنوعات دستیاب" },
  "stats.industries": { en: "Industries Served", romanUrdu: "Industries Ki Khidmat", urdu: "صنعتوں کی خدمت" },
  "stats.coverage": { en: "Delivery Coverage", romanUrdu: "Delivery Coverage", urdu: "ڈیلیوری کوریج" },
  "stats.nationwide": { en: "Nationwide", romanUrdu: "Mulk Bhar Mein", urdu: "ملک بھر میں" },

  // ─── About Snapshot ───
  "about.snippet.title": {
    en: "Three Decades of Trusted Chemical Supply",
    romanUrdu: "Teen Dashak Se Bharosemand Chemical Supply",
    urdu: "تین دہائیوں سے بھروسہ مند کیمیکل سپلائی",
  },
  "about.snippet.text": {
    en: "Al Mobeen Enterprise has been a trusted name in Jodia Bazar, Karachi for over 30 years. We source and supply industrial chemicals in bulk from Pakistan's most established importers and large dealers — fulfilling orders according to our customers' exact requirements, across all major industries.",
    romanUrdu: "Al Mobeen Enterprise 30 saal se zyada arsa se Jodia Bazar, Karachi mein ek bharosemand naam hai. Hum Pakistan ke sabse established importers aur bade dealers se bulk industrial chemicals source aur supply karte hain — apne customers ki zaroorat ke mutabiq.",
    urdu: "المبین انٹرپرائز 30 سال سے زیادہ عرصے سے جوڈیا بازار، کراچی میں ایک بھروسہ مند نام ہے۔ ہم پاکستان کے سب سے قائم شدہ امپورٹرز اور بڑے ڈیلرز سے بلک صنعتی کیمیکلز سورس اور سپلائی کرتے ہیں۔",
  },

  // ─── Product Categories ───
  "categories.title": { en: "Product Categories", romanUrdu: "Product Categories", urdu: "مصنوعات کی اقسام" },
  "categories.subtitle": {
    en: "Explore our range of industrial chemicals across seven major categories.",
    romanUrdu: "Sat badi categories mein hamare industrial chemicals dekhein.",
    urdu: "سات بڑی اقسام میں ہمارے صنعتی کیمیکلز دیکھیں۔",
  },

  // ─── Best Sellers ───
  "bestsellers.title": { en: "Best-Selling Products", romanUrdu: "Sab Se Zyada Bikne Wale Products", urdu: "سب سے زیادہ بکنے والی مصنوعات" },

  // ─── Industries ───
  "industries.title": { en: "Industries We Serve", romanUrdu: "Jin Industries Ki Hum Khidmat Karte Hain", urdu: "جن صنعتوں کی ہم خدمت کرتے ہیں" },
  "industries.subtitle": {
    en: "Supplying chemicals to seven major industrial sectors across Pakistan.",
    romanUrdu: "Pakistan bhar mein sat badi industrial sectors ko chemicals supply karte hain.",
    urdu: "پاکستان بھر میں سات بڑے صنعتی شعبوں کو کیمیکلز سپلائی کرتے ہیں۔",
  },

  // ─── Why Choose Us ───
  "why.title": { en: "Why Choose Al Mobeen Enterprise", romanUrdu: "Al Mobeen Enterprise Ko Kyun Chunein", urdu: "المبین انٹرپرائز کو کیوں چنیں" },
  "why.subtitle": {
    en: "Three decades of trusted chemical sourcing and distribution across Pakistan.",
    romanUrdu: "Pakistan bhar mein teen dashak se bharosemand chemical sourcing aur distribution.",
    urdu: "پاکستان بھر میں تین دہائیوں سے بھروسہ مند کیمیکل سورسنگ اور ڈسٹری بیوشن۔",
  },
  "why.experience.title": { en: "30 Years Experience", romanUrdu: "30 Saal Ka Tajurba", urdu: "30 سال کا تجربہ" },
  "why.experience.text": {
    en: "Three decades of reliable chemical distribution from the heart of Jodia Bazar.",
    romanUrdu: "Jodia Bazar se teen dashak ki bharosemand chemical distribution.",
    urdu: "جوڈیا بازار سے تین دہائیوں کی بھروسہ مند کیمیکل ڈسٹری بیوشن۔",
  },
  "why.sourcing.title": { en: "Reliable Sourcing Network", romanUrdu: "Bharosemand Sourcing Network", urdu: "بھروسہ مند سورسنگ نیٹ ورک" },
  "why.sourcing.text": {
    en: "Connected to Pakistan's top importers and dealers for consistent, quality supply.",
    romanUrdu: "Pakistan ke top importers aur dealers se judey — musalsal aur quality supply ke liye.",
    urdu: "پاکستان کے ٹاپ امپورٹرز اور ڈیلرز سے جڑے — مسلسل اور کوالٹی سپلائی کے لیے۔",
  },
  "why.bulk.title": { en: "Bulk Supply Nationwide", romanUrdu: "Bulk Supply Mulk Bhar Mein", urdu: "بلک سپلائی ملک بھر میں" },
  "why.bulk.text": {
    en: "From small quantities to full-container loads, delivered across Pakistan.",
    romanUrdu: "Chhoti quantity se le kar poore container tak, Pakistan bhar mein delivery.",
    urdu: "چھوٹی مقدار سے لے کر پورے کنٹینر تک، پاکستان بھر میں ڈیلیوری۔",
  },
  "why.jodiabazar.title": { en: "Heart of Jodia Bazar", romanUrdu: "Jodia Bazar Ka Dil", urdu: "جوڈیا بازار کا دل" },
  "why.jodiabazar.text": {
    en: "Located in Pakistan's largest chemical trading hub — fast access to all major suppliers.",
    romanUrdu: "Pakistan ke sabse bade chemical trading hub mein — tamam bade suppliers tak fori rasai.",
    urdu: "پاکستان کے سب سے بڑے کیمیکل ٹریڈنگ ہب میں — تمام بڑے سپلائرز تک فوری رسائی۔",
  },

  // ─── CTA Band ───
  "cta.title": { en: "Need Bulk Chemicals? Let's Talk", romanUrdu: "Bulk Chemicals Chahiye? Baat Karte Hain", urdu: "بلک کیمیکلز چاہیے؟ بات کرتے ہیں" },
  "cta.subtitle": {
    en: "Get in touch for competitive pricing and reliable supply.",
    romanUrdu: "Competitive pricing aur bharosemand supply ke liye rabta karein.",
    urdu: "مسابقتی قیمت اور بھروسہ مند سپلائی کے لیے رابطہ کریں۔",
  },
  "cta.hours": { en: "Business Hours: 9:00 AM – 6:00 PM", romanUrdu: "Kaam Ka Waqt: 9:00 AM – 6:00 PM", urdu: "کام کا وقت: صبح 9:00 بجے – شام 6:00 بجے" },

  // ─── Contact Page ───
  "contact.title": { en: "Contact Us", romanUrdu: "Hum Se Rabta Karein", urdu: "ہم سے رابطہ کریں" },
  "contact.form.name": { en: "Your Name", romanUrdu: "Aapka Naam", urdu: "آپ کا نام" },
  "contact.form.company": { en: "Company Name", romanUrdu: "Company Ka Naam", urdu: "کمپنی کا نام" },
  "contact.form.phone": { en: "Phone Number", romanUrdu: "Phone Number", urdu: "فون نمبر" },
  "contact.form.products": { en: "Products Needed", romanUrdu: "Chahiye Products", urdu: "مطلوبہ مصنوعات" },
  "contact.form.quantity": { en: "Quantity / Frequency", romanUrdu: "Quantity / Frequency", urdu: "مقدار / تعدد" },
  "contact.form.message": { en: "Message", romanUrdu: "Paigham", urdu: "پیغام" },
  "contact.form.submit": { en: "Send Quote Request", romanUrdu: "Quote Request Bhejein", urdu: "قیمت کی درخواست بھیجیں" },
  "contact.form.success": {
    en: "Thank you! We'll get back to you within 24 hours.",
    romanUrdu: "Shukriya! Hum 24 ghante mein jawab denge.",
    urdu: "شکریہ! ہم 24 گھنٹے میں جواب دیں گے۔",
  },

  // ─── Products Page ───
  "products.title": { en: "Our Products", romanUrdu: "Hamare Products", urdu: "ہماری مصنوعات" },
  "products.search": { en: "Search products...", romanUrdu: "Products talash karein...", urdu: "مصنوعات تلاش کریں..." },
  "products.addToQuote": { en: "Add to Quote List", romanUrdu: "Quote List Mein Shamil Karein", urdu: "قیمت کی فہرست میں شامل کریں" },
  "products.addedToQuote": { en: "Added to Quote List", romanUrdu: "Quote List Mein Shamil Kiya", urdu: "قیمت کی فہرست میں شامل کیا" },
  "products.viewDetails": { en: "View Details", romanUrdu: "Tafseelat Dekhein", urdu: "تفصیلات دیکھیں" },
  "products.inquireWhatsApp": { en: "Inquire on WhatsApp", romanUrdu: "WhatsApp Par Poochein", urdu: "واٹس ایپ پر پوچھیں" },
  "products.relatedProducts": { en: "You May Also Need", romanUrdu: "Aapko Ye Bhi Chahiye Ho Sakta Hai", urdu: "آپ کو یہ بھی چاہیے ہو سکتا ہے" },
  "products.bestSeller": { en: "Best Seller", romanUrdu: "Best Seller", urdu: "سب سے زیادہ بکنے والا" },
  "products.allCategories": { en: "All Categories", romanUrdu: "Tamam Categories", urdu: "تمام اقسام" },
  "products.allIndustries": { en: "All Industries", romanUrdu: "Tamam Industries", urdu: "تمام صنعتیں" },

  // ─── Quote List ───
  "quote.title": { en: "Quote List", romanUrdu: "Quote List", urdu: "قیمت کی فہرست" },
  "quote.empty": { en: "Your quote list is empty.", romanUrdu: "Aapki quote list khaali hai.", urdu: "آپ کی قیمت کی فہرست خالی ہے۔" },
  "quote.send": { en: "Send Quote Request", romanUrdu: "Quote Request Bhejein", urdu: "قیمت کی درخواست بھیجیں" },
  "quote.remove": { en: "Remove", romanUrdu: "Hatayein", urdu: "ہٹائیں" },
  "quote.notes": { en: "Notes (optional)", romanUrdu: "Notes (ikhtiari)", urdu: "نوٹس (اختیاری)" },
  "quote.quantity": { en: "Quantity", romanUrdu: "Miqdar", urdu: "مقدار" },

  // ─── About Page ───
  "about.title": { en: "About Al Mobeen Enterprise", romanUrdu: "Al Mobeen Enterprise Ke Baare Mein", urdu: "المبین انٹرپرائز کے بارے میں" },
  "about.story.title": { en: "Our Story", romanUrdu: "Hamari Kahani", urdu: "ہماری کہانی" },
  "about.story.text": {
    en: "For over three decades, Al Mobeen Enterprise has been a trusted chemical distributor operating from the heart of Jodia Bazar in Karachi — Pakistan's largest and most established chemical trading market. As a sole proprietorship, we've built our reputation on one principle: reliable sourcing and honest dealing.\n\nWe do not import or manufacture. Instead, we work closely with Pakistan's leading importers and large dealers, sourcing chemicals according to our customers' exact specifications. This focused model lets us offer competitive pricing and consistent availability across a wide product range — from solvents and plasticizers to pigments, resins, and specialty chemicals.\n\nOur customers span seven major industries — Paints & Coatings, Printing Inks, Plastics/PVC, Textile & Dyeing, Leather, Detergents, and General Industrial Manufacturing — and we serve them across all of Pakistan with a primary focus on Karachi.",
    romanUrdu: "Teen dashak se zyada arsa se, Al Mobeen Enterprise Jodia Bazar, Karachi — Pakistan ki sabse badi aur qaim shuda chemical trading market — ke dil mein ek bharosemand chemical distributor raha hai. Ek sole proprietorship ke taur par, humne apni shohrat ek usool par banai hai: bharosemand sourcing aur eimandari se muamla.\n\nHum import ya manufacture nahi karte. Iske bajaaye, hum Pakistan ke leading importers aur bade dealers ke saath mil kar kaam karte hain, apne customers ki exact zaroorat ke mutabiq chemicals source karte hain.",
    urdu: "تین دہائیوں سے زیادہ عرصے سے، المبین انٹرپرائز جوڈیا بازار، کراچی — پاکستان کی سب سے بڑی اور قائم شدہ کیمیکل ٹریڈنگ مارکیٹ — کے دل میں ایک بھروسہ مند کیمیکل ڈسٹری بیوٹر رہا ہے۔",
  },
  "about.timeline.founded": { en: "Founded", romanUrdu: "Qaim Hua", urdu: "قائم ہوا" },
  "about.timeline.growth": { en: "30 Years of Growth", romanUrdu: "30 Saal Ki Tarakki", urdu: "30 سال کی ترقی" },
  "about.timeline.today": { en: "Today", romanUrdu: "Aaj", urdu: "آج" },

  // ─── Footer ───
  "footer.tagline": {
    en: "Trusted bulk chemical distributor since 1995, serving Pakistan from Jodia Bazar, Karachi.",
    romanUrdu: "1995 se bharosemand bulk chemical distributor, Jodia Bazar, Karachi se Pakistan ki khidmat mein.",
    urdu: "1995 سے بھروسہ مند بلک کیمیکل ڈسٹری بیوٹر، جوڈیا بازار، کراچی سے پاکستان کی خدمت میں۔",
  },
  "footer.quickLinks": { en: "Quick Links", romanUrdu: "Fori Links", urdu: "فوری لنکس" },
  "footer.categories": { en: "Product Categories", romanUrdu: "Product Categories", urdu: "مصنوعات کی اقسام" },
  "footer.contactInfo": { en: "Contact Info", romanUrdu: "Rabta Ki Maloomat", urdu: "رابطے کی معلومات" },
  "footer.rights": {
    en: "© 2025 Al Mobeen Enterprise. All rights reserved.",
    romanUrdu: "© 2025 Al Mobeen Enterprise. Tamam Huqooq Mehfooz.",
    urdu: "© 2025 المبین انٹرپرائز۔ تمام حقوق محفوظ ہیں۔",
  },

  // ─── WhatsApp ───
  "whatsapp.chat": { en: "Chat on WhatsApp", romanUrdu: "WhatsApp Par Baat Karein", urdu: "واٹس ایپ پر بات کریں" },
  "whatsapp.defaultMessage": {
    en: "Hello Al Mobeen Enterprise, I'm interested in your chemical products. Please share details.",
    romanUrdu: "Assalam o Alaikum Al Mobeen Enterprise, mujhe aapke chemical products mein dilchaspi hai. Tafseelat share karein.",
    urdu: "السلام علیکم المبین انٹرپرائز، مجھے آپ کے کیمیکل پروڈکٹس میں دلچسپی ہے۔ تفصیلات شیئر کریں۔",
  },

  // ─── 404 ───
  "notfound.title": { en: "Page Not Found", romanUrdu: "Page Nahi Mila", urdu: "صفحہ نہیں ملا" },
  "notfound.text": {
    en: "The page you're looking for doesn't exist or has been moved.",
    romanUrdu: "Jo page aap dhundh rahe hain wo mojood nahi ya hata diya gaya hai.",
    urdu: "جو صفحہ آپ ڈھونڈ رہے ہیں وہ موجود نہیں یا ہٹا دیا گیا ہے۔",
  },
};

export function t(key: string, lang: Language = "en"): string {
  const record = translations[key];
  if (!record) return key;
  return record[lang] || record.en || key;
}
