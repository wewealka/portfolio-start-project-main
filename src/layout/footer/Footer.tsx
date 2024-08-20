import { S } from "./FooterStyles";
import { Icon } from "../../components/Icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import React from "react";


const socialItemsData = [
    {
        iconId:"Instagram"
    },

    {
        iconId:"Telegram"
    },

    {
        iconId:"VK"
    },

    {
        iconId:"IN"
    },
]

export const Footer:React.FC =()=> {
    return(
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
            <S.Name>Vladimir</S.Name>
                <S.SocialList>
            {socialItemsData.map ((s, index)=>{
                return (
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                     <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                        )
            })}
                </S.SocialList>
            <S.Copyright>© 2023 Vladimir Razumovich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

