import React from 'react';
import HomeIcon from '../Icon/FlatIcon/HomeIcon';
import PuzzleIcon from '../Icon/FlatIcon/PuzzleIcon';
import ProfileIcon from '../Icon/FlatIcon/ProfileIcon';
import NavItem from './NavItem';

export default function Navbar(props: { children?: React.ReactNode }) {
    return (
        <div className='max-w-3xl shadow-md shadow-gray-600 bg-gradient-to-b from-primary-dark to-primary flex flex-row justify-between px-16 rounded-3xl drop-shadow-2xl w-11/12 place-self-center'>
            {props.children}
        </div>
    );
}