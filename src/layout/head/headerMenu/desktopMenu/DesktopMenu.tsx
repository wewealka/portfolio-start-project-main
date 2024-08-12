import  React from 'react';
import { S } from '../headerMenuStyles/headerMenuStyles';
import { Menu } from '../menu/Menu';



export const DesktopMenu:React.FC <{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};



