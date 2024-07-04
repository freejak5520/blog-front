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
      <h2 className="mb-2 mt-8 text-lg font-bold text-primary">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="mb-4 font-medium text-secondary">
        {description}
        <Link href={href} className="ml-2 text-sm font-bold text-secondary">
          더보기 →
        </Link>
      </p>
      <div className="text-sm text-secondary">{date}</div>
    </div>
  );
};

export default PostItem;
