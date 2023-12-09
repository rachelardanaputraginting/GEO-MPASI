export default function PrimaryButton({ type, className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center text-center px-4 py-2.5 bg-secondary rounded font-semibold text-sm text-white tracking-widest hover:bg-secondary focus:bg-secondary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
