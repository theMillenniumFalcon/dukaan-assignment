import React from "react";
import styled from "styled-components"
import { ProductCards } from "../productcards/ProductCards";
import { Wrapper } from "../wrapper/Wrapper";

interface FreeProductsSectionProps { }

const FreeProductsSectionComponent = styled.div`
background-color: #ffffff;
`;

const Heading = styled.div`
font-family: galanogrotesque-s;
font-size: 28px;
padding-top: 2.5em;
`;

export const FreeProductsSection: React.FC<FreeProductsSectionProps> = () => {
    return (
        <FreeProductsSectionComponent>
            <Wrapper>
                <Heading>
                    {" Try our other free products"}
                </Heading>
                <ProductCards />
            </Wrapper>
        </FreeProductsSectionComponent>
    )
}