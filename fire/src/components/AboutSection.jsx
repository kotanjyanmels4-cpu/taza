import img1 from "../assets/man.jpg";
import img2 from "../assets/bus.jpg";
import img3 from "../assets/people.jpg";

export default function AboutSection() {
  return (
    <section className="secondSection">
      <div className="container">

        <div className="secondSectionContent">
          <p className="text4">About the event</p>
        </div>

        <div className="secondSectionText">

          <div>
            <p className="text5">Rebuilding the society</p>

            <p className="text6">
          Burning Man is a network of people inspired by the values reflected in the <br />
           Ten Principles and united in the pursuit of a more creative and connected <br />
            existence in the world. Throughout the year we work to build Black Rock <br />
             City, home of the largest annual Burning Man gathering, and nurture the <br />
              distinctive culture emerging from that experience. 
            </p>
          </div>

          <div>
            <p className="text7">This drives us</p>

            <p className="text8">
              Burning Man Project will bring experiences to people in grand, <br />
               awe-inspiring and joyful ways that lift the human spirit, address social <br />
                problems, and inspire a sense of culture, community, and civic <br />
                 engagement. Burning Man provides infrastructural tools and frameworks <br />
                  to support local communities in applying the Ten Principles through six <br />
                  interconnected program areas, including Arts, Civic Involvement, Culture, <br />
                   Education, Philosophical Center, and Social Enterprise.
            </p>
          </div>

        </div>

        <div className="secondSectionImg">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>

      </div>
    </section>
  );
}