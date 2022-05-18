import React from "react";
import styled from "styled-components"

interface ButtonProps {
    backgroundcolor?: any
}

const ButtonComponent = styled.div`
background-color: red;
`;

export const Button: React.FC<ButtonProps> = () => {
    return (
        <ButtonComponent>
            Hello
        </ButtonComponent>
    )
}