import React from "react";
import styled from "styled-components"

interface SloganFooterProps { }

const SloganFooterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
padding-bottom: 30px;
`;

const Left = styled.div`
`;

const Center = styled.div`
font-family: galanogrotesque-r;
font-weight: 400;
font-size: 14px;
color: #146EB4;
display: flex;
align-items: center;
`;

const Right = styled.div`
cursor: pointer;
display: flex;
align-items: center;
font-weight: 400;
font-size: 14px;
text {
    font-family: galanogrotesque-r;
    font-weight: 400;
    font-size: 14px;
    color: #146EB4;
    text-align: right;
    margin-right: 2px;
}
`;

const CurrentPage = styled.div`
background-color: #146EB4;
border-radius: 50%;
height: 17px;
width: 17px;
display: flex;
align-items: center;
justify-content: center;
color: #ffffff;
margin-right: 10px;
cursor: pointer;
`;

const Page = styled.div`
margin-right: 10px;
cursor: pointer;
`;

export const SloganFooter: React.FC<SloganFooterProps> = () => {
    return (
        <SloganFooterContainer>
            <Left></Left>
            <Center>
                <CurrentPage>1</CurrentPage>
                <Page>2</Page>
                <Page>3</Page>
                <Page>...</Page>
                <Page>21</Page>
            </Center>
            <Right>
                <text>Next</text>
                <img src="assets/icons/arrow.svg" alt="" />
            </Right>
        </SloganFooterContainer>
    )
}