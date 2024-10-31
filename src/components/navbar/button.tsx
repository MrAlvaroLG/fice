"use client"

import React, { useState, useRef, useEffect } from 'react';
import Dropdown from './dropdown';
import './navbar.css';

interface NavigationBarButtonProps {
    text: string;
    svgText: JSX.Element;
    chevron: JSX.Element;
    dropdownItems: string[];
    shiftLeft?: boolean;
}

const NavigationBarButton: React.FC<NavigationBarButtonProps> = ({ text, svgText, chevron, dropdownItems, shiftLeft }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = () => {
        if (!isMobileView) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setDropdownVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobileView) {
            timeoutRef.current = setTimeout(() => {
                setDropdownVisible(false);
            }, 200); 
        }
    };

    const handleClick = () => {
        if (isMobileView) {
            setDropdownVisible(!isDropdownVisible);
        }
    };

    return (
        <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button 
                className="flex flex-row justify-between md:justify-center text-center items-center w-full rounded-lg py-4 px-2 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
                onClick={handleClick}
            >
                <span className="text-inherit">{svgText}</span>
                <span className="text-inherit">{text}</span>
                <span className={`text-inherit chevron ml-auto md:ml-0 transition-transform duration-300 ${isDropdownVisible ? 'rotate-180' : ''}`}>
                    {chevron}
                </span>
            </button>
            {isDropdownVisible && (
                <div className={`mt-2 w-full ${isMobileView ? 'relative' : 'absolute'} bg-secondary transition-opacity duration-300`}>
                    <Dropdown items={dropdownItems} shiftLeft={shiftLeft} />
                </div>
            )}
        </li>
    );
};

export default NavigationBarButton;