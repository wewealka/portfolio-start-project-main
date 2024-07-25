import React from "react";
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
    <StyledMain>
       <FlexWrapper align={"center"} justify={"space-around"}>
       <div>
            <span>Glad you could make it</span>
            <Name>I am Vladimir Razumovich</Name>
            <MainTitle>A Web Developer</MainTitle>
        </div>
        <Photo src={photo} alt="" />
       </FlexWrapper>
    </StyledMain>
    );
};

const StyledMain = styled.div`
   min-height:100vh; 
   background-color:#252527;
`;
const Photo = styled.img`
    width: 350px;
    height: 400px;
    object-fit:cover;
`;

const MainTitle = styled.h1`
color:white;
`
const Name = styled.h2`
color:white;
`