import {Link} from "react-router-dom"
import Card from "../components/card";
import data from "../data";
import style from "./styles/home.module.css";
function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Build You PC Online | Customize Your PC</h1>
      <div className={style.card__container}>
        {data.slice(0, 5).map((el) => (
          <Card key={el.name} data={el} />
        ))}
      </div>
      <p className={style.description}>
        Design your dream custom PC with ease using our intuitive drag and drop
        custom PC builder. Whether you're a gaming enthusiast, a content
        creator, or simply looking for a powerful workstation, our builder
        allows you to handpick each component, ensuring a tailored and
        high-performance computing experience.
      </p>
      <Link to={"/assembly-area"} className={style.btn}>Start</Link>
    </div>
  );
}

export default Home;
