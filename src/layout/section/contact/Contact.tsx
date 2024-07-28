import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import contactImg from "../../../assets/images/contact.jpg"
import { Form } from "./form/Form";

export const Contact =() => {
    return(
        <StyledContact>
           <SectionTitle>Contact Me</SectionTitle>
           <FlexWrapper align={"center"} justify={"space-around"}>
           <ContactImg src={contactImg} alt="" />
            <Form/>
           </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact=styled.section`

`;

const ContactImg = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  transform: rotate(-90deg);
`;

