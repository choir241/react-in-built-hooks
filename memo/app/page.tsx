"use client";
import Post from "./components/Post";
import { posts } from "./static/posts";
import { useState } from "react";
import AddNewPost from "./hooks/addPost";

export default function Home() {
  const [currentPosts, setCurrentPosts] = useState(posts);
  console.log(currentPosts);
  return (
    <>
      <AddNewPost posts = {currentPosts} setCurrentPosts={setCurrentPosts}/>
      {currentPosts.map((post) => {
        return (
          <Post
            post={post}
            key={post.id}
            setCurrentPosts={setCurrentPosts}
            currentPosts={currentPosts}
          />
        );
      })}
    </>
  );
}
