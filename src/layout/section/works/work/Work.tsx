import React from "react";
import { S } from "../worksStyles/WorksStyles";
import { Link } from "../../../../components/Link";

import { Button } from "../../../../components/button/Button";


type WorkPropsType = {
    title: string;
    text: string;
    src: string;
}


export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="" />
                <Button>VIEW PROJECT</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={"#"}>DEMO</Link>
                <Link href={"#"}>CODE</Link>
            </S.Description>
        </S.Work>
    );
};


