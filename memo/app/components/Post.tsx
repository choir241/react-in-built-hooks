"use client";
import { memo, useState, FormEvent } from "react";

export interface IPost {
  id: number;
  content: string;
  author: string;
  likes: number;
  media: string;
}

function handleLike({
  e,
  postId,
  posts,
  setCurrentPosts,
}: {
  e: FormEvent<HTMLFormElement>;
  postId: number;
  posts: IPost[];
  setCurrentPosts: (e: IPost[]) => void;
}) {
  e.preventDefault();

  const updatedPosts = posts.map((post: IPost) => {
    if (post.id === postId) {
      post.likes++;
      return post;
    } else {
      return post;
    }
  });

  setCurrentPosts([...updatedPosts]);
}

function handleDelete({
  e,
  postId,
  posts,
  setCurrentPosts,
}: {
  e: FormEvent<HTMLFormElement>;
  postId: number;
  posts: IPost[];
  setCurrentPosts: (e: IPost[]) => void;
}) {
  e.preventDefault();

  const updatedPosts = posts.filter((post: IPost) => post.id !== postId);

  setCurrentPosts(updatedPosts);
}

function editPost({
  e,
  postId,
  posts,
  setIsEditing,
  author,
  content,
  media,
  newAuthor,
  newContent,
  newMedia,
}: {
  e: FormEvent<HTMLFormElement>;
  postId: number;
  posts: IPost[];
  setIsEditing: (e: boolean) => void;
  content: string;
  newContent: string;
  author: string;
  newAuthor: string;
  media: string;
  newMedia: string;
}) {
  e.preventDefault();

  posts.map((post: IPost) => {
    if (post.id === postId) {
      const newPost = {
        id: post.id,
        author: (post.author = newAuthor ? newAuthor : author),
        content: (post.content = newContent ? newContent : content),
        media: (post.media = newMedia ? newMedia : media),
      };

      return newPost;
    } else {
      return post;
    }
  });

  setIsEditing(false);
}

const Post = memo(function Post({
  post,
  setCurrentPosts,
  currentPosts,
}: {
  post: IPost;
  setCurrentPosts: (e: IPost[]) => void;
  currentPosts: IPost[];
}) {
  const [editing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [media, setMedia] = useState("");

  return (
    <>
      {editing ? (
        <form className="editForm">
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            defaultValue={post.author}
          />
          <textarea
            className="textbox"
            rows={10}
            cols={50}
            defaultValue={post.content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            onChange={(e) => setMedia(e.target.value)}
            className="mediaInput"
            type="text"
            defaultValue={post.media}
          />
          <button
            onClick={(e) =>
              editPost({
                e,
                postId: post.id,
                posts: currentPosts,
                setIsEditing: setIsEditing,
                content: post.content,
                author: post.author,
                media: post.media,
                newContent: content,
                newAuthor: author,
                newMedia: media,
              })
            }
          >
            Update
          </button>
        </form>
      ) : (
        <section className="post">
          <section>
            <h4>{post.author}</h4>
            <button
              className="button"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>

            <button
              className="button"
              onClick={(e) =>
                handleDelete({
                  e,
                  postId: post.id,
                  posts: currentPosts,
                  setCurrentPosts: setCurrentPosts,
                })
              }
            >
              Delete
            </button>
          </section>

          <section className="imageContainer">
            <img src={post.media} className="image" />
            <button
              className="button"
              onClick={(e) =>
                handleLike({
                  e,
                  postId: post.id,
                  posts: currentPosts,
                  setCurrentPosts: setCurrentPosts,
                })
              }
            >
              Like {post.likes}
            </button>
          </section>
          <p className="content">{post.content}</p>
        </section>
      )}
    </>
  );
});

export default Post;
