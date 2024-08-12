import React, { useState } from 'react';
import { S } from "../headerMenuStyles/headerMenuStyles"
import { Menu } from '../menu/Menu';



export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {

    const [menuIsopnen, setmenuIsopnen ] = useState (false)
    const onBurgerBtnClick = () => {setmenuIsopnen (!menuIsopnen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsopnen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsopnen} onClick={()=>{setmenuIsopnen (false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu >
    );
};

