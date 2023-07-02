import NewPostProfile from './NewPostsProfile';


const Post=(props) => {
  
  let postsElements=props.post.map(post=>
    <NewPostProfile textPost={post.post} countLike={post.countLike}/>
  )
  return(
    <div>
   {postsElements}
    </div>
  )
  
  
}

export default Post;