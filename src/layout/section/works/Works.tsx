import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./work/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp"
import timer from "../../../assets/images/proj2.webp"
import { Container } from "../../../components/Container";
import { S } from "./worksStyles/WorksStyles";
import { useState } from "react";
import { TabStatusType } from "./work/TabMenu";




const tabsItems:Array<{status:TabStatusType,title:string}> = [
    {
        title:"All",
        status:"all"
    },

    {
        title:"LANDING PAGE",
        status:"landing"
    },

    {
        title:"REACT",
        status:"react"
    },

    {
        title: "SPA",
        status:"spa"
    },
]

const worksData = [
    {
        title: "SocialNetwork",
        src: socialImg,
        text:"In the near future, there will be my works there.",
        type: "spa"
    },

    {
        title: "Timer",
        src: timer,
        text:"In the near future, there will be my works there.",
        type: "react"
    }
]

export const Works:React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState ("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks= worksData.filter (work => work.type === "landing")
    };
    if (currentFilterStatus === "react") {
        filteredWorks= worksData.filter (work => work.type === "react")
    };
    if (currentFilterStatus === "spa") {
        filteredWorks= worksData.filter (work => work.type === "spa")
    };

    function changeFilterStatus  (value:TabStatusType) {
        setCurrentFilterStatus (value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {filteredWorks.map((w)=> {
                        return <Work title={w.title}
                                src={w.src}
                                text={w.text} />
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

