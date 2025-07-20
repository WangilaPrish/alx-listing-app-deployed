import { ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`}>
            {text}
        </button>
    );
};

export default Button;
