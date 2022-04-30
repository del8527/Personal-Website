import "./about.css";
import Award from "../../img/govmedal.jfif";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://uwaterloo.ca/library/sites/ca.library/files/resize/uploads/images/2_1-360x200.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          <span className = "a-sec">
          Current Education: </span>
          Mathematics, Honours, Co-op (2A)
          at the University of Waterloo
          </p>
        <p className="a-sub">
          <span className = "a-sec">
          Languages: </span>
          C/C++, Racket, Python, HTML, CSS
          </p>
          <p className = "a-sub">
          <span className = "a-sec">
          Hobbies: </span>
          Programming, Mathematics, Working out, Badminton, Eating! 

        </p>
        <p className="a-desc">

        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Governer General's Academic Medal</h4>
            <p className="a-award-desc">
            awarded to the student graduating with the highest grade point average from a Canadian high school
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
