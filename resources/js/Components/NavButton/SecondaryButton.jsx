import { Link } from "@inertiajs/react";

export default function SecondaryButton({
    className,
    href,
    children,
}) {
    return (
        <Link
            href={href}
            className={
                `inline-flex items-center px-4 py-2.5 justify-center bg-transparent text-secondary border border-secondary rounded font-semibold text-xs  uppercase tracking-widest shadow-sm hover:bg-secondary hover:text-white focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-1 disabled:opacity-25 transition ease-in-out duration-150` + className
            }
        >
            {children}
        </Link>
    );
}
