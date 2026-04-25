const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact">
      <div className="ghost-num">06</div>
      <div className="section-label anim">
        <span className="section-num">06</span>
        <span className="section-label-line" />
        <span className="section-label-text">Reach out</span>
      </div>
      <h2 className="section-h2 anim anim-d1">Contact</h2>
      <p className="contact-intro anim anim-d2">
        Open to internships, collaborations, and interesting problems. Usually
        respond within 24 hours.
      </p>
      <div className="contact-list anim anim-d3">
        <div className="contact-row">
          <div className="contact-icon"><EmailIcon /></div>
          <div>
            <div className="contact-label">Email</div>
            <a className="contact-value" href="mailto:tranhoangphuc0401@gmail.com">
              tranhoangphuc0401@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-icon"><PhoneIcon /></div>
          <div>
            <div className="contact-label">Phone</div>
            <a className="contact-value" href="tel:+84908588588">
              +84 908 588 588
            </a>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-icon"><MapIcon /></div>
          <div>
            <div className="contact-label">Location</div>
            <span className="contact-value">
              District 10, Ho Chi Minh City, Vietnam
            </span>
          </div>
        </div>
      </div>
      <div className="anim anim-d4" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a className="btn-primary" href="mailto:tranhoangphuc0401@gmail.com">
          Send an email
        </a>
        <a className="btn-ghost" href="https://linkedin.com/in/" target="_blank" rel="noopener">
          LinkedIn ↗
        </a>
        <a className="btn-ghost" href="https://github.com/JohnTranQUT" target="_blank" rel="noopener">
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
