"use client"

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from './dropdown';

interface NavigationBarButtonProps {
    text: string;
    svgText: JSX.Element;
    chevron: JSX.Element;
    dropdownItems: string[];
    shiftLeft?: boolean;
}

const NavigationBarButton: React.FC<NavigationBarButtonProps> = ({ text, svgText, chevron, dropdownItems, shiftLeft }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setDropdownVisible(false);
        }, 200); // Ajusta el tiempo según sea necesario
    };

    return (
        <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="flex flex-row justify-center text-center items-center rounded-lg p-2 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
                <span className="text-inherit">{svgText}</span>
                <span className="text-inherit">{text}</span>
                <span className="text-inherit chevron transition-transform duration-300">{chevron}</span>
            </button>
            <AnimatePresence>
                {isDropdownVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute mt-2 w-48 rounded-md shadow-lg bg-secondary"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Dropdown items={dropdownItems} shiftLeft={shiftLeft} />
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

export default NavigationBarButton;