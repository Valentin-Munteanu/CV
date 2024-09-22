export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Valentin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
          </p>
        </div>
        <a
          href="/files/CV English.pdf"
          download="Valentin Munteanu_CV.pdf"
          className="btn btn-primary"
        >
          Download CV
        </a>
      </div>
      <div className="hero--section--img">
<img src="/img/hero_img.jpg" alt="" />
      </div>
    </section>
  );
}