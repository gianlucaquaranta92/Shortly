import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function ShortUrlInfo(props) {
  const { shortUrlHash, originalUrl } = props;
  const [copy, setCopy] = useState(false);
  const newShortUrl = "https://rel.ink/" + shortUrlHash;

  return (
    <div>
      <div
        className="row"
        style={{
          display: "flex",

          flexWrap: "wrap",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
          marginBottom: 20,
          marginTop: 20
        }}
      >
        <div className="col-6">
          <h3
            style={{
              width: 240,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {originalUrl}
          </h3>
        </div>
        <div className="col" style={{ display: "flex" }}>
          <h3
            style={{
              color: "hsl(180, 66%, 49%)"
            }}
          >
            {newShortUrl}
          </h3>
        </div>
        <div className="col">
          <CopyToClipboard text={newShortUrl} onCopy={() => setCopy(true)}>
            {copy ? (
              <button
                style={{
                  width: 130,
                  outline: "none",
                  marginLeft: 20,
                  backgroundColor: "hsl(257, 27%, 26%)"
                }}
              >
                Copied!
              </button>
            ) : (
              <button
                style={{
                  width: 130,
                  outline: "none",
                  marginLeft: 20
                }}
              >
                Copy
              </button>
            )}
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
