  
import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'> 
            <Story 
            image="https://pbs.twimg.com/profile_banners/837409551477428224/1596261074/1080x360"
            profileSrc="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"
            title="Your Story"
            />
            <Story 
            image="https://image.cnbcfm.com/api/v1/image/106683071-1598658200991-neuralink-pig.png?v=1598658273"
            profileSrc="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg"
            title="Elon"
            />
            <Story 
            image="https://venturebeat.com/wp-content/uploads/2016/11/Microsoft.jpg?fit=800%2C400&strip=all"
            profileSrc="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
            title="Billy"
            />
            <Story 
            image="https://i.ebayimg.com/images/g/BW8AAOSwq29efu~4/s-l1600.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/en/9/94/Forest_Gump_Character.jpg"
            title="Forrest"
            />
            <Story 
            image="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555349001/shape/mentalfloss/screen_shot_2016-02-04_at_4.43.43_pm.png?itok=6RPYvfMt"
            profileSrc="https://tonedeaf.thebrag.com/wp-content/uploads/2020/02/shot-2-scaled-1.jpg"
            title="Rick"
            />
                  
        </div>
    )
}

export default StoryReel;