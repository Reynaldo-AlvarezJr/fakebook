import React, { useState } from 'react';
import '../MessageSender.css';
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from '../firebase';
import firebase from 'firebase';



// using useState because is a Functional Component

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    });

    setInput("");
    setImageUrl("");

  };

  return (
    <div className="messageSender">

      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        {/* <Avatar src="https://user-images.githubusercontent.com/57510946/92511227-a6acf380-f1d2-11ea-9f3c-4e951a99b0ac.jpg" /> */}

        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)}
            className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`} />

          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (Optional)" />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>

      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>

        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: '#41B35D' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>

      </div>


    </div>
  )
}

export default MessageSender
