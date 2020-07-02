import React from "react";
import "./Blackbar.css";

export function Blackbar() {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        backgroundColor: "hsl(260, 8%, 14%)",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      <div className="blackBar" style={{ paddingBottom: 50 }}>
        <h2>Shortly</h2>
      </div>

      <div
        style={{
          fontSize: 12,
          paddingBottom: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <div className="list">
          <h3>features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analitycs</p>
        </div>
        <div className="list">
          <h3>features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analitycs</p>
        </div>
        <div className="list">
          <h3>features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analitycs</p>
        </div>
      </div>
      <div className="blackBar" style={{ paddingBottom: 50 }}>
        <img
          style={{ margin: 3, width: 25, height: 25 }}
          alt=""
          src="https://cdn.discordapp.com/attachments/165746589309206528/721035551020679269/logo_twitter.png"
        />

        <img
          style={{ margin: 8, width: 25, height: 25 }}
          alt=""
          src="https://cdn.discordapp.com/attachments/165746589309206528/721034653603201074/logo_facebook.png"
        />

        <img
          style={{ marginLeft: -6, width: 45, height: 35 }}
          alt=""
          src="https://cdn.discordapp.com/attachments/165746589309206528/721036200227504228/insta_logo.png"
        />
      </div>
    </div>
  );
}
