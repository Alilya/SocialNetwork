import NewPostProfile from './NewPostsProfile';

let postDataBase = [
  { id: 1, post: "Привет", countLike: "15" },
  { id: 2, post: "Я люблю котиков", countLike: "45" },
];
let postsElements=postDataBase.map(post=>
  <NewPostProfile textPost={post.post} countLike={post.countLike}/>
)
const Post=() => {
  return(
    <div>
   {postsElements}
    </div>
  )
  
  
}

export default Post;