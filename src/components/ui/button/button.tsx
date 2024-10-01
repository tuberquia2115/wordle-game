import { ButtonProps } from './button.interface';

export const Button: React.FC<ButtonProps> = ({ label, className, ...restProps }) => (
    <div className='w-full flex justify-center'>
        <button
            className={`${className} bg-green-600 w-64 py-2 rounded-md text-white-50 text-xl font-extrabold hover:bg-greenn-650 transition-all`}
            {...restProps}
        >
            {label}
        </button>
    </div>
);
