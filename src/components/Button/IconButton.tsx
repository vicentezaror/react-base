import React from 'react';

export default function IconButton(props: { icon: JSX.Element, onClick: () => void }) {
    return (
        <button
            className='bg-primary-darker text-primary-lighter hover:bg-primary hover:text-primary-darker font-bold p-3 rounded-full'
            onClick={props.onClick}
        >
            {props.icon}
        </button>
    );
}