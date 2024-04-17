"use server";

import { apiFetch } from "@/lib/getFetch";
import MarkdownContent from "../_components/MarkdownContent";
import { format } from "date-fns";

const PostDetail = async ({ params }: { params: { id: string } }) => {
  const response = await apiFetch(`/api/posts/${params.id}`);
  const { data } = await response.json();

  return (
    <div>
      <div className="text-3xl font-bold mb-9 text-gray-950 dark:text-gray-50">
        {data.title}
      </div>
      <div className="mb-8 text-sm text-gray-500 dark:text-gray-400 flex justify-end">
        {format(data.created_at, "PPP")}
      </div>
      <div>
        <MarkdownContent content={data.content} />
      </div>
    </div>
  );
};

export default PostDetail;
