"use client"
import {useEffect, useState} from "react";
import axios from 'axios';
import Menu from "./about/page";

export default function Home () {

const [menu, setMenu] = useState([]);
const [data, setData] = useState([]);

useEffect(()=>{
  async function getMenu (){
    const response = await axios.get("http://localhost:8000/menu");
    setData(response.data);
  }
  getMenu();

},[]);

  return(
    <main>
      {data.map((ele)=><>{ele.price}</>)}

      <Menu setMenu = {setMenu} menu = {menu}/>
    </main>
  )
}
