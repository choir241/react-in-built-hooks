"use client";
import Post from "./components/Post";
import { initialPosts } from "./static/initialPosts";
import { useReducer } from "react";
import AddNewPost from "./hooks/AddPost";
import { postReducer } from "./reducer/postReducer";

export default function Home() {
  const [posts, dispatch] = useReducer(postReducer, initialPosts);

  return (
    <>
      <AddNewPost dispatch={dispatch} />
      {posts.map((post) => {
        return (
          <Post
            post={post}
            key={post.id}
            dispatch={dispatch}
          />
        );
      })}
    </>
  );
}
