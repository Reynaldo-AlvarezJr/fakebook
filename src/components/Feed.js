import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import '../feed.css';
import db from "../firebase";

function Feed() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );

  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {post.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image} />
      ))}

      {/* <Post profilePic="https://user-images.githubusercontent.com/57510946/91928719-61ecfe00-eca2-11ea-958d-4e6828ad85cb.jpg"
        message="VIVA LOS WHITE SOX #1"
        timestamp="timestamp"
        username="Rey Sr."
        image="https://user-images.githubusercontent.com/57510946/92025278-e7b18d80-ed24-11ea-9c19-b586999249dd.jpg" />

      <Post profilePic="https://user-images.githubusercontent.com/57510946/92511227-a6acf380-f1d2-11ea-9f3c-4e951a99b0ac.jpg"
        message="Check out one of my pieces"
        timestamp="timestamp"
        username="Rey Jr."
        image="https://user-images.githubusercontent.com/57510946/91929259-9f05c000-eca3-11ea-99e3-2e1730afb138.jpg" />

      <Post profilePic="https://user-images.githubusercontent.com/57510946/92511227-a6acf380-f1d2-11ea-9f3c-4e951a99b0ac.jpg"
        message="Join Us to this event, flyer designed by me"
        timestamp="timestamp"
        username="Rey Jr."
        image="https://user-images.githubusercontent.com/57510946/92025379-0fa0f100-ed25-11ea-84e3-2b32a19c4fc9.jpg" /> */}



    </div>
  )
}

export default Feed
