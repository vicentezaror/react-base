import React from 'react';

export default function ProfileIcon(props: {width?: string, height?: string}) {
    const {width, height} = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width?.toString() || '24px'}
            height={height?.toString() || '24px'}
            viewBox='0 0 32 32'
            className='fill-current'
        >
            <g>
                <g>
                    <path d="M16,31C7.7285156,31,1,24.2709961,1,16S7.7285156,1,16,1s15,6.7290039,15,15S24.2714844,31,16,31z M16,3
                        C8.8320313,3,3,8.831543,3,16s5.8320313,13,13,13s13-5.831543,13-13S23.1679688,3,16,3z"/>
                </g>
                <g>
                    <g>
                        <circle cx="16" cy="15.1333332" r="4.2666669"/>
                    </g>
                    <g>
                        <path d="M16,30c2.401123,0,4.6600342-0.6062012,6.6348877-1.6712646C22.210083,25.1000366,19.4553223,22.5083008,16,22.5083008
                            s-6.210083,2.5917358-6.6348877,5.8204346C11.3399658,29.3937988,13.598877,30,16,30z"/>
                    </g>
                </g>
            </g>
        </svg>
    );
};
