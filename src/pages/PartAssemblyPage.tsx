import { useState,useMemo } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import style from "./styles/home.module.css";
import { DataType } from "../data";
import Item from "../components/Item";
import { useLocation, useNavigate } from "react-router-dom";

function PartAssemblyPage() {
  const {state} = useLocation() as {state:DataType[]}
  const items =   useMemo(() => state?.filter(({selected})=>selected), [state])
  const navigate = useNavigate();
  const [data, setData] = useState<DataType[]>(items||[]);
  const [selectedList, setSelectedList] = useState<DataType[]>([]);

  function handelOnDragEnd({source,destination}:DropResult){
      if(!destination) return;
      if(destination.droppableId ==="selectedList" && source.droppableId==="componentsList"){
        const dragItem = data[source.index];
        data.splice(source.index,1);
        selectedList.splice(destination.index,0,dragItem);
        setData([...data]);
        setSelectedList([...selectedList]);
      }else if (source.droppableId ==="selectedList" && destination.droppableId==="componentsList") {
        const dragItem = selectedList[source.index];
        selectedList.splice(source.index,1);
        data.splice(destination.index,0,dragItem);
        setData([...data]);
        setSelectedList([...selectedList]);
        
      }
  }

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Drag and drop to Assembly PC</h1>
      <div className={style.dnd__container}>
      <DragDropContext onDragEnd={handelOnDragEnd}>
          <Droppable droppableId="componentsList">
            {(provided) => (
              <ul className={style.componentsList} {...provided.droppableProps} ref={provided.innerRef}>
                {data.map((item, index) => {
                  return (
                    <Item key={item.id} data={item} index={index}/> 
                    )
                  })}
                {provided.placeholder}
              {(!data || data.length===0) && <h3 className={style.drop}>Drop hear to unselect</h3> }
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="selectedList">
            {(provided) => (
              <ul className={style.selectedList} {...provided.droppableProps} ref={provided.innerRef}>
                {selectedList.map((item, index) => {
                  return (
                   <Item key={item.id} data={item} index={index}/> 
                  )
                })}
                {provided.placeholder}
              {(selectedList.length===0) && <h3 className={style.drop}>Drop hear to select</h3> }
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <button disabled={selectedList.length===0} className={style.btn} onClick={()=>navigate("/final",{state:selectedList})}>Next</button>
    </div>
  );
}

export default PartAssemblyPage;
