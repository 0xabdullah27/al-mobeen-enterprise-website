export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  tintColor: string;
}

export const categories: Category[] = [
  {
    name: "Solvents & Glycols",
    slug: "solvents-glycols",
    description:
      "Industrial-grade solvents and glycols for manufacturing, cleaning, and chemical processing applications.",
    icon: "droplet",
    tintColor: "#3B82F6",
  },
  {
    name: "Plasticizers",
    slug: "plasticizers",
    description:
      "Plasticizer compounds — primarily DOP — used to increase flexibility and durability of PVC and other polymers.",
    icon: "layers",
    tintColor: "#8B5CF6",
  },
  {
    name: "Pigments & Dyes",
    slug: "pigments-dyes",
    description:
      "A wide range of organic and inorganic pigments and dyes for paints, inks, textiles, and plastics.",
    icon: "palette",
    tintColor: "#EC4899",
  },
  {
    name: "Titanium Dioxide & White Pigments / Fillers",
    slug: "titanium-dioxide-fillers",
    description:
      "High-opacity white pigments and industrial fillers used across paints, coatings, plastics, and paper.",
    icon: "sun",
    tintColor: "#F59E0B",
  },
  {
    name: "Resins & Binders",
    slug: "resins-binders",
    description:
      "Synthetic and natural resins for adhesive, coating, and binding applications in manufacturing.",
    icon: "hexagon",
    tintColor: "#10B981",
  },
  {
    name: "Acids & Specialty Chemicals",
    slug: "acids-specialty",
    description:
      "Industrial acids and specialty chemicals for metal treatment, water treatment, and chemical synthesis.",
    icon: "flask",
    tintColor: "#EF4444",
  },
  {
    name: "Other Industrial Chemicals",
    slug: "other-industrial",
    description:
      "General-purpose industrial chemicals including waxes, powders, and processing aids for various manufacturing needs.",
    icon: "box",
    tintColor: "#6366F1",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
