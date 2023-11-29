import "./App.css";
import React,{useState,useEffect} from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home/Home";
import Leftsidebar from "./Leftsidebar";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import Rightsidebar from "./Rightsidebar";
import dataPosts from "../dummy_data";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState(dataPosts);
  const [users,setUsers] = useState([])
  const [render,setRender] = useState(false)
 
console.log(posts);

  const fetchPosts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/posts/getAll');
        console.log(response.data,"get data");
        setPosts(response.data);
    } catch (error) {
        console.error('Error Fetching Posts:', error);
    }
};

const fetchUsers = async () => {
  try {
      const response = await axios.get('http://localhost:8080/api/users/getAll');
      console.log(response.data,"get data users");
      setUsers(response.data);
  } catch (error) {
      console.error('Error Fetching Users:', error);
  }
};
const handle = ()=>{
  setRender(!render)
}
  useEffect(() => {
    fetchUsers()
    fetchPosts();
  }, [render]);

  const search = async (hashtag="")=>{
    console.log(hashtag);
    try {
        const response = await axios.get(`http://localhost:8080/api/posts/search/?hashtag=${hashtag}`)
        console.log("Searched Data",response.data);
        setPosts(response.data);
    } catch (error) {
        console.error('Error Search Posts:', error)
    }

}

  return (
    <>
      <Navbar search={search} />
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar />
          <Maincontent handle={handle} posts={posts} users={users}/>
          <Rightsidebar handle={handle} />
        </div>
      </div>
    </>
  );
}

export default App;





// <BrowserRouter>
//    <Routes>
//    <Route path="/home" element={<Home />} />
//    </Routes>
   
//   </BrowserRouter>