import React from "react";

export function Main() {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexWrap: "wrap-reverse",
        marginTop: 100,
        marginBottom: 90
      }}
    >
      <div className="col-sm col-lg-1" />
      <div className="col-sm- col-lg-6" style={{ textAlign: "left" }}>
        <h1 style={{ fontSize: 60 }}>More then just shorter links</h1>

        <p>
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>
        <button style={{ marginLeft: 25, outline: "none", marginTop: 25 }}>
          Get started
        </button>
      </div>
      <div className="col-sm col-lg-5" style={{}}>
        <div className="overflow-hidden">
          <img
            style={{ height: 400, width: 550 }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/720662847058739280/Screenshot_76.png"
          />
        </div>
      </div>
    </div>
  );
}
