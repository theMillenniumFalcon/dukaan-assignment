import React from "react";
import styled from "styled-components"
import { Button } from "../button/Button";
import { Logo } from "../logo/Logo";
import { Wrapper } from "../wrapper/Wrapper";

interface NavbarProps { }

const NavbarComponent = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Wrapper>
            <NavbarComponent>
                <Logo />
                <Button />
            </NavbarComponent>
        </Wrapper>
    )
}