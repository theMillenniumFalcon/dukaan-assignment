import React from "react";
import styled from "styled-components"
import { Wrapper } from "../wrapper/Wrapper";

interface FooterProps { }

const FooterComponent = styled.div`
background-color: #000000;
height: 40vh;
`;

export const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterComponent>
            <Wrapper>
                
            </Wrapper>
        </FooterComponent>
    )
}