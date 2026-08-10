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
    tintColor: "var(--tint-solvents)",
  },
  {
    name: "Plasticizers",
    slug: "plasticizers",
    description:
      "Plasticizer compounds — primarily DOP — used to increase flexibility and durability of PVC and other polymers.",
    icon: "layers",
    tintColor: "var(--tint-plasticizers)",
  },
  {
    name: "Pigments & Dyes",
    slug: "pigments-dyes",
    description:
      "A wide range of organic and inorganic pigments and dyes for paints, inks, textiles, and plastics.",
    icon: "palette",
    tintColor: "var(--tint-pigments)",
  },
  {
    name: "Titanium Dioxide & White Pigments / Fillers",
    slug: "titanium-dioxide-fillers",
    description:
      "High-opacity white pigments and industrial fillers used across paints, coatings, plastics, and paper.",
    icon: "sun",
    tintColor: "var(--tint-titanium)",
  },
  {
    name: "Resins & Binders",
    slug: "resins-binders",
    description:
      "Synthetic and natural resins for adhesive, coating, and binding applications in manufacturing.",
    icon: "hexagon",
    tintColor: "var(--tint-resins)",
  },
  {
    name: "Acids & Specialty Chemicals",
    slug: "acids-specialty",
    description:
      "Industrial acids and specialty chemicals for metal treatment, water treatment, and chemical synthesis.",
    icon: "flask",
    tintColor: "var(--tint-acids)",
  },
  {
    name: "Other Industrial Chemicals",
    slug: "other-industrial",
    description:
      "General-purpose industrial chemicals including waxes, powders, and processing aids for various manufacturing needs.",
    icon: "box",
    tintColor: "var(--tint-other)",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
