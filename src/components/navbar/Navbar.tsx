import React from "react";
import styled from "styled-components"
import { Logo } from "../logo/Logo";
import { Wrapper } from "../wrapper/Wrapper";

interface NavbarProps { }

const Container = styled.div`
background-color: #146EB4;
height: 45vh;
`;

const NavbarComponent = styled.div`
padding-top: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const SectionUpper = styled.div`
margin-top: 6em;
padding-top: 5em;
width: 65%;
margin-left: auto;
margin-right: auto;
width: 100%;
background-color: #FFFFFF;
`;

const Heading = styled.div`
font-family: galanogrotesque-s;
font-size: 28px;
`;

const Header = styled.div`
width: 65%;
margin-left: auto;
margin-right: auto;
`;

const Desc = styled.p`
font-family: galanogrotesque-r;
color: rgba(77, 77, 77, 1);
margin-top: 1em;
font-size: 16px;
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
        <Container>
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


                <SectionUpper>
                    <Header>
                        <Heading>Free Slogan maker</Heading>
                        <Desc>
                            {" Simply enter a name that describes your business, and get upto 1,000 "}
                            {" relevant slogans for free. "}
                        </Desc>
                    </Header>
                </SectionUpper>
            </Wrapper>
        </Container>
    )
}