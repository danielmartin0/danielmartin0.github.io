// Variation 1 — "Plain serif"
// nat.org-direct: system serif, prose-style paragraphs, thumbnails as small
// images floated to the right of each project's caption.

function VariationOne({ data }) {
  const wrap = {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 17,
    lineHeight: 1.55,
    color: '#000',
    background: '#fff',
    padding: '64px 56px 80px',
    maxWidth: 640,
    margin: '0 auto',
  };
  const h1 = { fontSize: 28, fontWeight: 700, margin: '0 0 24px', letterSpacing: '-0.01em' };
  const h2 = { fontSize: 17, fontWeight: 700, margin: '40px 0 8px' };
  const p  = { margin: '0 0 14px' };
  const linkStyle = { color: '#000', textDecoration: 'underline' };
  const projectRow = {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
    margin: '0 0 14px',
  };
  const projectText = { flex: '1 1 auto', minWidth: 0 };

  return (
    <div style={wrap}>
      <style>{`
        .v1 a { color: #000; text-decoration: underline; }
        .v1 a:hover { background: #000; color: #fff; text-decoration: none; }
      `}</style>
      <div className="v1">
        <h1 style={h1}>{data.name}</h1>
        {data.intro.map((para, i) => (
          <p key={i} style={p}>{para}</p>
        ))}

        {data.sections.map((sec) => (
          <section key={sec.id}>
            <h2 style={h2}>{sec.title}</h2>
            {sec.items.map((it) => {
              const linked = !!it.href;
              const titleEl = linked
                ? <a href={it.href} style={linkStyle}>{it.title}</a>
                : <span>{it.title}</span>;
              const thumbEl = linked
                ? <a href={it.href} aria-label={it.title} style={{ flex: '0 0 auto', display: 'block' }}><Thumb id={it.thumb} w={80} h={56} /></a>
                : <span style={{ flex: '0 0 auto', display: 'block' }}><Thumb id={it.thumb} w={80} h={56} /></span>;
              return (
                <div key={it.title} style={projectRow}>
                  <div style={projectText}>
                    {titleEl}
                    <span> &mdash; </span>
                    <Caption html={it.caption} />
                  </div>
                  {thumbEl}
                </div>
              );
            })}
          </section>
        ))}

        <h2 style={h2}>Contact</h2>
        <p style={p}>
          {data.contact.map((c, i) => (
            <React.Fragment key={c.label}>
              {i > 0 && <span> &middot; </span>}
              <a href={c.href} style={linkStyle}>{c.label}</a>
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

window.VariationOne = VariationOne;
