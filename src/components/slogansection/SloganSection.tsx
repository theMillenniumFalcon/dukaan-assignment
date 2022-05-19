import React from "react";
import styled from "styled-components"
import { SloganDisplay } from "../slogandisplay/SloganDisplay";
import { SloganSectionHeader } from "../slogansectionHeader/SloganSectionHeader";
import { Wrapper } from "../wrapper/Wrapper";

interface SloganSectionProps { }

const SloganSectionContainer = styled.div`
background-color: #FFFFFF;
/* border-radius: 8px; */
box-shadow: rgba(26, 24, 30, 0.06);
width: 100%;
height: 80%;
z-index: 99999;
margin-bottom: 3em;
`;

export const SloganSection: React.FC<SloganSectionProps> = () => {
    return (
        <Wrapper>
            <SloganSectionContainer>
                <SloganSectionHeader />
                <SloganDisplay />
            </SloganSectionContainer>
        </Wrapper>
    )
}