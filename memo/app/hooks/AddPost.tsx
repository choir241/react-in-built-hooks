"use client";
import type { IPost } from "../components/Post";
import { useState, memo, useCallback, FormEvent } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Buttons";

const AddNewPost = memo(function AddPost({
  dispatch,
}: {
  dispatch: (e) => void;
}) {
  const addPost = useCallback(
    ({
      e,
      post,
      setIsAdding,
    }: {
      e: FormEvent<HTMLButtonElement>;
      post: IPost;
      setIsAdding: (e: boolean) => void;
    }) => {
      e.preventDefault();

      post.id++;

      dispatch({
        type: "added",
        content: post.content,
        author: post.author,
        media: post.media,
        likes: 0,
        id: post.id,
      });

      setIsAdding(false);
    },
    []
  );

  const [post, setPost] = useState({
    content: "",
    author: "",
    media: "",
    likes: 0,
    id: 50,
  });
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      {isAdding ? (
        <form className="editForm">
          <Input
            label="Author"
            name="author"
            defaultValue={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            type="text"
          />
          <TextArea
            name="content"
            label="Content"
            defaultValue={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <Input
            label="Media"
            name="media"
            defaultValue={post.media}
            onChange={(e) => setPost({ ...post, media: e.target.value })}
            type="text"
          />
          <Button
            label="Add"
            onClick={(e) => {
              e.preventDefault();
              addPost({ e, post, setIsAdding });
            }}
          />
        </form>
      ) : (
        <Button label="Add new post" onClick={(e) => setIsAdding(true)} />
      )}
    </>
  );
});

export default AddNewPost;
