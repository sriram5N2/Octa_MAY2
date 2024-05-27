import React , {useState} from 'react';
import './styles.css';

export default function Detail({onSubmit}){
    const[value,setValue]=useState("")

    function handle(e) {
        e.preventDefault();
        onSubmit(value);
        setValue('');
      }

    function disableEnterKey(e){
        console.log(e.key);
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    return(<form onSubmit={handle}>
        <input type="text" onChange={(e)=>{setValue(e.target.value)}} placeholder="Enter your Task" value={value} onkeydown={(e)=>disableEnterKey(e)} />
        <button type="submit" >Add</button>
        </form>);
}