import React from 'react';

export default function PuzzleIcon(props: {width?: string, height?: string}) {
    const {width, height} = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width?.toString() || '24px'}
            height={height?.toString() || '24px'}
            viewBox='0 0 24 24'
            className='fill-current'
        >
            <path d="M 11.5 0 C 10.119 0 9 1.119 9 2.5 L 9 4 L 5 4 C 3.895 4 3 4.895 3 6 L 3 10 L 4.5 10 C 5.881 10 7 11.119 7 12.5 C 7 13.881 5.881 15 4.5 15 L 3 15 L 3 19 C 3 20.105 3.895 21 5 21 L 9 21 L 9 19.5 C 9 18.119 10.119 17 11.5 17 C 12.881 17 14 18.119 14 19.5 L 14 21 L 18 21 C 19.105 21 20 20.105 20 19 L 20 15 L 21.5 15 C 22.881 15 24 13.881 24 12.5 C 24 11.119 22.881 10 21.5 10 L 20 10 L 20 6 C 20 4.895 19.105 4 18 4 L 14 4 L 14 2.5 C 14 1.119 12.881 0 11.5 0 z"/>
        </svg>
    );
};
