// Lightweight stroke-icon set (no emoji icons). 24x24, inherits currentColor.
const PATHS = {
  car: (
    <>
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <path d="M3 11h18v5a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z" />
      <path d="M7 14h.01M17 14h.01" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6.5 6.5l11 11" />
      <path d="M4 9l-1.5 1.5a2 2 0 0 0 0 3L4 15M9 4l-1.5 1.5M20 9l1.5 1.5a2 2 0 0 1 0 3L20 15M15 20l1.5-1.5" />
    </>
  ),
  utensils: (
    <>
      <path d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 3v18" />
      <path d="M17 3c-1.7 0-3 2-3 5s1 4 2 4v9" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 8l12 8M8 16L20 8" />
    </>
  ),
  hammer: (
    <>
      <path d="M14 7l4-4 3 3-4 4z" />
      <path d="M14.5 7.5L4 18a2.1 2.1 0 0 0 3 3l10.5-10.5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
    </>
  ),
  shirt: (
    <path d="M8 3l-5 3 2.5 4L8 9v11h8V9l2.5 1L21 6l-5-3a4 4 0 0 1-8 0z" />
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M9 11c4-7 9-8 12-8 0 3-1 8-8 12l-2 .5L8.5 13z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z" />
  ),
  wand: (
    <>
      <path d="M4 20l11-11M14 6l1.5-1.5M18 10l1.5-1.5M9 4l.7 2 2 .7-2 .7L9 10l-.7-2-2-.7 2-.7z" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M3 4h2l2.2 11.2a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L20 8H6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  phone: (
    <path d="M7 3H4a1 1 0 0 0-1 1c0 9 8 17 17 17a1 1 0 0 0 1-1v-3a1 1 0 0 0-.8-1l-3.6-.7a1 1 0 0 0-1 .4l-1 1.3a14 14 0 0 1-6-6l1.3-1a1 1 0 0 0 .4-1L8 3.8A1 1 0 0 0 7 3z" />
  ),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6z" />,
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.7 0 2-1.3 1.2-2.2-.7-.9-.2-2.1 1-2.1H16a5 5 0 0 0 5-5c0-4.4-4-8.7-9-8.7z" />
      <path d="M7.5 11.5h.01M10 8h.01M14 8h.01M16.5 11h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  message: (
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17 7h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  flame: (
    <path d="M12 3c-1.2 3.5 2 4.5 2 8.5a2.5 2.5 0 0 1-5 0c0-2.5 1.6-3.5 1.6-6.5C7.6 7.5 5 10 5 14a7 7 0 0 0 14 0c0-4-3-6-4-8-.7 1.6-1.6 2.7-3 3z" />
  ),
  glass: (
    <>
      <path d="M7 4h9v15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M16 7h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M9 6v12" strokeDasharray="2 2" />
      <circle cx="3" cy="12" r="0.8" />
      <circle cx="21" cy="12" r="0.8" />
    </>
  ),
  wine: (
    <>
      <path d="M7 3h10l-1 7a4 4 0 0 1-8 0z" />
      <path d="M12 14v6M9 21h6" />
    </>
  ),
  quote: (
    <path d="M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H6m12-12h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h0" />
  ),
}

export default function Icon({ name, className = '', strokeWidth = 1.6, ...rest }) {
  const path = PATHS[name] || PATHS.sparkle
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  )
}
