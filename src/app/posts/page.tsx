"use server";

import Item from "@/components/Posts/Item";
import Paginate from "@/components/Posts/Paginate";
import { apiFetch } from "@/lib/getFetch";
import { format } from "date-fns";
import PostPaginate from "./_components/PostPaginate";

const Posts = async ({ searchParams }: { searchParams: { page: string } }) => {
  const params = new URLSearchParams(searchParams);
  const response = await apiFetch(`/api/posts?${params.toString()}`);
  const { data, meta } = await response.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Posts
      </h1>
      {data.map((post: Post) => (
        <Item
          key={post.id}
          title={post.title}
          description={post.content}
          date={format(post.created_at, "PPP")}
          href={`/posts/${post.id}`}
        />
      ))}
      <PostPaginate pageCount={meta.last_page} />
    </div>
  );
};

export default Posts;
