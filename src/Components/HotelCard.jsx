import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link, Route, useNavigate, useParams } from 'react-router-dom';
import styles from './Hotels.module.css';

export default function HotelCard() {
  const [hotels, setHotels] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8085/hotels/get/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === id);

  // if (!hotel) {
  //   return <div>Loading...</div>;
  // }


  return (
    <>
      <NavBar />

      {/* <div className={styles.body}>
        {hotels.map((hotel) => (
          <div className={styles.api} key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>

              <div style={{ display: "flex" }} className={styles.hotelCard}>

                <h2> {hotel.name}</h2>
                <h2> ${hotel.price}</h2>
              </div>
              <p>
                <b>Short Description: </b>
                {hotel.shortDesc}
              </p>
              <p>
                <b>Location: </b>
                {hotel.location}
              </p>
              <p>
                <b>Experience: </b>
                {hotel.experiance}
              </p>
              <p>
                <b>Pool: </b>
                {hotel.pool ? "Yes" : "No"}
              </p> */}

              {/* <p>
              <b>Description: </b>
              {hotel.longDesc}
            </p> */}

              {/* <Link to={'/hotelCard'}>
                <button style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "4px",
                  padding: '5px',
                  margin: "10px"
                }}>BookNow</button>
              </Link>
            </div>
          </div>
        ))}
      </div> */}

<div>
  
<div>
<h2>{hotel.name}</h2>
<img src={hotel.image} alt={hotel.name} />
<p>Location: {hotel.location}</p>
<p>Experience: {hotel.experience}</p>
<p>Pool: {hotel.pool ? 'Yes' : 'No'}</p>
<p>Price: {hotel.price}</p>
</div>
 
  
    </div>

    </>
  );
}


// function HotelCard() {
//   const { id } = useParams();
//   const hotel = hotels.find((hotel) => hotel.id === id);

//   const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//       fetch("http://localhost:8085/hotels/getAll")
//         .then((data) => data.json())
//         .then((data) => {
//           setHotels(data);
//           console.log(data);
//         })
//         .catch((e) => console.log(e));
//     }, []);
  

//   if (!hotel) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{hotel.name}</h2>
//       <img src={hotel.image} alt={hotel.name} />
//       <p>Location: {hotel.location}</p>
//       <p>Experience: {hotel.experience}</p>
//       <p>Pool: {hotel.pool ? 'Yes' : 'No'}</p>
//       <p>Price: {hotel.price}</p>
//     </div>
//   );
// }

// export default HotelCard;