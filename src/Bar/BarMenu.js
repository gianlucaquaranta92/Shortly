import React, { useState } from "react";

export function BarMenu() {
  const [list, setList] = useState(false);

  return (
    <div className="mobileMenu" style={{ marginTop: -72, width: "100%" }}>
      <div
        onClick={() => (list ? setList(false) : setList(true))}
        style={{
          marginBottom: 40,
          marginLeft: " auto",
          width: 50,
          height: 35,
          cursor: "pointer"
        }}
      >
        <div className="menu" />
        <div className="menu" />
        <div className="menu" />
      </div>
      {list ? (
        <div
          style={{
            backgroundColor: "hsl(257, 27%, 26%)",

            margin: "0 auto",
            borderRadius: 15,

            padding: 40
          }}
        >
          <p className="barmenu">Features</p>
          <p className="barmenu">Prices</p>
          <p className="barmenu">Reasources</p>
          <p className="barmenu">Login</p>
          <button style={{ marginTop: 10, marginBottom: 10, outline: "none" }}>
            Sign Up
          </button>
        </div>
      ) : null}
    </div>
  );
}
