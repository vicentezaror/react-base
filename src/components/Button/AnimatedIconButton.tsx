import React, { useState } from 'react';
import Lottie from 'lottie-react';

export default function AnimatedIconButton(
        props: { 
            icon: any,
            onClick: () => void
        }
    ) {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <button
            className='bg-primary-darker text-primary-lighter hover:bg-primary hover:text-primary-darker font-bold p-3 rounded-full'
            onClick={() => {
                setIsPlaying(true);
                setTimeout(() => {
                    setIsPlaying(false);
                }
                , 1000);}
            }
        >
            <Lottie color='text-primary' autoplay={isPlaying} loop={isPlaying} animationData={props.icon} />
        </button>
    );
}
