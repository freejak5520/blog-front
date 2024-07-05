import Link from "next/link";

const PostItem = ({
  title,
  description,
  date,
  href = "#",
}: {
  title?: string;
  description?: string;
  date?: string;
  href?: string;
}) => {
  return (
    <div>
      <h2 className="mb-2 mt-8 text-lg font-bold">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="mb-4 font-medium">
        {description}
        <Link href={href} className="ml-2 text-sm font-bold">
          더보기 →
        </Link>
      </p>
      <div className="text-sm">{date}</div>
    </div>
  );
};

export default PostItem;
