import React from 'react';
import { Logo } from '../../components/Logo';
import {Container} from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './headerStyles/HeaderStyles';


const items = ["Home","Skills","Works","Testimony","Contacts"]

export const Header: React.FC  = () => {

    const [width,setWidth]=React.useState(window.innerWidth);
    const breakepoint = 769;

    React.useEffect ( ()=> {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize",handleWindowResize);
        return  () => window.removeEventListener ("resize",handleWindowResize);
    }, []);


    return (
        <S.Header> 
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakepoint ? <MobileMenu menuItems={items}/>:<DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


