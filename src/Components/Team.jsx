import React from "react";
import data from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {
            data.data[0].team.map((element) =>{
              return (
                <div className="card" key={element.id}>
                  <img src={element.image} alt="team" />
                  <h2>{element.name}</h2>
                  <p>{element.designation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;