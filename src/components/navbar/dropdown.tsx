import React from 'react';

interface DropdownProps {
    items: string[];
    shiftLeft?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    const isMobileView = window.innerWidth < 768;

    return (
        <div
            className={`flex flex-col ${isMobileView ? 'w-full shadow-none border-l-2 border-r-0 border-t-0 border-b-0 rounded-none' : 'w-60'} rounded-md shadow-lg bg-secondary border border-primary transition-opacity duration-300`}
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
        </div>
    );
};

export default Dropdown;