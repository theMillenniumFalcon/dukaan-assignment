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
input {
    height: 30px;
    width: 250px;
    font-family: galanogrotesque-r;
    border-radius: 4px;
    border-color: rgba(217, 217, 217, 1);
    outline: none;
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
            </Input>
        </SloganInputComponent>
    )
}