import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";

export const Slogan = ()=>{
    return(
        <StyledSlogan>
            <SectionTitle>I Am Availabe For Freelance</SectionTitle>
            <Button>HIRE ME</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
min-height:30vh;
background-color:#ffd4f0;
`;