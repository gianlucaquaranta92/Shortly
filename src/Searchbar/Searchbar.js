import React, { useState } from "react";
import { createShortUrl } from "../Relapi";
import { ShortUrlInfo } from "../Response/Response";
import { useForm } from "react-hook-form";

export function SearchBar() {
  const [urlToShort, setUrlToShort] = useState("");
  const { register, handleSubmit, errors } = useForm("");
  const [urlList, setUrlList] = useState([]);
  const blankError = errors.textInput &&
    errors.textInput.type === "required" && (
      <p style={{ color: "red" }}>Please add a link</p>
    );

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div style={{ marginBottom: 100 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="row"
          style={{
            backgroundImage:
              "url('https://cdn.discordapp.com/attachments/165746589309206528/720708493426032751/bg-shorten-desktop.png')",
            backgroundColor: "hsl(257, 27%, 26%)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",

            marginTop: -65,
            borderRadius: 5,
            padding: 20
          }}
        >
          <div className="col-sm col-lg-9">
            <div>
              <input
                className={errors.textInput ? "error" : ""}
                onChange={event => setUrlToShort(event.target.value)}
                name="textInput"
                id="input"
                ref={register({ required: true, minLength: 8 })}
                placeholder="Shorten a link here..."
                style={{
                  marginTop: 15,
                  borderRadius: 10,
                  height: 47,
                  width: "100%"
                }}
              />
              <div style={{ marginTop: 10, textAlign: "left" }}>
                {blankError}
              </div>
            </div>
          </div>
          <div className="col-sm col-lg-3">
            <div>
              <button
                onClick={
                  urlToShort.length < 8
                    ? null
                    : () => {
                        createShortUrl(urlToShort).then(hash => {
                          console.log(hash);
                          const { hashid, url } = hash;
                          const updatedList = [...urlList, { hashid, url }];
                          setUrlList(updatedList);
                        });
                      }
                }
                style={{
                  outline: "none",
                  marginTop: 19,
                  borderRadius: 7
                }}
              >
                Shorten!
              </button>
            </div>
          </div>
        </div>

        <div>
          {urlList.map(item => (
            <ShortUrlInfo shortUrlHash={item.hashid} originalUrl={item.url} />
          ))}
        </div>
      </form>
    </div>
  );
}
