
import React,{useState} from "react";
export default function userDetails (props) {


    return( 
    <div className="card-header"> 
     <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
            <div className="mr-2">
                <img
                    className="rounded-circle"
                    width="45"
                    src="https://picsum.photos/50/50"
                    alt=""
                />
            </div>
            <div className="ml-2">
                <div className="h5 m-0"></div>
                <div className="h7 text-muted">Miracles Lee Cross</div>
            </div>
        </div>
        <div>
            <div className="dropdown">
                <button
                    className="btn btn-link dropdown-toggle"
                    type="button"
                    id="gedf-drop1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="fa fa-ellipsis-h"></i>
                </button>
                <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="gedf-drop1"
                >
                    <div className="h6 dropdown-header">Configuration</div>
                    <a className="dropdown-item" href="#" onClick={()=>{
                       
                    }}>
                        Save
                    </a>
                    <a className="dropdown-item" href="http://localhost:5175/" >
                      <div onClick={()=>{deletePost(post.id_post)}} >Delete</div> 

                        
                    </a>
                    <a className="dropdown-item" href="#">
                        UpDate
                    </a>
                </div>
            </div>
        </div>
    </div>
</div> )
}

