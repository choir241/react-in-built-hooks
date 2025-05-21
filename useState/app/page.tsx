"use client";
import { useState } from "react";
import { initialPosts } from "./static/initialPosts";

export default function Home() {
  const [posts, setPosts] = useState(
    initialPosts.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      } else {
        return -1;
      }
    })
  );
  const handleAddPost = () => {
    const updatedPosts = [
           {
        id: 51,
        author: "Richard Choi",
        content: "15/75 #75DaysOfHobbies",
        likes: 3,
        media:
          "https://pbs.twimg.com/media/GrQl_U5WYAAvYZi?format=jpg&name=large",
      },
      ...posts,
    ]
    setPosts(updatedPosts);
    console.log(updatedPosts);
  };

  return (
    <main>
      <button onClick={handleAddPost}>Add</button>
      {posts.map((post) => {
        return (
          <section className="post" key={post.id}>
            <section>
              <h4>{post.author}</h4>
            </section>

            <section className="imageContainer">
              <img src={post.media} className="image" />
            </section>
            <p className="content">{post.content}</p>
          </section>
        );
      })}
    </main>
  );
}
