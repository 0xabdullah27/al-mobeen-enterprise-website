interface CategoryIconProps {
  category: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({
  category,
  size = 40,
  className = "",
}: CategoryIconProps) {
  const iconColor = getCategoryColor(category);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {renderIcon(category, iconColor)}
    </svg>
  );
}

function getCategoryColor(category: string): string {
  return "currentColor";
}

function renderIcon(category: string, color: string) {
  switch (category) {
    case "solvents-glycols":
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <path
            d="M20 6v8l6 4v8c0 3.3-2.7 6-6 6s-6-2.7-6-6v-8l6-4V6z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={color}
            fillOpacity="0.15"
          />
          <circle cx="17" cy="24" r="1.5" fill={color} fillOpacity="0.5" />
          <circle cx="22" cy="27" r="1" fill={color} fillOpacity="0.5" />
        </>
      );
    case "plasticizers":
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <rect
            x="10"
            y="12"
            width="20"
            height="16"
            rx="3"
            stroke={color}
            strokeWidth="1.5"
            fill={color}
            fillOpacity="0.15"
          />
          <path d="M14 12V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M26 12V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 20h20" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        </>
      );
    case "pigments-dyes":
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <circle cx="16" cy="16" r="5" fill={color} fillOpacity="0.3" />
          <circle cx="24" cy="16" r="5" fill={color} fillOpacity="0.3" />
          <circle cx="20" cy="23" r="5" fill={color} fillOpacity="0.3" />
          <path
            d="M20 30v3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 33h4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      );
    case "titanium-dioxide-fillers":
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <circle
            cx="20"
            cy="20"
            r="10"
            stroke={color}
            strokeWidth="1.5"
            fill="white"
            fillOpacity="0.8"
          />
          <circle cx="20" cy="20" r="5" fill={color} fillOpacity="0.2" />
          <path
            d="M20 10v-3M30 20h3M20 30v3M10 20h-3"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      );
    case "resins-binders":
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <path
            d="M14 12h12l2 6-2 6H14l-2-6 2-6z"
            stroke={color}
            strokeWidth="1.5"
            fill={color}
            fillOpacity="0.15"
            strokeLinejoin="round"
          />
          <path d="M14 24v6h12v-6" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M17 18h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </>
      );
    case "acids-specialty":
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <path
            d="M16 8h8v8l4 8c1 2-0.5 4-2.5 4h-11c-2 0-3.5-2-2.5-4l4-8V8z"
            stroke={color}
            strokeWidth="1.5"
            fill={color}
            fillOpacity="0.15"
            strokeLinejoin="round"
          />
          <path d="M16 8h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="24" r="1" fill={color} />
          <circle cx="22" cy="22" r="1" fill={color} />
        </>
      );
    case "other-industrial":
    default:
      return (
        <>
          <circle cx="20" cy="20" r="18" fill={color} fillOpacity="0.1" />
          <rect
            x="11"
            y="11"
            width="18"
            height="18"
            rx="3"
            stroke={color}
            strokeWidth="1.5"
            fill={color}
            fillOpacity="0.15"
          />
          <path
            d="M16 20h8M20 16v8"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      );
  }
}
