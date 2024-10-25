import Link from "next/link";


const Navbar = () => {
    return (
      <nav className="flex justify-between flex-wrap p-3">
        <ui className="flex list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="ml-3">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ui>

        <ui className="flex list-none">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li className="ml-3">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ui>
      </nav>
    );
}

export default Navbar