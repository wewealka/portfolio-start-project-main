import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./work/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp"
import timer from "../../../assets/images/proj2.webp"
import { Container } from "../../../components/Container";
import { S } from "./worksStyles/WorksStyles";



const worksItems = ["All", "LANDING PAGE", "REACT", "SPA"]

const WorkData = [
    {
        title: "SocialNetwork",
        src: socialImg,
        text:"In the near future, there will be my works there."
    },

    {
        title: "Timer",
        src: timer,
        text:"In the near future, there will be my works there."
    }
]

export const Works = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {WorkData.map((w)=> {
                        return <Work title={w.title}
                                src={w.src}
                                text={w.text} />
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

