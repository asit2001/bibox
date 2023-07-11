import { MouseEventHandler } from "react"
import { DataType } from "../../data"
import style from "./styles/card.module.css"
function Card({data,onClick,className}:{data:DataType,onClick?:MouseEventHandler<HTMLDivElement>,className?:string}) {
  return (
    <div className={`${style.card} ${className||""}`} onClick={onClick}>
        <img className={style.card__img} src={data.url} alt={data.name} />
        <p className={style.card__details}>{data.name}</p>
    </div>
  )
}

export default Card