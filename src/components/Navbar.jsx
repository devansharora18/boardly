import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-[1vh] px-3 h-[10vh] bg-rose-50">
      <Link to="/">
        <img className="h-7" src="logo.svg" alt="boardly.in" />
      </Link>
      <div className="flex px-3 flex-row items-center">
        <Link to="/activity" className="mr-6">
          <img className="h-5" src="bell.svg" alt="notifications" />
        </Link>
        <Link to="/profile">
          <img className="h-8" src="profile.svg" alt="profile" />
        </Link>
      </div>
    </nav>
  );
}
