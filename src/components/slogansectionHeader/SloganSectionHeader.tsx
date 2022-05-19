import React from "react";
import styled from "styled-components"
import { SloganInput } from "../sloganinput/SloganInput";

interface SloganSectionHeaderProps { }

const HeaderComponent = styled.div`
margin-top: 198px;
width: 65%;
margin-left: auto;
margin-right: auto;
/* border: 1px solid black; */
`;

const Heading = styled.div`
font-family: galanogrotesque-s;
font-size: 28px;
`;

const Desc = styled.p`
font-family: galanogrotesque-r;
color: rgba(77, 77, 77, 1);
margin-top: 1em;
font-size: 16px;
`;

const Button = styled.div`
margin-top: 50px;
height: 30px;
width: 170px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px 24px;
background: #146EB4;
border-radius: 4px;
cursor: pointer;
text {
    color: #ffffff;
    font-family: galanogrotesque-r;
    font-weight: 400;
    font-size: 18px;
}
`;

const Horizontal = styled.div`
margin-top: 50px;
height: 1px;
width: 100%;
border-width: 0;
color: #D9D9D9;
background-color: #D9D9D9;
`;

export const SloganSectionHeader: React.FC<SloganSectionHeaderProps> = () => {
    return (
        <HeaderComponent>
            <Heading>Free Slogan maker</Heading>
            <Desc>
                {" Simply enter a name that describes your business, and get upto 1,000 "}
                {" relevant slogans for free. "}
            </Desc>
            <SloganInput />
            <Button>
                <text>Generate slogans</text>
            </Button>
            <Horizontal />
        </HeaderComponent>
    )
}