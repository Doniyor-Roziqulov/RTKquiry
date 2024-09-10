import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const counter = useSelector((state) => state.counter.value);

    return (
        <header className="flex justify-between py-8 bg-black items-center mx-auto px-10">
            <Link to={"/"} className="text-white text-3xl font-bold">
                RTK query
            </Link>
            <div className="flex gap-x-10">
                <NavLink
                    className="text-white border-b border-black text-lg"
                    to={"/"}>
                    Home
                </NavLink>
                <NavLink
                    className="text-white border-b border-black text-lg"
                    to={"/category"}>
                    Category
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
