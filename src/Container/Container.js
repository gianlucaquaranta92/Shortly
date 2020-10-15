import React from "react";

import { Bar } from "../Bar/Bar";
import { Main } from "../Main/Main";
import { SearchBar } from "../Searchbar/Searchbar";
import { Panels } from "../Panels/Panels";
import { Bottombar } from "../Bottombar/Bottombar";
import { Blackbar } from "../Blackbar/Blackbar";

export function Container() {
  return (
    <div>
      <div className="container">
        <Bar />
        <Main />
      </div>

      <div
        style={{
          backgroundColor: "hsl(257, 12%, 92%)"
        }}
      >
        <div className="row nopadding">
          <div className="col" />
          <div style={{ textAlign: "center" }} className="col-10">
            <div className=" container">
              <SearchBar />
            </div>

            <h1>Advanced statistics</h1>
            <p>
              track how your links are performing across the web with
              <br /> our Advanced statistics dashboard
            </p>
            <Panels />
          </div>
          <div className="col" />
        </div>
        <Bottombar />
        <div style={{ backgroundColor: "hsl(260, 8%, 14%)" }}>
          <div className="row nopadding">
            <div className="col" />
            <div className="col-10" style={{ marginTop: 60 }}>
              <Blackbar />
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    </div>
  );
}
