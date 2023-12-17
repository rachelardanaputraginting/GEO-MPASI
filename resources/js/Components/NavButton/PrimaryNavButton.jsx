import { Link } from "@inertiajs/react";

export default function PrimaryNavButton({
    href,
    className = "",
    children,
}) {
    return (
        <Link
            href={href}
            className={
                `inline-flex items-center justify-center text-center px-4 py-2.5 bg-secondary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-secondary focus:bg-secondary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150` + className
            }
        >
            {children}
        </Link>
    );
}
