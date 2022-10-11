import useSWR from "swr";
import type { Post, Posts } from "../types/post";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function ExamplePosts() {
  const { data, error } = useSWR<Posts>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data
        .filter((post) => {
          return post.id <= 5;
        })
        .map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
    </div>
  );
}

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
      <p>{post.description}</p>
    </div>
  );
}
