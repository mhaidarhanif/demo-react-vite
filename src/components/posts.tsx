import type { Post, Posts } from "../types/post";

export interface PostsProps {
  posts: Posts;
}

export function ExamplePosts({ posts }: PostsProps) {
  return (
    <div>
      {posts
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
