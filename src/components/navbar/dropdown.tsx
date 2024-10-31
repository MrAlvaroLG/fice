import React from 'react';

interface DropdownProps {
    items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    return (
        <div className="flex flex-col left-0 w-56 mt-2 rounded-md shadow-lg bg-secondary border border-primary">
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