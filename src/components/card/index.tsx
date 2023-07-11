import { DataType } from "../../data"
import style from "./styles/card.module.css"
function Card({data}:{data:DataType}) {
  return (
    <div className={style.card}>
        <img className={style.card__img} src={data.url} alt={data.name} />
        <p className={style.card__details}>{data.name}</p>
    </div>
  )
}

export default Card