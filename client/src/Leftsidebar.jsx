import React,{useState} from "react";

export default function Leftsidebar() {

  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="h5">Collection</div>
            <div className="h7 text-muted">Collection Name : My Favorit</div>
          
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">Followers</div>
              <div className="h5">342</div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">Following</div>
              <div className="h5">758</div>
            </li>
            <li className="list-group-item"><div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div></li>
          </ul>
        </div>
      </div>
    </>
  );
}
