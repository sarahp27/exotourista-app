import React from "react";
import { useEffect, useState } from "react";
import Hotels from './Hotels'
import { BrowserRouter, Routes } from "react-router-dom";

export default function HotelCard() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/hotels/getAll")
      .then((data) => data.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <></>
  );
}
