import React from "react";
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
    <StyledMain>
        <Container> 
            <FlexWrapper align={"center"} justify={"space-between"}>
                <div>
                    <SmallText>Glad you could make it</SmallText>
                    <Name>I am <span>Vladimir Razumovich</span></Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <PhotoWrapper>
                    <Photo src={photo} alt="" />
                </PhotoWrapper>
        </FlexWrapper>
        </Container>
    </StyledMain>
    );
};

const StyledMain = styled.div`
   background-color:#1F1F20;
   display:flex;
   height:1024px;
`

const Photo = styled.img`
    width: 350px;
    height: 400px;
    object-fit:cover;
    
`
const PhotoWrapper =styled.div`
    position:relative;
    z-index:0;
    
    &::before {
        content:"";
        width:360px;
        height:470px;
        border: 7px solid ${theme.colors.accent};
        position:absolute;
        top: -24px;
        left: 24px;
        z-index:-1;
    }
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
text-align: left;
`

const Name = styled.h2`
    font-family:'Josefin Sans',sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.03em;
    margin:10px 0;

    span {
        position:relative;
        z-index:0;

        &::before {
            content:"";
            display:inline-block;
            width:100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position:absolute;
            bottom:0;
            z-index:-1;
        }
    }
`

const SmallText = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align:left;    
`