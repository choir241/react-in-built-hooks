"use client";
import { memo, useCallback, useState } from "react";
import Button from "./Buttons";
import Input from "./Input";
import TextArea from "./TextArea";
export interface IPost {
  id: number;
  content: string;
  author: string;
  likes: number;
  media: string;
}

const Post = memo(function Post({
  post,
  dispatch,
}: {
  post: IPost;
  dispatch: (e) => void;
}) {
  const handleLike = useCallback((post: IPost) => {
    dispatch({
      type: "liked",
      post: post,
    });
  }, []);

  const handleDelete = useCallback((postId: number) => {
    dispatch({
      type: "deleted",
      postId: postId,
    });
  }, []);

  const editPost = useCallback((post: IPost) => {
    dispatch({
      type: "edited",
      post: post,
    });
  }, []);

  const [editing, setIsEditing] = useState(false);

  return (
    <>
      {editing ? (
        <form className="editForm">
          <Input
            label="Author"
            name="author"
            defaultValue={post.author}
            onChange={(e) => {
              editPost({
                ...post,
                author: e.target.value,
              });
            }}
            type="text"
          />
          <TextArea
            label="Content"
            name="content"
            defaultValue={post.content}
            onChange={(e) => {
              editPost({
                ...post,
                content: e.target.value,
              });
            }}
          />
          <Input
            name="media"
            label="Media"
            defaultValue={post.media}
            onChange={(e) => {
              editPost({
                ...post,
                media: e.target.value,
              });
            }}
            type="text"
          />

          <Button
            label="Update"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(false);
            }}
          />
        </form>
      ) : (
        <section className="post">
          <section>
            <h4>{post.author}</h4>
            <Button
              label="Edit"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(true);
              }}
            />

            <Button label="Delete" onClick={() => handleDelete(post.id)} />
          </section>

          <section className="imageContainer">
            <img src={post.media} className="image" />
            <Button
              label={`Like ${post.likes}`}
              onClick={(e) => {
                e.preventDefault();
                handleLike({
                  ...post,
                  likes: post.likes + 1,
                });
              }}
            />
          </section>
          <p className="content">{post.content}</p>
        </section>
      )}
    </>
  );
});

export default Post;
