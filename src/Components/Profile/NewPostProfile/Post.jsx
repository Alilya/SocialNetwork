import NewPostProfile from './NewPostsProfile';
import React from "react";


const Post=(props) => {
  
  let postsElements=props.post.map(post=>
    <NewPostProfile textPost={post.post} countLike={post.countLike}/>
  )
  return <div>{postsElements}</div>;
}

export default Post;