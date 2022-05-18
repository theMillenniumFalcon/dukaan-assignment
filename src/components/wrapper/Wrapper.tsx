import React from "react";
import styled from "styled-components"

interface WrapperProps {
    children: any
}

const MainWrapper = styled.div`
margin-left: auto;
margin-right: auto;
width: 1120px;
`;

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    );
};