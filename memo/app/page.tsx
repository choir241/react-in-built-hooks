"use client";
import Post from "./components/Post";
import { initialPosts } from "./static/initialPosts";
import { useReducer, useContext } from "react";
import AddNewPost from "./hooks/AddPost";
import { postReducer } from "./reducer/postReducer";
import { DarkThemeContext } from "./context/context";
import Button from "./components/Buttons";

export default function Home() {
  const [posts, dispatch] = useReducer(postReducer, initialPosts);
  const { theme, setTheme } = useContext(DarkThemeContext);

  return (
    <main className = {theme}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        label={`Change to ${theme}`}
      ></Button>
      <AddNewPost dispatch={dispatch} />
      {posts.map((post) => {
        return <Post post={post} key={post.id} dispatch={dispatch} />;
      })}
    </main>
  );
}
