import React from "react";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, router, usePage } from "@inertiajs/react";
import PrimaryNavButton from "@/Components/NavButton/PrimaryNavButton";
import SecondaryNavButton from "@/Components/NavButton/SecondaryNavButton";

export default function Navbar() {
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="bg-primary fixed z-[999] top-0 shadow-xl w-full">
            <div className="max-w-8xl mx-auto px-4 sm:px-16 lg:px-40">
                <div className="flex justify-between h-16">
                    <div className="flex justify-between">
                        <div className="flex items-center w-full">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-secondary"
                            >
                                <h4>GEO-MPASI</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:-my-px sm:flex flex justify-between gap-8">
                        <NavLink
                            href={route("home.index")}
                            active={route().current("home.index")}
                        >
                            Beranda
                        </NavLink>
                        <NavLink
                            href={route("article.index")}
                            active={route().current("article.index")}
                        >
                            Artikel
                        </NavLink>
                        <NavLink
                            href={route("doctor.index")}
                            active={route().current("doctor.index")}
                        >
                            Dokter
                        </NavLink>
                        <NavLink
                            href={route("about.index")}
                            active={route().current("about.index")}
                        >
                            Tentang
                        </NavLink>
                    </div>
                    <div className="hidden w-1/4 flex justify-end sm:flex sm:items-center">
                        {auth.user ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 leading-4 font-medium rounded-md text-white bg-primary hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={
                                                        `${auth.user.picture}`
                                                            ? `/storage/${auth.user.picture}`
                                                            : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
                                                    }
                                                    alt={auth.user.picture}
                                                    className="h-10 w-10 rounded"
                                                />
                                                {auth.user.name}
                                            </div>

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profil Saya
                                    </Dropdown.Link>
                                    <Dropdown.Link href={route('chat.index')}>
                                        <div className="flex justify-between items-center">
                                            <p>Pesan Saya</p>
                                            <span className="bg-fourth p-1 text-xs rounded text-white">
                                                10
                                            </span>
                                        </div>
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <div className="flex gap-x-2">
                                <SecondaryNavButton href={route("register")}>
                                    Daftar
                                </SecondaryNavButton>
                                <PrimaryNavButton href={route("login")}>
                                    Masuk
                                </PrimaryNavButton>
                            </div>
                        )}
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route("home.index")}>
                        Beranda
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("article.index")}>
                        Artikel
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("doctor.index")}>
                        Dokter
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("about.index")}>
                        Tentang
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-white">
                    {auth.user ? (
                        <>
                            <div className="px-4">
                                <div className="font-medium text-base text-white">
                                    {auth.user.name}
                                </div>
                                <div className="font-medium text-sm text-white">
                                    Jenis User
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('chat.index')}>
                                    <div className="flex w-full justify-between">
                                        <p>Pesan Saya</p>
                                        <span className="bg-fourth p-1 text-xs rounded text-white">
                                            10
                                        </span>
                                    </div>
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <ResponsiveNavLink href={route("register")}>
                                Daftar
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("login")}>
                                Masuk
                            </ResponsiveNavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
