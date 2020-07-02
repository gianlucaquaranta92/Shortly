import React from "react";
import "./Bar.css";
import { BarMenu } from "./BarMenu";

export function Bar() {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="col-lg-1" />
        <div
          className="col-lg-2"
          style={{
            display: "flex",
            textAlign: "center",

            alignItems: "center",
            height: 100,
            zIndex: -2
          }}
        >
          <h1>Shortly</h1>
        </div>
        <BarMenu />

        <div
          className="col-lg-3"
          style={{
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <p className="barLinks">Features</p>
          <p className="barLinks">Pricis</p>
          <p className="barLinks">Resources</p>
        </div>
        <div
          className="col-lg-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <p className="barLinks" style={{ marginRight: 20 }}>
            Login
          </p>
          <button
            className="barLinks"
            style={{ marginTop: -10, outline: "none" }}
          >
            Sign Up
          </button>
        </div>
        <div className="col-lg-1" />
      </div>
    </div>
  );
}
