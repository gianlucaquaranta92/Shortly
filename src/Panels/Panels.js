import React from "react";
import "./Panels.css";

export function Panels() {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row" style={{ height: 100 % "" }}>
        <div
          style={{
            backgroundColor: "white",
            height: 250,

            margin: 23,
            borderRadius: 5,
            textAlign: "left"
          }}
          className="col-sm align-self-start"
        >
          <img
            className="imgContainer"
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/720996357724438538/Senza_titolo-1.png"
          />

          <div style={{}}>
            <h1 style={{ fontSize: 18 }}>Brand Recognition</h1>
            <p style={{ fontSize: 13 }}>
              Boost your brand recognition with each click.Generic links don't
              mean a thing.Branded links help instil confidence in you content.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: 250,

            margin: 23,
            borderRadius: 5,
            textAlign: "left"
          }}
          className="col-sm align-self-center"
        >
          <img
            className="imgContainer"
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/722095298813624420/icona2.png"
          />
          <div style={{}}>
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
            height: 250,

            margin: 23,
            borderRadius: 5,
            textAlign: "left"
          }}
          className="col-sm align-self-end"
        >
          <img
            className="imgContainer"
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/720996357724438538/Senza_titolo-1.png"
          />
          <div style={{}}>
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
