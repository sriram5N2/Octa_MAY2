import React, { useState } from 'react';
import Detail from './Details';
import './styles.css';

export default function App() {
  const [data, setdata] = useState([]);
  const [editedText, setEditedText] = useState('');

  const handle = (value) => {
    setdata([...data, { text: value, isEditable: false,ischecked:false }]);
  };

  const handleCheckboxChange = (index) => {
    setdata((prevData)=>{
      const ups = prevData.map((task,i)=>{
        if(index==i){
          return {...task,ischecked:true}
        }
        return task
      });
      return ups;
   });
    
    setTimeout(() => { const updatedData = data.filter((_, i) => i != index);
      setdata(updatedData);}, 400);
  };

  const handleEditButtonClick = (index) => {
    setdata((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], isEditable: true };
      return newData;
    });
    setEditedText(data[index].text);
  };

  const handleOkButtonClick = (index) => {
    setdata((prevData) => {
      const newData = [...prevData];
      newData[index] = { text: editedText, isEditable: false };
      return newData;
    });
  };

  return (
    <>
    <h1>To Do List</h1>
      <Detail onSubmit={handle} />
      {data.map((task, index) => (
        <li key={index}>
          {task.isEditable ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <span>{task.text}</span>
          )}
          <input
            type="checkbox"
            checked={task.ischecked|| false}
            onChange={() => {
              handleCheckboxChange(index);
            }}
          />
          {task.isEditable ? (
            <button onClick={() => handleOkButtonClick(index)}>Ok</button>
          ) : (
            <button onClick={() => handleEditButtonClick(index)}>Edit</button>
          )}
        </li>
      ))}
    </>
  );
}
