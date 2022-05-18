import React from "react";
import styled from "styled-components"

interface LogoProps { }

const LogoComponent = styled.div``;

export const Logo: React.FC<LogoProps> = () => {
    return (
        <LogoComponent>
            <img src="assets/logo/logo.svg" alt="" />
        </LogoComponent>
    )
}