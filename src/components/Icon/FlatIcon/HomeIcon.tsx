import React from 'react';

export default function HomeIcon(props: {width?: string, height?: string}) {
    const {width, height} = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width?.toString() || '24px'}
            height={height?.toString() || '24px'}
            viewBox='0 0 24 24'
            className='fill-current'
        >
            <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 15 L 14 15 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z'/>
        </svg>
    );
};
