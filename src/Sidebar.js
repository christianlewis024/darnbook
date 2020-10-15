import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons';
function Sidebar() {
   
    return (
        <div className='sidebar'>
            <SidebarRow src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg" title="Christian L" />

            {/* <SidebarRow src='https://avatars3.githubusercontent.com/u/59008066?s=460&u=d0a1e975222cbcbea2af851d300cd1fbf0110563&v=4'
             title='Muhamad Herwan' /> */}


            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />

            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />

            <SidebarRow Icon={PeopleIcon} title='Friends' />

            <SidebarRow Icon={ChatIcon} title='Messenger' />

            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />

            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />

            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
        </div>
    )
}

export default Sidebar;