import { useState } from "react"
import {useNavigate} from "react-router-dom"
import Card from "../components/card"
import data from "../data"
import style from "./styles/partsSelectionPage.module.css"


function PartsSelectionPage() {
    const [pcData,setPcData] = useState(data);
    const navigate = useNavigate();
    const [count,setCount] =useState(0);

    function handelClick(i:number){
        if (pcData[i].selected) {
           setCount(count-1); 
        }else{
            setCount(count+1); 
        }
        pcData[i] = {...pcData[i],selected:!pcData[i].selected};
        setPcData([...pcData]);
    }
  return (
    <div className={style.container}>
        <h1 className={style.heading}>Select Your Pc Parts</h1>
        <div className={style.card__container}>
            {
                pcData.map((el,i)=><Card onClick={()=>handelClick(i)} className={el.selected?style.card__selected:style.card} key={i} data={el}/>)
            }
        </div>
        <button disabled={count==0} onClick={()=>navigate("/part-assembly",{state:pcData})} className={style.btn}>Next</button>
    </div>
  )
}

export default PartsSelectionPage