// Placeholder thumbnail component. Renders a small, calm SVG with subtle
// diagonal stripes and a monospace label identifying what should go there.
// The user will swap these for real images later.

function Thumb({ id, w = 96, h = 72, rounded = 0, style = {} }) {
  const pid = 'thumb-pat-' + id;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', borderRadius: rounded, ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={pid} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="#fff" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0.5" y="0.5" width={w - 1} height={h - 1} fill={`url(#${pid})`} stroke="#000" strokeOpacity="0.35" strokeWidth="1" />
      <text
        x="6"
        y={h - 6}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="9"
        fill="#000"
        fillOpacity="0.55"
      >
        {id}
      </text>
    </svg>
  );
}

// Render an HTML caption string (may contain <a> tags) safely-ish — we
// control the content, so dangerouslySetInnerHTML is fine.
function Caption({ html, className, style }) {
  return <span className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

Object.assign(window, { Thumb, Caption });
