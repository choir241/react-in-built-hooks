"use client";
import type { IPost } from "../components/Post";
import { useState, memo } from "react";

const AddNewPost = memo(function AddPost({
  posts,
  setCurrentPosts,
}: {
  posts: IPost[];
  setCurrentPosts: (e: IPost[]) => void;
}) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [media, setMedia] = useState("");
  const [id, setId] = useState(50);
  const [isAdding, setIsAdding] = useState(false);

  function addPost(e) {
    e.preventDefault();

    const newId = id + 1;
    setCurrentPosts([
      ...posts,
      {
        content,
        author,
        media,
        likes: 0,
        id: newId,
      },
    ]);
    
    setAuthor("");
    setContent("");
    setMedia("");

    setId(newId);
    setIsAdding(false);
  }

  return (
    <>
    {
      isAdding?
        <form className="editForm">
      <input
        defaultValue={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
      />
      <textarea
        defaultValue={content}
        className="textbox"
        rows={10}
        cols={50}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        defaultValue={media}
        onChange={(e) => setMedia(e.target.value)}
        className="mediaInput"
        type="text"
      />{" "}
      <button onClick={(e) => addPost(e)}>Add</button>
    </form>
    :
    <button onClick = {()=>setIsAdding(true)}>Add new post</button>
    }
    </>

  );
});

export default AddNewPost;
