import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
//import { Avatar } from "@material-ui/core";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListIcon from "@material-ui/icons/ListAltOutlined"



function Header() {

    

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019.svg.png"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input className="header__inputInput" placeholder="Search Facebook" type="text" />
                </div>                
            </div>
            <div className="header__center">   
            
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <SupervisedUserCircleRoundedIcon fontSize="large" /> 
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">                
                
                <Avatar src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"/>

                
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
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;

// https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250