import Dropdown from "@/Components/Dropdown";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconMessage } from "@tabler/icons-react";
import React from "react";

export default function Chat({ title, children }) {
    const { users, auth } = usePage().props;
    return (
        <div className="flex min-h-screen bg-primary/10">
            <Head title={title} />
            <div className="w-1/4">
                <div className="w-1/4 fixed flex flex-col h-full text-left border-r border-fifth space-y-2">
                    <div className="shadow-xl px-4 py-2 bg-primary border-b border-fifth">
                        <div className="w-full flex justify-start sm:flex sm:items-center">
                            {auth.user ? (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 leading-4 font-medium rounded-md text-white bg-primary hover:text-dark focus:outline-none transition ease-in-out duration-150"
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
                                                </div>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content align="left" width="48">
                                        <Dropdown.Link
                                            href={route("home.index")}
                                        >
                                            Beranda
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profil Saya
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
                                ""
                            )}
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {users.map((user) => (
                            <>
                                <Link
                                    key={user.id}
                                    href={route("chat.show", user.username)}
                                    className={`block hover:bg-third border-b rounded-b-none border-fifth py-3 rounded ${
                                        route().current(
                                            "chat.show",
                                            user.username
                                        )
                                            ? "text-dark"
                                            : "text-dark"
                                    }`}
                                >
                                    <div className="flex gap-2">
                                        <img
                                            src={
                                                `${user.picture}`
                                                    ? `/storage/${user.picture}`
                                                    : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
                                            }
                                            alt={user.picture}
                                            className="h-10 w-10 rounded"
                                        />

                                        <div className="flex flex-col">
                                            <div className="font-semibold">
                                                {user.name}
                                            </div>
                                            <div className="text-xs">
                                                Rs. Sejahtera
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="px-6 py-4 flex flex-col items-center justify-center flex-1 space-y-2">
                                    <p className="text-sm text-fifth">
                                        Silahkan berdiskusi..
                                    </p>
                                    <IconMessage
                                        className="text-fifth"
                                        stroke={1}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-3/4">{children}</div>
        </div>
    );
}
