import * as React from 'react';

interface Props {
    children: React.ReactNode;
}

function FormButton(props: Props) {
    const { children } = props;
    return ( 
        <button className='button-form w-full py-2 px-4 rounded-sm uppercase font-bold bg-green'>
            {children}
        </button>
     );
}

export default FormButton;