export interface Industry {
  name: string;
  slug: string;
  description: string;
  icon: string;
  relatedCategories: string[];
}

export const industries: Industry[] = [
  {
    name: "Paints & Coatings",
    slug: "paints-coatings",
    description:
      "Supplying pigments, titanium dioxide, resins, solvents, and specialty additives for paint and coating manufacturers across Pakistan.",
    icon: "paint-roller",
    relatedCategories: [
      "pigments-dyes",
      "titanium-dioxide-fillers",
      "resins-binders",
      "solvents-glycols",
      "acids-specialty",
    ],
  },
  {
    name: "Printing Inks",
    slug: "printing-inks",
    description:
      "Pigments, solvents, resins, and binders formulated for offset, flexographic, gravure, and digital ink production.",
    icon: "printer",
    relatedCategories: [
      "pigments-dyes",
      "solvents-glycols",
      "resins-binders",
    ],
  },
  {
    name: "Plastics / PVC",
    slug: "plastics-pvc",
    description:
      "DOP plasticizers, titanium dioxide, stabilizers, and processing chemicals for PVC and general plastics manufacturing.",
    icon: "cube",
    relatedCategories: [
      "plasticizers",
      "titanium-dioxide-fillers",
      "pigments-dyes",
      "other-industrial",
    ],
  },
  {
    name: "Textile & Dyeing",
    slug: "textile-dyeing",
    description:
      "Dyes, pigments, and specialty chemicals for textile dyeing, printing, and finishing operations.",
    icon: "scissors",
    relatedCategories: [
      "pigments-dyes",
      "acids-specialty",
      "solvents-glycols",
    ],
  },
  {
    name: "Leather",
    slug: "leather",
    description:
      "Dyes, pigments, solvents, and tanning chemicals for the leather processing and finishing industry.",
    icon: "briefcase",
    relatedCategories: [
      "pigments-dyes",
      "solvents-glycols",
      "acids-specialty",
    ],
  },
  {
    name: "Detergents & Cleaning Chemicals",
    slug: "detergents-cleaning",
    description:
      "Surfactants, acids, builders, and specialty chemicals used in detergent formulation and cleaning product manufacturing.",
    icon: "sparkles",
    relatedCategories: [
      "acids-specialty",
      "solvents-glycols",
      "other-industrial",
    ],
  },
  {
    name: "General Industrial Manufacturing",
    slug: "general-industrial",
    description:
      "A broad range of industrial chemicals serving diverse manufacturing processes beyond specific sector classification.",
    icon: "factory",
    relatedCategories: [
      "solvents-glycols",
      "acids-specialty",
      "other-industrial",
      "resins-binders",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
