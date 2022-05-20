import React from "react";
import styled from "styled-components"
import { slogans } from "../../data/data";
import { SloganFooter } from "../sloganfooter/SloganFooter";

interface SloganDisplayProps { }

const SloganDisplayContainer = styled.div`
margin-top: 30px;
width: 85%;
margin-left: auto;
margin-right: auto;
`;

const Heading = styled.div`
width: 77%;
margin-left: auto;
margin-right: auto;
display: flex;
align-items: center;
justify-content: space-between;
text {
    font-family: galanogrotesque-s;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
}
`;

const Button = styled.div`
border: 1px solid #146EB4;
height: 20px;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px 24px;
border-radius: 4px;
cursor: pointer;
font-family: galanogrotesque-s;
font-weight: 400;
font-size: 14px;
color: #146EB4;
`;

const SloganResult = styled.div`
margin-top: 30px;
`;

const Slogans = styled.div`
width: 77%;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(2, minmax(0, 1fr));
margin-left: auto;
margin-right: auto;
`;

const Result = styled.div`
height: 50px;
background: #F2F2F2;
border-radius: 4px;
display: flex;
align-items: center;
font-family: galanogrotesque-r;
font-weight: 400;
font-size: 16px;
padding-left: 15px;
padding-right: 15px;
cursor: pointer;
`;

const Horizontal = styled.div`
margin-top: 50px;
height: 1px;
width: 100%;
border-width: 0;
color: #D9D9D9;
background-color: #D9D9D9;
`;

const Click = styled.div`
cursor: default;
margin-top: 85px;
margin-left: 5px;
position: absolute;
font-family: galanogrotesque-r;
background: #4D4D4D;
display: flex;
align-items: center;
justify-content: center;
color: #ffffff;
border-radius: 4px;
height: 28px;
width: 100px;
font-weight: 400;
font-size: 14px;
`;

const Clicked = styled.div`
cursor: default;
margin-top: 160px;
margin-left: 5px;
position: absolute;
font-family: galanogrotesque-r;
background: #4D4D4D;
display: flex;
align-items: center;
justify-content: center;
color: #ffffff;
border-radius: 4px;
height: 28px;
width: 100px;
font-weight: 400;
font-size: 14px;
`;

export const SloganDisplay: React.FC<SloganDisplayProps> = () => {
    return (
        <SloganDisplayContainer>
            <Heading>
                <text>{" We have generated 1,023 slogans for “cozy” "}</text>
                <Button>Download All</Button>
            </Heading>
            <SloganResult>
                <Click>Click to copy</Click>
                <Clicked>Copied!</Clicked>
                <Slogans>
                    {slogans.map((slogan) => !slogan ? null : (
                        <Result key={slogan.id}
                            onClick={() => navigator.clipboard.writeText(slogan.desc)}
                        >
                            {slogan.desc}
                        </Result>
                    ))}
                </Slogans>
            </SloganResult>
            <Horizontal />
            <SloganFooter />
        </SloganDisplayContainer>
    )
}