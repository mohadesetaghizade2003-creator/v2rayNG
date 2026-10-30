/* Thin champagne line icons — one stroke weight, no fills. */

function Glyph({ size = 48, viewBox = '0 0 48 48', children, ...rest }) {
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function LogoMark({ size = 26 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 3.6 29.2 28.4H2.8Z" />
      <path d="M16 11.4 23.2 28.4H8.8Z" opacity="0.5" />
      <path d="M16 20.2V28.4" opacity="0.5" />
    </svg>
  );
}

export function IconEngineering(props) {
  return (
    <Glyph {...props}>
      <path d="M24 5.5 42 40.5H6Z" />
      <path d="M24 19.5 33 35.5H15Z" opacity="0.6" />
      <path d="M6 40.5h36" />
    </Glyph>
  );
}

export function IconConcept(props) {
  return (
    <Glyph {...props}>
      <circle cx="24" cy="24" r="11.5" />
      <ellipse cx="24" cy="24" rx="11.5" ry="4.6" opacity="0.7" />
      <path d="M24 12.5c4.4 3.6 4.4 19.4 0 23M24 12.5c-4.4 3.6-4.4 19.4 0 23" opacity="0.7" />
      <path d="M8 8h5M8 8v5M40 40h-5M40 40v-5" />
    </Glyph>
  );
}

export function IconSustainable(props) {
  return (
    <Glyph {...props}>
      <circle cx="24" cy="9.5" r="3.2" />
      <circle cx="11.5" cy="33" r="3.2" />
      <circle cx="36.5" cy="33" r="3.2" />
      <circle cx="24" cy="23.5" r="2.6" opacity="0.75" />
      <path d="M24 12.7v8.2M21.7 24.6 14 30.9M26.3 24.6 34 30.9M14.7 33h18.6" opacity="0.65" />
    </Glyph>
  );
}

export function IconArrow({ size = 18, ...rest }) {
  return (
    <Glyph size={size} viewBox="0 0 24 24" className="icon-arrow" {...rest}>
      <path d="M4 12h15M13 6l6 6-6 6" strokeWidth="1.1" />
    </Glyph>
  );
}

export function IconChevron({ size = 16, direction = 'right', ...rest }) {
  return (
    <Glyph size={size} viewBox="0 0 24 24" className="icon-chevron" {...rest}>
      <path
        d={direction === 'left' ? 'M14.5 5 7.5 12l7 7' : 'M9.5 5l7 7-7 7'}
        strokeWidth="1.1"
      />
    </Glyph>
  );
}

/* ---- service-detail glyphs (24px grid) ---- */

const small = { size: 26, viewBox: '0 0 24 24' };

export function IconArchitecture(props) {
  return (
    <Glyph {...small} {...props}>
      <circle cx="12" cy="3.9" r="1.3" />
      <path d="M12 5.4 6.6 20M12 5.4 17.4 20" />
      <path d="M8.2 15.4h7.6" opacity="0.6" />
    </Glyph>
  );
}

export function IconInterior(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M3 13.5v5.5M21 13.5v5.5M3 16.5h18" />
      <path d="M6 13.5V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.5" />
      <path d="M7.5 19v1.5M16.5 19v1.5" opacity="0.6" />
    </Glyph>
  );
}

export function IconResidential(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M6 9.8V20h12V9.8" />
      <path d="M10.5 20v-5.5h3V20" opacity="0.65" />
    </Glyph>
  );
}

export function IconCommercial(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M6 20V4h9v16" />
      <path d="M15 9h3v11" opacity="0.7" />
      <path d="M9 8h3M9 12h3M9 16h3" opacity="0.65" />
      <path d="M3 20h18" />
    </Glyph>
  );
}

export function IconVisualization(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M12 3.2 21 8v8L12 20.8 3 16V8Z" />
      <path d="M3 8l9 4.6L21 8M12 12.6v8.2" opacity="0.6" />
    </Glyph>
  );
}

export function IconLandscape(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M3 20h18" />
      <path d="M12 20v-6.6" />
      <path d="M12 4.2c2.7 0 4.8 1.9 4.8 4.6S14.7 13.4 12 13.4s-4.8-1.9-4.8-4.6S9.3 4.2 12 4.2Z" />
      <path d="M6.5 20v-3.2M17.5 20v-4" opacity="0.5" />
    </Glyph>
  );
}

export function IconStructural(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M3 8.5h18M3 17.5h18" />
      <path d="M3 17.5 7.5 8.5 12 17.5l4.5-9 4.5 9" opacity="0.7" />
    </Glyph>
  );
}

export function IconRenovation(props) {
  return (
    <Glyph {...small} {...props}>
      <path d="M4 20 14.5 9.5" />
      <path d="M12.5 4.5 19.5 11.5l-2.5 2.5-7-7Z" />
      <path d="M4 20h4.5" opacity="0.65" />
    </Glyph>
  );
}

/* ---- social ---- */

export function IconSocial({ name, size = 16 }) {
  const paths = {
    instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
    pinterest: (
      <>
        <circle cx="12" cy="12" r="8.8" />
        <path d="M10.2 18.6c1.1-3 .9-3.6 1.5-6.2" />
        <path d="M9.4 11.4c0-2 1.6-3.4 3.4-3.4 1.9 0 3 1.2 3 2.9 0 2.1-1.1 3.8-2.7 3.8-1 0-1.6-.8-1.4-1.8" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
        <path d="M7.6 10.4V17M7.6 7.6v.4" />
        <path d="M11.4 17v-6.6M11.4 12.6c0-1.4.9-2.2 2.1-2.2 1.3 0 2.1.8 2.1 2.4V17" />
      </>
    ),
    behance: (
      <>
        <path d="M3 6.5h4.6c2 0 3.2 1 3.2 2.8 0 1.4-.8 2.3-2.1 2.6 1.6.3 2.5 1.3 2.5 3 0 2-1.4 3.1-3.6 3.1H3Z" />
        <path d="M3 11.9h4.4" opacity="0.65" />
        <path d="M14.5 6.9h5.6" />
        <path d="M14 13.4h7c0-2.2-1.4-3.7-3.5-3.7s-3.5 1.6-3.5 3.9 1.4 3.9 3.5 3.9c1.4 0 2.5-.6 3.1-1.7" />
      </>
    ),
  };

  return (
    <Glyph size={size} viewBox="0 0 24 24" strokeWidth="1.1">
      {paths[name]}
    </Glyph>
  );
}
