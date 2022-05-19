import React from "react";
import styled from "styled-components";

interface HorizontalProps { }

const HorizontalContainer = styled.div`
height: 1px;
width: 100%;
border-width: 0;
color: #FFFFFF;
opacity: 20%;
background-color: #FFFFFF;
`;

export const Horizontal: React.FC<HorizontalProps> = () => {
    return (
        <HorizontalContainer />
    )
}