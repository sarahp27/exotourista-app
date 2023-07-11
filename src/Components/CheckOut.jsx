import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hotels.module.css'
import { useState } from 'react';
export default function CheckOut() {

    const [formData, setFormData] = useState([]);
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[arrDate, setArrDate] = useState('');
    const[depDate, setDepDate] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const bookingData = {
          name: name,
          address: address,
          emailAddress: email,
          arrDate: arrDate,
          depDate: depDate
        };
      
        fetch("http://localhost:8086/bookings/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Booking data successfully submitted:", data);
          })
          .catch((error) => {
            console.error("Error submitting booking data:", error);
          });
          console.log("data chala gaya")
      };
      

//   const handleFormSubmit = (event) =>{
//     setFormData({ ...formData, [event.target.name]: event.target.value});
    
//   };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



    return (
        <>
        <h1 style={{justifyContent:"center"}}>
            Confirm your Booking
        </h1>

            <div className={styles.check}>
                <form>
                    <div class="form-group" className={styles.formGroup}>
                        <label for="exampleInputName">Enter your Name</label>
                        <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name"  value={name} onChange={handleNameChange}/>
                    </div>

                    <div class="form-group" className={styles.formGroup}>
                        <label for="exampleInputAddress">Address</label>
                        <input type="input" class="form-control" id="exampleInputPassword1" placeholder="Address" value={address} onChange={handleAddressChange} />
                    </div>
                    <div class="form-group" className={styles.formGroup}>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleEmailChange} />

                    </div>
                    <div class="form-group" className={styles.formGroup}>
                        <label for="exampleInputEmail1">Arrival Date</label>
                        <input type="date" class="form-control" id="exampleInputArrDate" aria-describedby="ArrHelp"  value={arrDate} onChange={e=>(setArrDate(e.target.value))}/>
                    </div>
                    <div class="form-group" className={styles.formGroup}>
                        <label for="exampleInputEmail1">Departure Date</label>
                        <input type="date" class="form-control" id="exampleInputArrDate" aria-describedby="ArrHelp" value={depDate} onChange={e=>(setDepDate(e.target.value))} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>

        </>

    )
}
