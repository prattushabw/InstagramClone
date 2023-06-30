import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

//hardcoded post
// const post= [{
//     id: '123',
//     username:"prattusha",
//     userImg: 'https://media.licdn.com/dms/image/D4E03AQHRYN-DpTHnnQ/profile-displayphoto-shrink_400_400/0/1682112084908?e=1692835200&v=beta&t=PV-zGjMIYRAOGQZNLyYXTAxbqCxedPJ8LlfY__TJA7Q',
//     img: 'https://media.licdn.com/dms/image/D4E03AQHRYN-DpTHnnQ/profile-displayphoto-shrink_400_400/0/1682112084908?e=1692835200&v=beta&t=PV-zGjMIYRAOGQZNLyYXTAxbqCxedPJ8LlfY__TJA7Q',
//     caption: "you just created an Instagram post!",
// }]

function Posts(){
    const [posts, setPosts] = useState([]);
//takes img and caption from storage to upload
    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });
    }, [db])

    //console.log(posts);


    return (
        <div>
            {posts.map((post)=>(
                <Post 
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}/>
            ))}
        </div>
    );
}

export default Posts;