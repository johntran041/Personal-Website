import HeroCarousel from "@/components/HeroCarousel";

interface HeroProps {
  onViewProjects: () => void;
}

export default function Hero({ onViewProjects }: HeroProps) {
  return (
    <section id="hero">
      <div className="ghost-num">01</div>

      <div className="hero-text">
        <div className="hero-eyebrow anim">
          <span className="hero-dot" />
          <span className="hero-eyebrow-text">Available for opportunities</span>
        </div>
        <h1 className="hero-name anim anim-d1">
          Tran Phan<br />
          <em>Hoang Phuc</em>
        </h1>
        <p className="hero-aka anim anim-d2">
          {'// goes by John · RMIT Vietnam · Class of 2027'}
        </p>
        <p className="hero-bio anim anim-d3">
          Final-year IT student building{" "}
          <strong>production-grade full-stack systems</strong>. Passionate about
          AI integration, scalable architecture, and developer experiences that
          feel inevitable.
        </p>
        <div className="hero-ctas anim anim-d4">
          <a className="btn-primary" href="mailto:tranhoangphuc0401@gmail.com">
            Get in touch
          </a>
          <button className="btn-ghost" onClick={onViewProjects}>
            View projects
          </button>
        </div>
      </div>

      <HeroCarousel />
    </section>
  );
}
