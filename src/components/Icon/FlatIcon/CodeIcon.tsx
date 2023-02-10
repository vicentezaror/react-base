import React from 'react';

export default function CodeIcon(props: {width?: string, height?: string}) {
    const {width, height} = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width?.toString() || '800px'}
            height={height?.toString() || '800px'}
            viewBox='0 0 512 512'
            // center content with tailwindcss
            className='drop-shadow-2xl shadow-black fill-current text-primary-dark flex items-center justify-center'
        >
            <g id="icon" transform="translate(37.333333, 128.141872)">
                <path d="M111.084954,16.7215774 L141.254831,46.8914721 L60.356556,127.806522 L141.254831,208.721577 L111.084954,238.891472 L7.10542736e-15,127.806522 L111.084954,16.7215774 Z M326.063211,16.758697 L295.893333,46.9285921 L376.791607,127.843642 L295.893333,208.758697 L326.063211,238.928592 L437.148163,127.843642 L326.063211,16.758697 Z M231.145356,3.69482223e-12 L272.358192,11.0429459 L206.100516,258.319957 L164.887681,247.277012 L231.145356,3.69482223e-12 Z" />
            </g>
        </svg>
    );
};
