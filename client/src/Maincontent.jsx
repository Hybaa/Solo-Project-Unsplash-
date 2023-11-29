import React, {useState} from "react";
import Feed from "./Feed";
import axios from "axios";

export default function Maincontent(props) {
console.log(props.posts);
const [postName,setPostName] = useState("")
const [img,setImg] = useState("")
const [descreption,setDescreption] = useState("")
const [hashtags,setHashtags] = useState("")
const [map,setMap] = useState("")


const addPost = async (obj) => {
  // obj.id = 2
  try {
      const response = await axios.post('http://localhost:8080/api/posts/add',obj);
      console.log(response.data,"Add Data");
    
  } catch (error) {
      console.error('Error Add Post:', error);
  }
};


  return (
    <>
      <div className="col-md-6 gedf-main">
        <div className="card gedf-card">
          <div className="card-header">
            <ul
              className="nav nav-tabs card-header-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="posts-tab"
                  data-toggle="tab"
                  href="#posts"
                  role="tab"
                  aria-controls="posts"
                  aria-selected="true"
                >
                  Make a publication
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="images-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="images"
                  aria-selected="false"
                  href="#images"
                >
                  Images
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="posts"
                role="tabpanel"
                aria-labelledby="posts-tab"
              >
                <div className="form-group ">
                  <label className="sr-only" htmlFor="message">
                    post
                  </label>
                  <input
                  className="form-control"
                  
                      type="text"
                      placeholder="Title"
                      onChange={(e)=>{
                        setPostName(e.target.value)
                      }}
                    /> 
                    <input
                  className="form-control"
                  
                      type="text"
                      placeholder="#Hashtgs"
                      onChange={(e)=>{
                        setHashtags(e.target.value)
                      }}
                    /> 
                     <input
                  className="form-control"
                      type="text"
                      placeholder="Location"
                      onChange={(e)=>{
                        setMap(e.target.value)
                      }}
                    /> 
                  <textarea
                    className="form-control"
                    
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                    onChange={(e)=>{
                      setDescreption(e.target.value)
                    }}
                  ></textarea>
                  
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="images"
                role="tabpanel"
                aria-labelledby="images-tab"
              >
                <div className="form-group input-container">
                  <div >
                  <input
                      className="form-control"
                      
                      type="text"
                      placeholder="URL"
                      onChange={(e)=>{
                        setImg(e.target.value)
                      }}
                    /> 
                  </div>
                </div>
                <div className="py-4"></div>
              </div>
            </div>
            <div className="btn-toolbar justify-content-between">
              <div className="btn-group">
                <button type="submit" className="btn btn-primary"
                onClick={()=>{
                  props.handle()
                  addPost({postName,img,descreption,hashtags,map,users_id:"4"})
                }}
                >
                  share
                </button>
              </div>
              <div className="btn-group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="btnGroupDrop1"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-globe"></i> Public
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-users"></i> Friends
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-user"></i> Just me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feed posts={props.posts} handle={props.handle} users={props.users} />
      </div>
    </>
  );
}
