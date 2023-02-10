import React from 'react';

interface NavItemProps {
    title: string;
    icon?: JSX.Element;
    url?: string;
}

export default function NavItem(props: NavItemProps) {
    return (
        <div
            className={
                'drop-shadow-2xl shadow-white flex flex-col rounded-lg p-2 m-3 items-center justify-center text-primary-darker hover:text-white'
                + (props.url ? ' cursor-pointer' : '')
            }
        >
            <a
                className='flex flex-col items-center justify-center'
                href={props.url}
            >
                {props.icon && props.icon}
                {props.title &&
                    <p className='text-base font-medium'>
                        {props.title}
                    </p>
                }
            </a>
        </div>
    );
}