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
position: relative;
input {
    height: 30px;
    width: 250px;
    font-family: galanogrotesque-r;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    outline: none;
}
img {
    position: absolute;
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