import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer =()=> {
    return(
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Vladinir</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"Instagram"}/>
                    </SocialLink>
                </SocialItem>
                
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"Telegram"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"VK"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"IN"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Vladimir Razumovich, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color:#252527;
min-height:20vh;
`;

const Name = styled.span`

`;

const SocialList = styled.ul`
display:flex;
gap:30px;
`;

const SocialLink = styled.a`

`;

const Copyright = styled.small`

`;

const SocialItem = styled.li`

`;