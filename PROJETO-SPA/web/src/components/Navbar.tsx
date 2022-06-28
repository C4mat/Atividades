import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import React from "react";

export function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-300  dark:bg-blue-900 mb-3 md:flex">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-zinc-500"

                        >
                            REACT.TAILWIND
                        </a>
                        <button
                            className="text-zinc-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >

                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug dark:text-zinc-300 hover:opacity-75"

                                >
                                    <i className="text-lg leading-lg dark:text-blue-200 opacity-75"></i><span className="ml-2">O QUE É</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug dark:text-zinc-300 hover:opacity-75"

                                >
                                    <i className=" text-lg leading-lg dark:text-zinc-600 opacity-75"></i><span className="ml-2">APRENDA MAIS</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}