import React, { useState } from "react";

export default function Navbar(props) {
  // console.log(props.search,"navbar");
  const [hashtag, setHashtag] = useState("")
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <img
          src="2x/Artboard 1.png"
          alt=""
        />
        <a href="#" className="navbar-brand">
          Unsplash
        </a>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              placeholder="Search..."
              onChange={(e) => {
                props.search(e.target.value)
                setHashtag(e.target.value)
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                onClick={() => {
                  props.search(hashtag)
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </nav>
    </>
  );
}
