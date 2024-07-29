import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

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
               <span></span>
               <span className={"active"}></span>
               <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
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
    font-family: 'Josefin Sans',sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin:22px 0 42px;
    display:inline-block;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color:rgba(255,255,255,0.5);
    border-radius: 20px;

    & + span {
        margin-left: 5px;
    }

    &.active {
        background-color:${theme.colors.accent};
        width:20px;
    }
  }
`;