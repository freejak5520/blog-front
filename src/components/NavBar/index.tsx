import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-end gap-3">
      <Link className="font-semibold" href={"/posts"}>
        Blog
      </Link>
      <Link className="font-semibold" href={"/about"}>
        About
      </Link>
    </div>
  );
};

export default NavBar;
