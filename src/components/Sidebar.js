// snippet rfce
import React, { Fragment, useState } from 'react';
import '../Sidebar.css';
import SidebarRow from './SidebarRow';

import PeopleIcon from "@material-ui/icons/People";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";


import { ExpandMoreOutlined } from "@material-ui/icons";
import WebIcon from '@material-ui/icons/Web';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import RedeemIcon from '@material-ui/icons/Redeem';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';


import { useStateValue } from "./StateProvider";


function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  const [displaySocialInputs, toggleSocialInputs] = useState();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />

       {/* <SidebarRow src="https://user-images.githubusercontent.com/57510946/92511227-a6acf380-f1d2-11ea-9f3c-4e951a99b0ac.jpg" title='Rey Alvarez' /> */}

       <SidebarRow Icon={PeopleIcon} title="Friends"/>
       <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups"/>
       <SidebarRow Icon={StorefrontIcon} title="Market Place"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Watch"/>
       <SidebarRow Icon={InsertInvitationIcon} title="Events" />

       <div className="toggle">
        <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="toggle_btn">
          <SidebarRow Icon={ExpandMoreOutlined} title="See More"  />
        </button>

        {displaySocialInputs && <Fragment>
          <SidebarRow Icon={WebIcon} title="Ad Center" />
          <SidebarRow Icon={LocalOfferIcon} title="Buy and Sell Groups" />
          <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
          <SidebarRow Icon={RedeemIcon} title="Fakebook Pay" />
          <SidebarRow Icon={VideogameAssetIcon} title="Gaming" />
          <SidebarRow Icon={WorkOutlineIcon} title="Jobs"/>
          <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
         </Fragment>}
      </div>
    </div>
  )
}

export default Sidebar

