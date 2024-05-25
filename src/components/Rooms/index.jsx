import React from 'react'; 
import { useEffect, useState } from 'react'
import './style.css'
import { OneRoom } from '../OneRoom';


export const Rooms = () => {
   const [roomList, setRoomList] = useState([])
   useEffect (()=>{
    const fetchRooms = async() => {
        const response= await fetch('http://localhost:4000/api/rooms');
        const data= await response.json();
        console.log(data.data);
        setRoomList(data.data)
    };
    fetchRooms();
    
   },[])

   console.log(roomList);

    return ( 
    <><section className="dark">
    <div className="container">
      <h2>Naše pokoje</h2>
      <p>
        Vyberte si, ktery z našich pokojů je pro vas ten pravý. 
      </p>
      <div className="cards-row">
          {roomList.map((room)=><OneRoom img={room.img} name={room.name} price={room.price} key={room.name} />)}
      </div>
    </div>
  </section>
  </>
    )
}