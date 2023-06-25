import NewPostProfile from './NewPostsProfile';

let postDataBase = [
  { id: 1, post: "Привет", countLike: "15" },
  { id: 2, post: "Я люблю котиков", countLike: "45" },
];

const Post=() => {
  return(
    <div>
    <NewPostProfile textPost={postDataBase[0].post} countLike={postDataBase[0].countLike}/>
    <NewPostProfile textPost={postDataBase[1].post} countLike={postDataBase[1].countLike}/>
    </div>
  )
  
  
}

export default Post;