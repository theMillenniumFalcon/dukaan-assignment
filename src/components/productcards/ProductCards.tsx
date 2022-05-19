import React from "react";
import styled from "styled-components"

interface ProductCardsProps { }

const ProductCardsComponent = styled.div`
margin-top: 2em;
padding-bottom: 2em;
display: flex;
flex-wrap: wrap;
`;

const Card = styled.div`
cursor: pointer;
height: 285px;
width: 352px;
margin-right: 19px;
margin-bottom: 30px;
`;

const Image = styled.div`
img {
    width: 100%;
    height: 70%;
}
`;

const Heading = styled.div`
margin-top: 7px;
font-size: 18px;
font-family: galanogrotesque-s;
`;

const Body = styled.div`
margin-top: 5px;
font-family: galanogrotesque-r;
font-size: 14px;
`;

export const ProductCards: React.FC<ProductCardsProps> = () => {
    return (
        <ProductCardsComponent>
            <Card>
                <Image>
                    <img src="assets/products/1.png" alt="" />
                </Image>
                    <Heading>{" Privacy Policy Generator "}</Heading>
                    <Body>
                        {" Stock your store with 100s of products and start  "}
                        {" selling to customers in minutes, without the hassle "}
                        {" of inventory or packaging. "}
                    </Body>
            </Card>
            <Card>
                <Image>
                    <img src="assets/products/2.png" alt="" />
                </Image>
                    <Heading>{" Terms & Conditions Generator "}</Heading>
                    <Body>
                    {" Stock your store with 100s of products and start  "}
                        {" selling to customers in minutes, without the hassle "}
                        {" of inventory or packaging. "}
                    </Body>
            </Card>
            <Card>
                <Image>
                    <img src="assets/products/3.png" alt="" />
                </Image>
                    <Heading>{" Domain Name Generator "}</Heading>
                    <Body>
                    {" Stock your store with 100s of products and start  "}
                        {" selling to customers in minutes, without the hassle "}
                        {" of inventory or packaging. "}
                    </Body>
            </Card>
            <Card>
                <Image>
                    <img src="assets/products/4.png" alt="" />
                </Image>
                    <Heading>{" Invoice Generator "}</Heading>
                    <Body>
                    {" Stock your store with 100s of products and start  "}
                        {" selling to customers in minutes, without the hassle "}
                        {" of inventory or packaging. "}
                    </Body>
            </Card>
        </ProductCardsComponent>
    )
}