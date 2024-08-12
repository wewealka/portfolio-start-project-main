import { S } from "./FooterStyles";
import { Icon } from "../../components/Icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";


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

export const Footer =()=> {
    return(
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
            <S.Name>Vladimir</S.Name>

            {socialItemsData.map ((s, index)=>{
                return (
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                     <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                        )
            })}

            <S.Copyright>© 2023 Vladimir Razumovich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

