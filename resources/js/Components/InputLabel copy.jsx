export default function InputLabelBottom({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-light text-xs text-dark ` + className}>
            {value ? value : children}
        </label>
    );
}
