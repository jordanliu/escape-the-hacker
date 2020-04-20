import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const itemsFromBackend = [
  { id: "first", content: "Information on Company Website" },
  { id: "fifth", content: "Trade Secrets" },
  { id: "third", content: "Employee Pay Stubs" },
  { id: "second", content: "Social Media Post" },
  { id: "fourth", content: "Employee TRN" },
  { id: "sixth", content: "Strategic Business Plans" },
]

const columnsFromBackend = {
  unsorted: {
    name: "Unsorted",
    items: itemsFromBackend,
  },
  restricted: {
    name: "Restricted",
    items: [],
  },
  confidential: {
    name: "Confidential",
    items: [],
  },
  public: {
    name: "Public",
    items: [],
  },
}
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    })
  }
}

const Level6 = () => {
  const history = useHistory()
  const [columns, setColumns] = useState(columnsFromBackend)

  useEffect(() => {
    const restrictedItems = columns["restricted"].items.map((ele) => ele.id)
    const confidentialItems = columns["confidential"].items.map((ele) => ele.id)
    const publicItems = columns["public"].items.map((ele) => ele.id)
    let isRestricted = /^(?=.*\bfifth\b)(?=.*\bsixth\b).*$/.test(
      restrictedItems
    )
    let isConfidential = /^(?=.*\bthird\b)(?=.*\bfourth\b).*$/.test(
      confidentialItems
    )
    let isPublic = /^(?=.*\bfirst\b)(?=.*\bsecond\b).*$/.test(publicItems)

    if (isRestricted && isConfidential && isPublic) {
      console.log(isRestricted && isConfidential && isPublic)
      history.push("/level/7")
    }
  }, [history, columns])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          padding: "55px",
        }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#bedde8"
                              : "#EEEEEE",
                            padding: 7,
                            width: 260,
                            minHeight: 500,
                            borderRadius: "3px",
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#007EA7"
                                          : "#00A8E8",
                                        color: "white",
                                        fontWeight: "normal",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
            )
          })}
        </DragDropContext>
      </div>
      <p style={{ textAlign: "center" }}>
        Sort the tasks in their respective category
      </p>
    </div>
  )
}

export default Level6
