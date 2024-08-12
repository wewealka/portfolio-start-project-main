import { S } from "./SkillsStyles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skilladding/Skill";
import { Container } from "../../../components/Container";

const skillData = [
     {
          iconId:"HTML",
          title:"HTML5",
          description:"Profound understanding of HTML, including the use of semantic tags, content structuring, creation of hyperlinks, and embedding multimedia. Ability to apply HTML to build accessible and optimized web pages."
     },

     {
          iconId:"CSS",
          title:"CSS3",
          description:"Comprehensive knowledge of CSS, including proficiency in applying styles to web page elements, implementing responsive design techniques, and leveraging advanced CSS features such as animations, transitions, and media queries. "
     },

     {
          iconId:"React",
          title:"REACT",
          description:"Experience in developing interactive web applications using React, the leading JavaScript library for building user interfaces. Ability to apply the component-based approach, state management, and other key React concepts to build scalable and performant solutions."
     },

     {
          iconId:"TypeScript",
          title:"TYPESCRIPT",
          description:"Proficient in TypeScript, a statically typed superset of JavaScript, with the ability to apply types, interfaces, classes, and other OOP concepts to build reliable and scalable applications. Knowledgeable about TypeScript's syntax, static typing, and developer tools."
     },

     {
          iconId:"StyledComponets",
          title:"STYLED COMPONENTS",
          description:"Ability to create modular, reusable, and dynamic component-level styles using tagged template literals. Knowledge of Styled Components' APIs for styles, props, and theming. Experience integrating it with React projects, leveraging benefits like automatic vendor prefixing and easy composition."
     },

     {
          iconId:"WD",
          title:"WEB DESING",
          description:"Proficiency in end-to-end web design, from conceptualization to implementation. Skilled in crafting visually appealing and user-friendly interfaces using industry-standard tools and techniques."
     }
]

export const Skills = () => {
     return (
          <S.Skills>
               <Container>
                    <SectionTitle>My Skills</SectionTitle>
                    <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                         {skillData.map((s, index)=> {
                              return <Skill iconId={s.iconId} key={index}
                              title={s.title}
                              description={s.description} />
                         })}
                    </FlexWrapper>
               </Container>
          </S.Skills>
     );
};

