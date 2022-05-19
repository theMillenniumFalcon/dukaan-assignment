import React from "react";
import styled from "styled-components";

interface FooterInfoProps { }

const FooterInfoContainer = styled.div`
padding-top: 20px;
padding-bottom: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: galanogrotesque-r;
`;

const Left = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
`;

const Right = styled.div`
display: flex;
align-items: center;
font-weight: 400;
font-size: 14px;
line-height: 20px;
img {
    margin-left: 8px;
}
`;

export const FooterInfo: React.FC<FooterInfoProps> = () => {
    return (
        <FooterInfoContainer>
            <Left>
                Dukaan 2020, All rights reserved.
            </Left>
            <Right>
                Made in <img src="assets/frame/frame.png" alt="" />
            </Right>
        </FooterInfoContainer>
    )
}