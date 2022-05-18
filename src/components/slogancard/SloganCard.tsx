import React from "react";
import styled from "styled-components"
import { SloganSectionHeader } from "../slogansectionHeader/SloganSectionHeader";
import { Wrapper } from "../wrapper/Wrapper";

interface SloganCardProps { }

const SloganSectionComponent = styled.div`
background-color: #FFFFFF;
border-radius: 8px;
box-shadow: rgba(26, 24, 30, 0.06);
width: 100%;
height: 80%;
z-index: 99999;
`;

export const SloganCard: React.FC<SloganCardProps> = () => {
    return (
        <Wrapper>
            <SloganSectionComponent>
                <SloganSectionHeader />
            </SloganSectionComponent>
        </Wrapper>
    )
}