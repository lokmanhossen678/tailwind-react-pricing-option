import React, { useState } from "react";
import Link from "./Link";
import { Airplay, Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    url: "/home",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const Links = navigationData.map((rout) => (
    <Link key={rout.id} rout={rout}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10 mt-4 ">
      <span className="flex" onClick={() => setOpen(!open)}>
        {
        open ? 
        <X className="md:hidden"></X> : 
        <Menu className="md:hidden"></Menu>
        }
       <ul className={`md:hidden absolute duration-1000 text-black
        ${open ? 'top-8' : '-top-40'}
        bg-amber-200`}>
        {Links}
       </ul>

      <h3 className="ml-4">My Navbar</h3>
      </span>
      <ul className="md:flex hidden">
        {
            Links
        }
      </ul>

      {/* <ul className="flex">
        {
             navigationData.map(root=><li className='mr-10'>
            <a href={root.url}>{root.name}</a></li>)
        }
      </ul> */}

      {/* <ul className="flex">
        {
            navigationData.map(rout=><li className='mr-10'>
                <a href={rout.url}>{rout.name}</a></li>)
        }
      </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
