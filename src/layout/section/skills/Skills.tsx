import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "../skilladding/Skill";

export const Skills = () => {
    return(
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
            <Skill iconId={"HTML"} 
                    title="HTML5" 
                    description={"Profound understanding of HTML, including the use of semantic tags, content structuring, creation of hyperlinks, and embedding multimedia. Ability to apply HTML to build accessible and optimized web pages."}/>
            <Skill iconId={"CSS"} 
                    title="CSS3" 
                    description={"Comprehensive knowledge of CSS, including proficiency in applying styles to web page elements, implementing responsive design techniques, and leveraging advanced CSS features such as animations, transitions, and media queries. "}/>
               <Skill iconId={"React"} 
                    title="REACT" 
                    description={"Experience in developing interactive web applications using React, the leading JavaScript library for building user interfaces. Ability to apply the component-based approach, state management, and other key React concepts to build scalable and performant solutions."}/>
               <Skill iconId={"TypeScript"} 
                    title="TYPESCRIPT" 
                    description={"Proficient in TypeScript, a statically typed superset of JavaScript, with the ability to apply types, interfaces, classes, and other OOP concepts to build reliable and scalable applications. Knowledgeable about TypeScript's syntax, static typing, and developer tools."}/>
               <Skill iconId={"StyledComponets"} 
                    title="STYLED COMONENTS" 
                    description={"Ability to create modular, reusable, and dynamic component-level styles using tagged template literals. Knowledge of Styled Components' APIs for styles, props, and theming. Experience integrating it with React projects, leveraging benefits like automatic vendor prefixing and easy composition."}/>
               <Skill iconId={"WD"} 
                    title="WEB DESING" 
                    description={"Proficiency in end-to-end web design, from conceptualization to implementation. Skilled in crafting visually appealing and user-friendly interfaces using industry-standard tools and techniques."}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color:#8f3f3f;
min-height:100vh;
`