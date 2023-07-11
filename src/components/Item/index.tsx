import { Draggable } from "react-beautiful-dnd";
import Card from "../card";
import { DataType } from "../../data";

interface ItemProps {
  index: number;
  data: DataType;
}

function Item({ data, index }: ItemProps) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card data={data} />
        </div>
      )}
    </Draggable>
  );
}

export default Item;
