import React from 'react'
import CodeIcon from '../Icon/FlatIcon/CodeIcon';

export default function Title(props: { text: string }) {
    return (
        <section className='p-5 flex flex-row items-center justify-center'>
          <CodeIcon width='140px' height='140px' />
          <h1 className='text-border select-none text-9xl text-center text-primary-darker font-bold'>
            {props.text}
          </h1>
        </section>
    );
}
