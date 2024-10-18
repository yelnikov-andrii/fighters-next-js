import * as React from 'react';

type ButtonType = "submit" | "reset" | "button";

interface Props {
    children: React.ReactNode;
    type: ButtonType;
}

function FormButton(props: Props) {
    const { children } = props;
    return (
        <button className='button-form w-full py-2 px-4 rounded-sm uppercase font-bold bg-green flex justify-center items-center' type={props.type}>
            {children}
        </button>
    );
}

export default FormButton;