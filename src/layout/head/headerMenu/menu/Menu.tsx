import React from "react";
import { S } from "../headerMenuStyles/headerMenuStyles"

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>
        {props.menuItems.map((item:string, index:number)=> {
            return <S.MenuItem key={index}>
                <S.Link href="">
                    {item}
                    <S.Mask>
                        <span>{item}</span>
                    </S.Mask>
                    <S.Mask>
                        <span>{item}</span>
                    </S.Mask>
                </S.Link>
            </S.MenuItem>
        }
        )}
    </ul>
    )
}

