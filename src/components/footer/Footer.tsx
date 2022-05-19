import React from "react";
import styled from "styled-components"
import { FooterInfo } from "../footerinfo/FooterInfo";
import { Horizontal } from "../horizontal/Horizontal";
import { Logo } from "../logo/Logo";
import { Wrapper } from "../wrapper/Wrapper";

interface FooterProps { }

const FooterComponent = styled.div`
background-color: #000000;
color: #ffffff;
height: 40vh;
`;

const InnerFooterContainer = styled.div`
padding-top: 5em;
display: flex;
justify-content: space-between;
`;

const OptionsContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
`;

const Column = styled.div`
font-family: galanogrotesque-r;
width: 19.74%;
`;

const Option = styled.div`
margin-bottom: 30px;
display: flex;
align-items: center;
font-weight: 400;
/* font-size: 18px; */
text {
    cursor: pointer;
&:hover {
    text-decoration: underline;
}
}
`;

const JobCount = styled.div`
background-color: #ffffff;
border-radius: 50%;
height: 19px;
width: 19px;
display: flex;
align-items: center;
justify-content: center;
color: #000000;
margin-left: 5px;
`;

export const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterComponent>
            <Wrapper>
                <InnerFooterContainer>
                    <Logo />
                    <OptionsContainer>
                        <Column>
                            <Option>
                                <text>Contact</text>
                            </Option>
                            <Option>
                                <text>FAQ's</text>
                            </Option>
                        </Column>
                        <Column>
                            <Option>
                                <text>Tutorials</text>
                            </Option>
                            <Option>
                                <text>Blogs</text>
                            </Option>
                        </Column>
                        <Column>
                            <Option>
                                <text>Privacy</text>
                            </Option>
                            <Option>
                                <text>Banned Items</text>
                            </Option>
                        </Column>
                        <Column>
                            <Option>
                                <text>About</text>
                            </Option>
                            <Option>
                                <text>Jobs</text>
                                <JobCount>3</JobCount>
                            </Option>
                        </Column>
                        <Column>
                            <Option>
                                <text>Facebook</text>
                            </Option>
                            <Option>
                                <text>Twitter</text>
                            </Option>
                            <Option>
                                <text>LinkedIn</text>
                            </Option>
                        </Column>
                    </OptionsContainer>
                </InnerFooterContainer>
                <Horizontal />
                <FooterInfo />
            </Wrapper>
        </FooterComponent>
    )
}