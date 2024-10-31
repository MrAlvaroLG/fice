import React from 'react';
import { motion } from 'framer-motion';

interface DropdownProps {
    items: string[];
    shiftLeft?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    const isMobileView = window.innerWidth < 768;

    return (
        <motion.div
            className={`flex flex-col ${isMobileView ? 'w-full shadow-none border-l-2 border-r-0 border-t-0 border-b-0 rounded-none' : 'w-60'} rounded-md shadow-lg bg-secondary border border-primary`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {items.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    className="block rounded-md py-2 text-sm m-1 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
                >
                    <span className="ml-2">{item}</span>
                </a>
            ))}
        </motion.div>
    );
};

export default Dropdown;