import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  postDataBase: [
    { id: 1, post: "Привет", countLike: "15" },
    { id: 2, post: "Я люблю котиков", countLike: "45" },
  ],
};

test("Length post should be = 3", () => {
  let action = addPost("new post");
  let newState = profileReducer(state, action);
  expect(newState.postDataBase.length).toBe(3);
});

test("new post added in start", () => {
  let action = addPost("new post");
  let newState = profileReducer(state, action);
  expect(newState.postDataBase[0].post).toBe('new post')
});

test("after deleted post length post should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postDataBase.length).toBe(1)
});

test("post length post shouldn`t be decrement", () => {
  let action = deletePost(10000);
  let newState = profileReducer(state, action);
  expect(newState.postDataBase.length).toBe(2)
});

