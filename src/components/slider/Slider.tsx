import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Slider_Styles";
import './../../styles/Slider.css'

type SlidePropsType = {
    text:string 
    userName:string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
                <S.Text>{props.text}</S.Text>
                <S.Name>@{props.userName}</S.Name>
            </S.Slide>
    )
}
const items = [
    <Slide userName={"Lesha Baldin"}
           text={"This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks."}/>,
    
      <Slide userName={"Mikhaol Pesen'ka"}
             text={"This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks."}/>,
    
      <Slide userName={"Alexandra Kalechits"}
             text={"This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks."}/>,
  ];
  
  export const Slider = () => (
    <S.Slider>
      <AliceCarousel
      infinite
      mouseTracking
      items= {items}
      />
    </S.Slider>
  );















// const items = [
//   {
//     userName: "Lesha Baldin",
//     text: "This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks.",
//   },
//   {
//     userName: "Mikhaol Pesen'ka",
//     text: "This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks.",
//   },
//   {
//     userName: "Alexandra Kalechits",
//     text: "This is an impressive application that solves real user problems. The intuitive interface and extensive functionality make it an indispensable assistant in daily life. The development team has demonstrated true mastery, creating a product that stands out from the competition. I unequivocally recommend this application to anyone looking for an effective solution for their tasks.",
//   },
// ];

// export const Slider = () => (
//   <S.Slider>
//     <AliceCarousel mouseTracking items={items.map((item) => <Slide {...item} />)} />
//   </S.Slider>
// );


// import { S } from "./Slider_Styles";
// import { FlexWrapper } from "../FlexWrapper";


// export const Slider:React.FC =()=>{
//     return(
//         <S.Slider>
//             <FlexWrapper>
            
//             </FlexWrapper>
//             <S.Pagination>
//                <span></span>
//                <span className={"active"}></span>
//                <span></span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };
