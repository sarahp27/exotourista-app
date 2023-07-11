// import React, { useEffect, useState } from 'react'
// import styles from './Hotels.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown } from 'react-bootstrap';
// import { BrowserRouter, Routes } from "react-router-dom";
// import HotelCard from './HotelCard';

// export default function Hotels() {

//     const [hotels, setHotels] = useState([]);
//     const [city, setCity] = useState('');
//     const [experience, setExperience] = useState('');
//     const [poolRequired, setPoolRequired] = useState(false);
//     const [submit, setSubmit] = useState();

//     //const slicedDesc = longDesc.length > 80 ? `${longDesc.slice(0, 80)}...` : longDesc;

//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     };

//     const handleExperienceChange = (event) => {
//         setExperience(event.target.value);
//     };

//     const handleCheckboxChange = () => {
//         setPoolRequired(!poolRequired);
//     };

//     const handleSubmit = () => {
//         setSubmit()
//     }


//     useEffect(() => {
//         fetch("http://localhost:8085/hotels/getAll")
//             .then((data) => data.json())
//             .then((data) => {
//                 setHotels(data);
//                 console.log(data);
//             })
//             .catch((e) => console.log(e))
//     }, [])


//     return (
//         <>
//             <div className={styles.main}>
//                 <div className={styles.navbar}>
//                     <h1> Extourista </h1>
//                 </div>

//                 <div className={styles.form}>

//                     <div>
//                         <label>Select the city</label>
//                         <select class="form-select" aria-label="Default select example">
//                             <option selected>Select</option>
//                             <option value="Karachi">Karachi</option>
//                             <option value="Lahore">Lahore</option>
//                             <option value="Islamabad">Islamabad</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label>Select the experiance you want</label>
//                         <select class="form-select" aria-label="Default select example">
//                             <option selected>select</option>
//                             <option value="Budget">Budget</option>
//                             <option value="Business">Business</option>
//                             <option value="Luxury">Luxury</option>
//                         </select>

//                     </div>
//                     <div>
//                         <label>
//                             <input type="checkbox" checked={poolRequired} onChange={handleCheckboxChange} />
//                             Pool requirement
//                         </label>

//                     </div>
//                     <button className={styles.btn} onClick={handleSubmit}> Submit</button>
//                 </div>

//                 <div className={styles.body}>
//                     {hotels.map((hotel) => (
//                         <div className={styles.api} key={hotel.id}>
//                             <img src={hotel.image} />

//                             <h2> {hotel.name}</h2>
//                             {/* <link to="/hotel">Hotel</link> */}
//                             {/* <BrowserRouter>
//                                 <Routes>
//                                     <Route path='hotel' element={<HotelCard />} />
//                                 </Routes>
//                             </BrowserRouter> */}
//                             <p><b>Short Description: </b> {hotel.shortDesc}</p>
//                             {/* <p><b>Long Description: </b> {hotel.longDesc}</p> */}
//                             <p><b>Location: </b>{hotel.location}</p>
//                             <p><b>Experiance: </b>{hotel.experiance}</p>
//                             <p><b>Pool: </b>{hotel.pool ? "Yes":"No"}</p>
//                             <p><b>Price: </b>{hotel.price}</p>
//                             <p><b>Description: </b> {hotel.longDesc}</p>

//                         </div>
//                     ))};
//                 </div>

//             </div>

//         </>
//     )
// }


import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link, Route, useNavigate,useParams } from 'react-router-dom';
import styles from './Hotels.module.css';
// import { useNavigate } from 'react-router-dom';

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [city, setCity] = useState('');
  const [experience, setExperience] = useState('');
  const [poolRequired, setPoolRequired] = useState(false);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8085/hotels/getAll")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleCheckboxChange = () => {
    setPoolRequired(!poolRequired);
  };

  const handleSearch = () => {
    applyFilters();
  };

  function handleNavigate() {
    console.log('hello')
    navigate('/hotelCard');
  }

  const applyFilters = () => {
    let filteredData = hotels;

    if (city) {
      filteredData = filteredData.filter((hotel) => hotel.location.toLowerCase() === city.toLowerCase());
    }

    if (experience) {
      filteredData = filteredData.filter((hotel) => hotel.experiance.toLowerCase() === experience.toLowerCase());
    }

    if (poolRequired) {
      filteredData = filteredData.filter((hotel) => hotel.pool);
    }

    setFilteredHotels(filteredData);
  };
  // const { id } = useParams();
  // const hotel = hotels.find((hotel) => hotel.id === id);
  //   if (!hotel) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>

    <NavBar/>

      <div className={styles.form}>
        <div>
          <label>Select the city</label>
          <select className="form-select" value={city} onChange={handleCityChange}>
            <option value="">Select</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>

        <div>
          <label>Select the experience you want</label>
          <select className="form-select" value={experience} onChange={handleExperienceChange}>
            <option value="">Select</option>
            <option value="Budget">Budget</option>
            <option value="Business">Business</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <div>
          <label>  
            <input type="checkbox" checked={poolRequired} onChange={handleCheckboxChange} />
            Pool requirement
          </label>
        </div>

        <button className={styles.btn} onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className={styles.body}>
        {filteredHotels.map((hotel) => (
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
              </p>

              {/* <p>
              <b>Description: </b>
              {hotel.longDesc}
            </p> */}
               <Link to={`/hotelCard/${hotel.id}`}>
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
      </div>
      
</>
  );
}
