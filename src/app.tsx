import { useEffect, useState } from "react";
import { ExamplePosts } from "./components/posts";
import type { Posts } from "./types/post";

export default function App() {
  const [dataPosts, setDataPosts] = useState<Posts>([]);

  function handleCreatePost() {
    const newDataPosts = [
      ...dataPosts,
      {
        id: 4,
        userId: 1,
        title: "Good bye",
        body: "Test",
        description: "Test bye",
      },
    ];
    setDataPosts(newDataPosts);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data: Posts = await response.json();
      setDataPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Demo React Vite</h1>
      <ExamplePosts posts={dataPosts} />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}
