import  React from 'react';
import { S } from '../headerMenuStyles/headerMenuStyles';
import { Menu } from '../menu/Menu';



export const DesktopMenu:React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu/>
        </S.DesktopMenu>
    );
};



