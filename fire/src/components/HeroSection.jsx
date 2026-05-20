import bg from "../assets/fire.jpg";

export default function HeroSection() {
  return (
    <section
      className="firstSection"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container">
        <div className="firstSectionContent">
          <h1 className="text2">Not the event. The life</h1>

          <p className="text3">Burning MAN</p>

          <button className="firstSectionButton">
            Book the tickets
          </button>
        </div>
      </div>
    </section>
  );
}