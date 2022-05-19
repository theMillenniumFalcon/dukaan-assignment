import React from "react";
import styled from "styled-components"

interface SloganInputProps { }

const SloganInputComponent = styled.div`
margin-top: 3em;
`;

const Heading = styled.div`
font-family: galanogrotesque-r;
color: rgba(77, 77, 77, 1);
`;

const Input = styled.div`
margin-top: 0.5em;
border: 1px solid #D9D9D9;
height: 30px;
width: 250px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 5px;
padding-right: 5px;
input {
    font-family: galanogrotesque-r;
    outline: none;
    height: 100%;
    font-weight: 400;
    font-size: 16px;
    border: none;
}
img {
    cursor: pointer;
}
`;

export const SloganInput: React.FC<SloganInputProps> = () => {
    return (
        <SloganInputComponent>
            <Heading>
                {"Word for your slogan"}
            </Heading>
            <Input>
                <input type="text" defaultValue="cozy" />
                <img src="assets/icons/cross.svg" alt="" />
            </Input>
        </SloganInputComponent>
    )
}