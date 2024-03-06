import Image from "next/image";
import Link from "next/link";

export const Header = ({ logo, routeBase, title }) => {
  return (

    <header className="max-w-7xl px-8 mx-auto flex justify-between flex-wrap items-center py-4">
      <Link href={`${routeBase}`}>
        <Image
          alt={title}
          className="max-w-sm"
          height={logo?.height}
          src={logo?.src}
          width={logo?.width}
        />
      </Link>
      <ul className="flex gap-8 items-center">
        <li>
            <Link href={`${routeBase}/`}>Home</Link>
        </li>
        <li>
          <Link href={`${routeBase}/students`}>Students</Link>
        </li>
        <li>
          <Link href={`${routeBase}/teachers`}>Teachers</Link>
        </li>
      </ul>
    </header>
  );
};
