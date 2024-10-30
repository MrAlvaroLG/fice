import React from 'react';
import './button.css';

interface NavigationBarButtonProps {
    text: string;
    svgText: JSX.Element;
    chevron: JSX.Element;
}

export function NavigationBarButton({ text, svgText, chevron }: NavigationBarButtonProps) {
    return (
        <button className="flex flex-row justify-center text-center items-center rounded-lg p-2 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
            <span className="text-inherit">{svgText}</span>
            <span className="text-inherit">{text}</span>
            <span className="text-inherit chevron transition-transform duration-300">{chevron}</span>
        </button>
    );
}