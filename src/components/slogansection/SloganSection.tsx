import React from "react";
import styled from "styled-components"
import { SloganCard } from "../slogancard/SloganCard";

interface SloganSectionProps { }

const SloganSectionComponent = styled.div`
background-color: #FAFAFA;
padding-bottom: 3em;
margin-bottom: 0px;
`;

export const SloganSection: React.FC<SloganSectionProps> = () => {
    return (
        <SloganSectionComponent>
            <SloganCard />
        </SloganSectionComponent>
    )
}