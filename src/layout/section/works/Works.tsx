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
import { AnimatePresence, motion } from "framer-motion"



const tabsItems: Array<{ status: TabStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },

    {
        title: "LANDING PAGE",
        status: "landing"
    },

    {
        title: "REACT",
        status: "react"
    },

    {
        title: "SPA",
        status: "spa"
    },
]

const worksData = [
    {
        title: "SocialNetwork",
        src: socialImg,
        text: "In the near future, there will be my works there.",
        type: "spa",
        id: 1
    },

    {
        title: "Timer",
        src: timer,
        text: "In the near future, there will be my works there.",
        type: "react",
        id: 2
    },

    {
        title: "SocialNetwork",
        src: socialImg,
        text: "In the near future, there will be my works there.",
        type: "spa",
        id: 3
    },

    {
        title: "Timer",
        src: timer,
        text: "In the near future, there will be my works there.",
        type: "react",
        id: 4
    },

    {
        title: "SocialNetwork",
        src: socialImg,
        text: "In the near future, there will be my works there.",
        type: "spa",
        id: 5
    },

    {
        title: "Timer",
        src: timer,
        text: "In the near future, there will be my works there.",
        type: "react",
        id: 6
    },


]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    };
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    };
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    };

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width:"400px", flexGrow: 1, maxWidth:"540px"}}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work 
                                        title={w.title}
                                        src={w.src}
                                        text={w.text} 
                                        key={w.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

