import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/Icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";

type SkillPropsType ={
    iconId: string;
    title:string;
    description:string;
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId }/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div `
width:380px;
padding: 62px 20px 40px; 
`;

const IconWrapper =styled.div`
    position:relative;

    &::before{
        content:"";
        display:inline-block;
        width: 80px;
        height:80px;
        background-color: #FFFFFF1A;
        transform:rotate(45deg) translate(-50%,-50%);

        position:absolute;
        left:50%;
        top:50%;
        transform-origin: left top;

    }
`;



const SkillTitle = styled.h3 `
    margin: 70px 0 15px;
    text-transform: uppercase;
`;

const SkillText = styled.p `
    text-align:center;
`;

