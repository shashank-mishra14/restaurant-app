import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const Reservation = () => {
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />

        </div>
        <div className="banner">
        <div className="reservation_form_box">
          <h1>MAKE A RESERVATION</h1>
          <p>For Further Questions, Please Call</p>
          <form>
            <div>
              <input type="text"
              placeholder="First Name" />
              <input type="text" placeholder="Last Name"/>
            </div>
            <div>
              <input type="date" placeholder="Date"/>
              <input type="time" placeholder="Time"/>
            </div>
            <div>
              <input type="email" placeholder="Email"/>  
              <input type="number" placeholder="Phone"/>

            </div>
            <button type="submit">
              Reserve Now{""}

              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation