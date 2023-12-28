import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Chat({ title, children }) {
    const { users, auth } = usePage().props;
    return (
        <div className="flex min-h-screen">
            <Head title={title} />
            <div className="w-1/4">
                <div className="w-1/4 fixed flex flex-col h-full text-left border-r border-fifth space-y-2">
                    <div className="shadow px-4 py-4 bg-primary">
                        <div className="flex gap-2">
                            <img
                                src={
                                    `${auth.user.picture}`
                                        ? `/storage/${auth.user.picture}`
                                        : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
                                }
                                alt={auth.user.picture}
                                className="h-10 w-10 rounded"
                            />

                            <div className="flex flex-col">
                                <div className="font-semibold">
                                    {auth.user.name}
                                </div>
                                <div className="text-xs">Rs. Sejahtera</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {users.map((user) => (
                            <Link
                                key={user.id}
                                href={route("chat.show", user.username)}
                                className={`block hover:bg-third border-b rounded-b-none border-fifth py-3 rounded ${
                                    route().current("chat.show", user.username)
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
                        ))}
                    </div>
                    {/* <div className="bg-dark rounded-xl p-4 space-y-3">
                        <div className="text-white">{auth.user.name}</div>
                        <Link
                            className="border bg-white font-medium text-black rounded-xl px-4 py-2"
                            as="button"
                            method="POST"
                            href={route("logout")}
                        >
                            Log out
                        </Link>
                    </div> */}
                </div>
            </div>
            <div className="w-3/4">{children}</div>
        </div>
    );
}
