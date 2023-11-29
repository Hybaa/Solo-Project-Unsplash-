import React,{useState} from "react";
import axios from "axios";
export default function Rightsidebar(props) {
  const [userName,setUserName]= useState("")
  const [userEmail,setUserEmail]= useState("")
  const [collectionName,setcollectionName] = useState("hello")

    const adduser = async (obj) => {
      try {
          const response = await axios.post('http://localhost:8080/api/users/add',obj);
          console.log(response.data,"Add Data");
          alert("Welcom To Our Community :) ")
        
      } catch (error) {
          console.error('Error Add Post:', error);
      }
    };
  

  return (
    <>
      <div className="col-md-3">
        <div className="card gedf-card">
          <div className="card-body">
            <h5 className="card-title">Yalaa Start Writing</h5>
            <h6 className="card-subtitle mb-2 text-muted">Welcome</h6>
            <div className="typewriter">
    <div className="slide"><i></i></div>
    <div className="paper"></div>
    <div className="keyboard"></div>
</div>
  
          </div>
        </div>
        <div className="card gedf-card">
          <div className="card-body">
            <h5 className="card-title">Add To Community</h5>
            <h6 className="card-subtitle mb-2 text-muted">Choose Your Collection </h6>
            <div className="input-container">
  <input placeholder="Name" className="input-field" type="text"  onChange={(e)=>{
                        setUserName(e.target.value)
                      }}/>
  <label for="input-field" className="input-label">Your Name</label>
  <span className="input-highlight"></span>
  <input placeholder="Email" className="input-field" type="text" onChange={(e)=>{
                        setUserEmail(e.target.value)
                      }}
  />
  <label for="input-field" className="input-label">Your Email</label>
  <span className="input-highlight"></span>
  
  </div>
  <button
  onClick={()=>{
    props.handle()
    adduser({userName,userEmail,collectionName})
  }}>
  welcome
</button>
          </div>
        </div>
      </div>
    </>
  );
}
