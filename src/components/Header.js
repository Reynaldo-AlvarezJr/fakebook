import React from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandModeIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";


// snippet rfce

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (<div className="header">

    <div className="header__left">
      <a href="https://www.facebook.com/facebook">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Logo" /></a>

      <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </div>
    </div>

    {/* Middle */}
    <div className="header__center">
      <div className="header__option header__option--active">
        <HomeIcon fontSize="large" />
      </div>

      <div className="header__option ">
        <FlagIcon fontSize="large" />
      </div>

      <div className="header__option">
        <SubscriptionsOutlinedIcon fontSize="large" />
      </div>

      <div className="header__option">
        <StorefrontOutlinedIcon fontSize="large" />
      </div>

      <div className="header__option">
        <SupervisorAccountOutlinedIcon fontSize="large" />
      </div>
    </div>


    <div className="header__right">
      <div className="header__info">
        {/* <Avatar src="https://user-images.githubusercontent.com/57510946/92511227-a6acf380-f1d2-11ea-9f3c-4e951a99b0ac.jpg" /> */}

        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>

      <IconButton>
        <AddIcon />
      </IconButton>

      <IconButton>
        <ForumIcon />
      </IconButton>

      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>

      <IconButton>
        <ExpandModeIcon />
      </IconButton>

    </div>

  </div >

  );


}

export default Header;
