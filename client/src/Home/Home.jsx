import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../navbar/layout";
import post from "../../dummy_data";

const Home = () => {
    const [posts, setPosts] = useState(post);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts/getAll');
                console.log(response.data,"get data");
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };
    return (
        <div>
            <Layout>
                {posts.map((post) =>{
                    console.log(post);
                    return(

                    <div
                        key={post.post_id}
                        onClick={() => handlePostClick(post.post_id)}
                        className="cursor-pointer"
                    >
                        <div
                            key={post.post_id}
                            className="shadow-lg rounded-2xl p-4  border-2 bg-white"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        marginRight: "10px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        width: "50px",
                                        height: "50px",
                                    }}
                                >
                                    <img
                                        src={`${post.img}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        alt="Profile"
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            marginBottom: "5px",
                                            fontSize: "1em",
                                            color: "#555",
                                        }}
                                    >
                                        {post.postName}
                                    </p>
                                    <p style={{ fontSize: "0.8em", color: "#555" }}>
                                        Posted on: {post.data}
                                    </p>
                                </div>
                            </div>
                            <p
                                style={{
                                    fontSize: "1.2em",
                                    marginBottom: "10px",
                                    color: "#555",
                                }}
                            >
                                {post.postName}
                            </p>
                            {post.content && (
                                <p style={{ marginBottom: "10px", color: "#555" }}>
                                    {post.descreption}
                                </p>
                            )}
                            {post.img && (
                                <img
                                    className="rounded-lg w-full block mb-3"
                                    src={`${post.img}`}
                                    alt="Post Image"
                                />
                            )}
                        </div>
                    </div>
                )})}
            </Layout>
        </div>
    );

}
export default Home