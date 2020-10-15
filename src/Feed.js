import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post
            profilePic="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"
            message="Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, Hello friends, "
            timestamp="2/2/2020"
            username="Christian L"
            image="https://media.giphy.com/media/pO4UHglOY2vII/giphy.gif"
            />
            <Post 
            profilePic="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"
            message="Good bye friends"
            timestamp="2/2/2020"
            username="Christian L"
            image="https://media.giphy.com/media/6v2na6EASX8Zi/giphy.gif"
            />
        </div>
    )
}

export default Feed 