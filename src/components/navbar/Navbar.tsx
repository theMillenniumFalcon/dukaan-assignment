import React from "react";
import styled from "styled-components"
import { Logo } from "../logo/Logo";
import { Wrapper } from "../wrapper/Wrapper";

interface NavbarProps { }

const NavbarComponent = styled.div`
padding-top: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Right = styled.div`
display: flex;
align-items: center;
`;

const Button = styled.div`
height: 30px;
width: 150px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px 24px;
background: #ffffff;
border-radius: 4px;
cursor: pointer;
text {
    color: #146EB4;
    font-family: galanogrotesque-m;
    font-weight: 400;
font-size: 18px;
}
`;

const Link = styled.div`
cursor: pointer;
color: #ffffff;
font-family: galanogrotesque-r;
font-weight: 400;
font-size: 18px;
margin-right: 2em;
&:hover {
    text-decoration: underline;
}
`;

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Wrapper>
            <NavbarComponent>
                <Logo />
                <Right>
                    <Link>Sign In</Link>
                    <Button>
                        <text>Dukaan for PC</text>
                    </Button>
                </Right>
            </NavbarComponent>
        </Wrapper>
    )
}