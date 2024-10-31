"use client"

import React, { useState } from 'react';
import NavigationBarButton from './button';
import { AcademicCap, Beaker, InformationCircle, ChevronDown, Burger, Xmark } from './svg';
import './navbar.css';

export function NavigationBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='navbar flex flex-col md:flex-row justify-between items-center px-8 bg-secondary fixed w-full z-50 h-auto md:h-14 pt-4'>
            <div className="flex justify-between items-center w-full md:w-auto">
                <span className='text-2xl text-primary'>FICE</span>
                <button className="md:hidden text-primary absolute top-4 right-4" onClick={toggleMenu}>
                    {isMenuOpen ? Xmark : Burger}
                </button>
            </div>
            <ul className={`flex flex-col md:flex-row justify-around w-full md:w-10/12 md:ml-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                <NavigationBarButton text="Departamentos" svgText={AcademicCap} chevron={ChevronDown} dropdownItems={['Informática', 'Matemática', 'Ciencias de la Información', 'Física', 'Lic. en Física', 'Lic. en Informática', 'Lic. en Educación Laboral']} />
                <NavigationBarButton text="Investigación" svgText={Beaker} chevron={ChevronDown} dropdownItems={['iA', 'SOBALTIC', 'Matematica Aplicada', 'Matemática Educativa' ]} />
                <NavigationBarButton text="Sobre Nosotros" svgText={InformationCircle} chevron={ChevronDown} dropdownItems={['Ubicación', 'Contacto', 'Profesorado']} shiftLeft />
            </ul>
        </nav>
    );
}