import Link from "next/link";
import "./header.css";
export const Header = () => {
  return (
    <header className="subzworld-header">
      <nav className="navigation">
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="contact">Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
