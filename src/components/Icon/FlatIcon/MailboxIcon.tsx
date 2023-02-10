import React from 'react';

export default function MailboxIcon(props: {width?: string, height?: string}) {
    const {width, height} = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width?.toString() || '24px'}
            height={height?.toString() || '24px'}
            viewBox='0 0 24 24'
            className='fill-current'
        >
        <path d="M 7 4 C 4.2545455 4 2 6.2545455 2 9 L 2 18 C 2 18.522222 2.1913289 19.05461 2.5683594 19.431641 C 2.9453899 19.808671 3.4777778 20 4 20 L 10 20 L 20 20 C 21.1 20 22 19.1 22 18 L 22 9 C 22 6.2 19.8 4 17 4 L 7 4 z M 7 6 C 8.7 6 10 7.3 10 9 L 10 18 L 4 18 L 4 9 C 4 7.3454545 5.3454545 6 7 6 z M 6 9 L 6 11 L 8 11 L 8 9 L 6 9 z M 13 9 L 19 9 L 19 13 L 17 13 L 17 11 L 13 11 L 13 9 z"/>
    </svg>
    );
};
