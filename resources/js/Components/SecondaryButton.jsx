export default function SecondaryButton({ type = 'button', className, disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2.5 justify-center bg-transparent text-secondary border border-secondary rounded font-semibold text-xs  uppercase tracking-widest shadow-sm hover:bg-secondary hover:text-white focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-1 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
