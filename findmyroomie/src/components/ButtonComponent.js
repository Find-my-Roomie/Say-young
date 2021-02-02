import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: 29.2rem;
    height: 7rem;

    border-radius: 1.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.type === true ? props.theme.primary : props.theme.gray};
    cursor:pointer;
    margin : 1.5rem;

    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:'Spoqa-Han-Sans';
    font-weight: 400;
    font-size:1.5rem;

    :hover{
        background-color: ${props => props.theme.primary};
    }

`

function ButtonComponent({ type, text, onclick }) {

    const onClickBtn = () => {
        onclick();
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default ButtonComponent;