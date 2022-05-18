import React from "react";
import styled from "styled-components"
import { Navbar } from "../navbar/Navbar";

interface TopSectionProps { }

const TopSectionComponent = styled.div`
background-color: #146EB4;
position: absolute;
width: 100%;
height: 328px;
left: 0px;
top: 0px;
`;

export const TopSection: React.FC<TopSectionProps> = () => {
    return (
        <TopSectionComponent>
            <Navbar />
        </TopSectionComponent>
    )
}