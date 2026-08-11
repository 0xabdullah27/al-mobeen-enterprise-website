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
  "hero.badge": {
    en: "Sole Proprietorship • Est. 1995 • Jodia Bazar, Karachi",
    romanUrdu: "Sole Proprietorship • Qaim 1995 • Jodia Bazar, Karachi",
    urdu: "سول پروپرائٹر شپ • قائم 1995 • جوڈیا بازار، کراچی",
  },
  "hero.headline": {
    en: "Bulk Chemical Supply from Pakistan's Trading Hub",
    romanUrdu: "Pakistan ke Trading Hub se Bulk Chemical Supply",
    urdu: "پاکستان کے ٹریڈنگ ہب سے بلک کیمیکل سپلائی",
  },
  "hero.subtitleText": {
    en: "Al Mobeen Enterprise sources high-grade industrial solvents, plasticizers, pigments, resins, and acids directly from established importers and tier-1 dealers across Pakistan.",
    romanUrdu: "Al Mobeen Enterprise aala miyaar ke industrial solvents, plasticizers, pigments, resins, aur acids Pakistan ke importers aur dealers se direct source karta hai.",
    urdu: "المبین انٹرپرائز اعلیٰ معیار کے صنعتی سالوینٹس، پلاسٹائزر، پگمنٹس، ریزنز اور ایسڈز براہ راست پاکستان کے امپورٹرز اور ڈیلرز سے سورس کرتا ہے۔",
  },
  "hero.cta.catalog": {
    en: "Browse 80+ Chemical Catalog",
    romanUrdu: "80+ Chemicals Catalog Dekhein",
    urdu: "80+ کیمیکلز کا کیٹلاگ دیکھیں",
  },
  "hero.cta.whatsappDesk": {
    en: "WhatsApp Desk",
    romanUrdu: "WhatsApp Desk",
    urdu: "واٹس ایپ ڈیسک",
  },
  "hero.stat1.title": { en: "30 Years", romanUrdu: "30 Saal", urdu: "30 سال" },
  "hero.stat1.sub": { en: "In Jodia Bazar", romanUrdu: "Jodia Bazar Mein", urdu: "جوڈیا بازار میں" },
  "hero.stat2.title": { en: "80+ Items", romanUrdu: "80+ Items", urdu: "80+ اشیاء" },
  "hero.stat2.sub": { en: "Ready Sourcing", romanUrdu: "Tayyar Sourcing", urdu: "تیار سورسنگ" },
  "hero.stat3.title": { en: "7 Sectors", romanUrdu: "7 Sectors", urdu: "7 شعبے" },
  "hero.stat3.sub": { en: "Nationwide Focus", romanUrdu: "Mulk Bhar Mein", urdu: "ملک بھر میں" },

  // ─── 3D Visualizer ───
  "visualizer.badge": { en: "Bulk Spec Visualizer", romanUrdu: "Bulk Spec Visualizer", urdu: "بلک سپیک ویژولائزر" },
  "visualizer.title": { en: "Industrial Drum & Spec Finder", romanUrdu: "Industrial Drum & Spec Finder", urdu: "انڈسٹریل ڈرم اور سپیک فائنڈر" },
  "visualizer.sub": { en: "Jodia Trading Desk Stock", romanUrdu: "Jodia Trading Desk Stock", urdu: "جوڈیا ٹریڈنگ ڈیسک اسٹاک" },
  "visualizer.placeholder": { en: "Search e.g. DOP, Titanium, Xylene, MEG...", romanUrdu: "Talash karein e.g. DOP, Titanium, Xylene, MEG...", urdu: "تلاش کریں مثلاً ڈی او پی، ٹائٹینیم، زائلین..." },
  "visualizer.added": { en: "✓ Added", romanUrdu: "✓ Shamil Hua", urdu: "✓ شامل ہو گیا" },
  "visualizer.addQuote": { en: "+ Quote", romanUrdu: "+ Quote", urdu: "+ قیمت" },

  // ─── Stats ───
  "stats.years": { en: "Years in Business", romanUrdu: "Saal Ka Tajurba", urdu: "سالوں کا تجربہ" },
  "stats.products": { en: "Products Available", romanUrdu: "Products Dastiyab", urdu: "مصنوعات دستیاب" },
  "stats.industries": { en: "Industries Served", romanUrdu: "Industries Ki Khidmat", urdu: "صنعتوں کی خدمت" },
  "stats.coverage": { en: "Delivery Coverage", romanUrdu: "Delivery Coverage", urdu: "ڈیلیوری کوریج" },
  "stats.nationwide": { en: "Nationwide", romanUrdu: "Mulk Bhar Mein", urdu: "ملک بھر میں" },

  // ─── About Snapshot ───
  "about.since1995": { en: "Since 1995", romanUrdu: "1995 Se", urdu: "1995 سے" },
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
  "categories.eyebrow": { en: "Explore Portfolio", romanUrdu: "Portfolio Dekhein", urdu: "پورٹ فولیو دیکھیں" },
  "categories.title": { en: "Product Categories", romanUrdu: "Product Categories", urdu: "مصنوعات کی اقسام" },
  "categories.subtitle": {
    en: "Explore our range of industrial chemicals across seven major categories.",
    romanUrdu: "Sat badi categories mein hamare industrial chemicals dekhein.",
    urdu: "سات بڑی اقسام میں ہمارے صنعتی کیمیکلز دیکھیں۔",
  },
  "categories.explore": { en: "Explore Category", romanUrdu: "Category Dekhein", urdu: "قسم دیکھیں" },

  // ─── Best Sellers ───
  "bestsellers.title": { en: "Best-Selling Products", romanUrdu: "Sab Se Zyada Bikne Wale Products", urdu: "سب سے زیادہ بکنے والی مصنوعات" },
  "bestsellers.subtitle": {
    en: "High demand industrial chemical items",
    romanUrdu: "Badi Maang Wale Industrial Chemical Items",
    urdu: "زیادہ مانگ والے صنعتی کیمیکل کے آئٹمز",
  },

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
  "products.showing": { en: "Showing", romanUrdu: "Dikhaye ja rahe hain", urdu: "دکھائے جا رہے ہیں" },
  "products.items": { en: "items", romanUrdu: "items", urdu: "آئٹمز" },
  "products.clearFilters": { en: "Clear All Filters", romanUrdu: "Tamam Filters Khatam Karein", urdu: "تمام فلٹرز ختم کریں" },
  "products.tableName": { en: "Chemical Name", romanUrdu: "Chemical Ka Naam", urdu: "کیمیکل کا نام" },
  "products.tableCategory": { en: "Category", romanUrdu: "Category", urdu: "قسم" },
  "products.tablePackaging": { en: "Packaging Spec", romanUrdu: "Packaging Spec", urdu: "پیکجنگ اسپیک" },
  "products.tableGrade": { en: "Grade / Purity", romanUrdu: "Grade / Purity", urdu: "گریڈ / پیوریٹی" },
  "products.tableAction": { en: "Action", romanUrdu: "Action", urdu: "کارروائی" },
  "products.noMatching": { en: "No matching chemical items", romanUrdu: "Koi matching chemical item nahi mila", urdu: "کوئی ملتا جلتا کیمیکل آئٹم نہیں ملا" },
  "products.noMatchingSub": { en: "We couldn't find any products matching your current filters.", romanUrdu: "Aapke mojooda filters ke mutabiq koi product nahi mila.", urdu: "آپ کے موجودہ فلٹرز کے مطابق کوئی پروڈکٹ نہیں ملا۔" },
  "products.resetFilters": { en: "Reset Filters", romanUrdu: "Filters Reset Karein", urdu: "فلٹرز ری سیٹ کریں" },
  "products.packaging": { en: "Packaging", romanUrdu: "Packaging", urdu: "پیکجنگ" },
  "products.added": { en: "Added", romanUrdu: "Shamil", urdu: "شامل" },
  "products.quoteBtn": { en: "Quote", romanUrdu: "Quote", urdu: "قیمت" },
  "products.primaryIndustry": { en: "Primary Industry Applications", romanUrdu: "Badi Industrial Applications", urdu: "بنیادی صنعتی استعمال" },
  "products.youMayNeed": { en: "You May Also Need", romanUrdu: "Aapko Ye Bhi Chahiye Ho Sakta Hai", urdu: "آپ کو یہ بھی چاہیے ہو سکتا ہے" },

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
    urdu: "تین دہائیوں سے زیادہ عرصے سے، المبین انٹرپرائز جوڈیا بازار، کراچی — پاکستان کی سب سے بڑی اور قائم شدہ کیمیکل ٹریڈنگ مارکیٹ — کے دل میں ایک بھروسہ مند کیمیکل ڈسٹری بیوٹر رہا ہے۔ ایک سول پروپرائٹر شپ کے طور پر، ہم نے اپنی شہرت ایک اصول پر بنائی ہے: بھروسہ مند سورسنگ اور ایمانداری سے معاملہ۔",
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
