import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-secondary text-secondary font-semibold focus:border-secondary"
                    : "border-transparent text-white border-none hover:text-white hover:border-secondary focus:text-white ") +
                className
            }
        >
            {children}
        </Link>
    );
}
