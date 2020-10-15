import React from "react";
import "./Panels.css";

export function Panels() {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row" style={{}}>
        <div
          style={{
            backgroundColor: "white",
            margin: "30px 23px 100px 23px",
            borderRadius: 5,
            textAlign: "left"
          }}
          className="col-sm align-self-start panels"
        >
          <img
            className="imgContainer"
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/720996357724438538/Senza_titolo-1.png"
          />

          <div>
            <h1 style={{ fontSize: 18 }}>Brand Recognition</h1>
            <p style={{ fontSize: 13 }}>
              Boost your brand recognition with each click.Generic links don't
              mean a thing.Branded links help instil confidence in you content.
            </p>
          </div>
        </div>
        <div
          className="col-sm align-self-center panels"
          style={{
            backgroundColor: "white",
            margin: "30px 23px 50px 23px",
            borderRadius: 5,
            textAlign: "left"
          }}
        >
          <img
            className="imgContainer"
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/722095298813624420/icona2.png"
          />
          <div>
            <h1 style={{ fontSize: 18 }}>Brand Recognition</h1>
            <p style={{ fontSize: 13 }}>
              Gain insights into who is clicking your links.Knowing when and
              where people engage with your content help inform better
              decisions.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",

            margin: "70px 23px 50px 23px",
            borderRadius: 5,
            textAlign: "left"
          }}
          className="col-sm align-self-end panels"
        >
          <img
            className="imgContainer"
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/720996357724438538/Senza_titolo-1.png"
          />
          <div>
            <h1 style={{ fontSize: 18 }}>Brand Recognition</h1>
            <p style={{ fontSize: 13 }}>
              Improve brand awareness and content discoverability through
              customizable links,supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
