import React from "react";
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
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

const StyledMain = styled.section`
   background-color:#1F1F20;
   display:flex;
   height:1024px;
`

const PhotoWrapper = styled.div`
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

        @media ${theme.media.mobile} {
            width:314px;
            height:414px;
            top: -17px;
            left: 20px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 400px;
    object-fit:cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width:310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    text-align: left;
    ${font({family:"'Josefin Sans',sans-serif", weight:400, Fmax: 27, Fmin:20 })}
`

const Name = styled.h2`
    text-align: left;
    ${font({family:"'Josefin Sans',sans-serif", weight:700, Fmax: 50, Fmin:26 })}
    letter-spacing: 0.03em;
    margin:10px 0;

    span {
        position:relative;
        z-index:0;
        white-space: nowrap;

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
    @media ${theme.media.mobile} {
        margin:15px 0 22px;
    }
`

const SmallText = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align:left;    
    
`