import axios from "axios";
import React,{useState ,useEffect} from "react";

export default function Feed(props) {
    const [likes,setLikes] = useState(10)
const [user,setUser]= useState([
    {
      "userName": "",
      "userEmail": "",
      "collectionName": ""
    }
  ])
const [view,setView]=useState(false)

const increm = (likes)=>{
    setLikes(likes+1)
}
const getUser =async (users_id)=>{
    //http://localhost:8080/api/users/7
    try {
        const response = await axios.get(`http://localhost:8080/api/users/${users_id}`);
        console.log(response.data,"user one");
        setUser(response.data);
    } catch (error) {
        console.error('Error Fetching Posts:', error);
    }
}
// console.log(user[0].userName,"user Name");
    const deletePost = async (id_post)=>{
        console.log(id_post);
        try {
            const response = await axios.delete(`http://localhost:8080/api/posts/delete/${id_post}`)
        } catch (error) {
            console.error('Error Delete Posts:', error)
        }

    }

  


    return (
        <>
            {props.posts.map((post) => {
                // var x= getUser(post.users_id)
                // setUser([...user,...x])
                // console.log(post,'hfjfj');
                return (
                    <div className="card gedf-card" onClick={()=>{
                       
                    }}>
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
                                        <div className="h5 m-0">{post.userName}</div>
                                        <div className="h7 text-muted">{post.userEmail}</div>
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
                                              <div onClick={()=>{
                                                deletePost(post.id_post) 
                                                props.handle()
                                                }} >Delete</div> 

                                                
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                UpDate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-muted h7 mb-2">
                                {" "}
                                <i className="fa fa-clock-o"></i>{post.date}
                            </div>
                            <a className="card-link" href="#">
                                <h5 className="card-title">
                                    {" "}
                                    {post.postName}
                                </h5>
                            </a>

                            <p className="card-text">
                                {post.descreption}
                            </p>
                            <div>
                            {post.hashtags.split("#").slice(1).map((hashtag) => {
                                return (
                                    <span className="badge badge-primary"> {hashtag} </span>
                                )
                            })}
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="card-link">
                                <i className="fa fa-gittip"  onClick={()=>{
                                    increm(post.likes)
                                }}></i> {post.likes}
                            </a>
                            <a href="#" className="card-link">
                                <i className="fa fa-comment"></i> Comment
                            </a>
                            <a href="#" className="card-link">
                                <i className="fa fa-mail-forward"></i> Add To Collection
                            </a>
                        </div>
                    </div>
                )
            })}


        </>
    );
}
