import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

import { Container } from "../../../components/Container";
import { S } from "../skills/SkillsStyles";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"doubleqoutes"} />
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

 ${S.IconWrapper} {
    margin:40px 0 80px;
 }

`;