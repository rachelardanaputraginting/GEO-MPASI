import { Link, usePage } from '@inertiajs/react';
import React from 'react'

function Sidebar() {
    const { users, auth } = usePage().props;

    console.log(users);
  return (
      <div className="w-1/4 fixed flex flex-col h-full px-6 py-4 text-right text-right border-r space-y-2">
          <div className="flex-1 overflow-y-auto">
              {users.map((user) => (
                  <Link
                      key={user.id}
                      href={route("chat.show", user.username)}
                      className={`block ${
                          route().current("chat.show", user.username)
                              ? "text-dark"
                              : "text-dark"
                      }`}
                  >
                      {user.name}
                  </Link>
              ))}
          </div>
          <div className="bg-dark rounded-xl p-4 space-y-3">
              <div>{auth.user.name}</div>
              <Link
                  className="border bg-white font-medium text-black rounded-xl px-4 py-2"
                  as="button"
                  method="POST"
                  href={route("logout")}
              >
                  Log out
              </Link>
          </div>
      </div>
  );
}

export default Sidebar
