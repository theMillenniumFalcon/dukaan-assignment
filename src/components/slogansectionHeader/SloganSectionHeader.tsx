import React from "react";
import styled from "styled-components"
import { SloganInput } from "../sloganinput/SloganInput";
import { Wrapper } from "../wrapper/Wrapper";

interface SloganSectionHeaderProps { }

const HeaderComponent = styled.div`
margin-top: 198px;
width: 65%;
margin-left: auto;
margin-right: auto;
border: 1px solid black;
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

export const SloganSectionHeader: React.FC<SloganSectionHeaderProps> = () => {
    return (
        <Wrapper>
            <HeaderComponent>
                <Heading>Free Slogan maker</Heading>
                <Desc>
                    {" Simply enter a name that describes your business, and get upto 1,000 "}
                    {" relevant slogans for free. "}
                </Desc>
                <SloganInput />
                {/* <Button /> */}
            </HeaderComponent>
        </Wrapper>
    )
}