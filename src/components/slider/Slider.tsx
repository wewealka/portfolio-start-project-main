import { S } from "./Slider_Styles";
import { FlexWrapper } from "../FlexWrapper";


export const Slider:React.FC =()=>{
    return(
        <S.Slider>
            <FlexWrapper>
            <S.Slide>
                <S.Text>This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks.</S.Text>
                <S.Name>@Lesha Baldin</S.Name>
            </S.Slide>
            </FlexWrapper>
            <S.Pagination>
               <span></span>
               <span className={"active"}></span>
               <span></span>
            </S.Pagination>
        </S.Slider>
    );
};
