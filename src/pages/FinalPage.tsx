import {useLocation} from "react-router-dom"
import { DataType } from "../data";

import style from "./styles/finalPage.module.css"
import Card from "../components/card";

function FinalPage() {
    const {state} = useLocation() as {state:DataType[]};
  return (
    <div className={style.container}>
        <h1 className={style.heading}>Your Product is Ready</h1>
        <div className={style.card__container}>
            {
                state.map(el=><Card data={el} key={el.id}/>)
            }
        </div>
    </div>
  )
}

export default FinalPage