import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider =()=>{
    return(
        <StyledSlider>
            <FlexWrapper>
            <Slide>
                <Text>This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks.</Text>
                <Name>@Lesha Baldin</Name>
            </Slide>
            </FlexWrapper>
            <Pagination>
               <span></span><span></span><span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border:1px solid red;
    max-width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;

const Slide = styled.div`
    text-align:center;
`;

const Text = styled.p`

`;

const Name = styled.span`

`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: deeppink;
  }
`;