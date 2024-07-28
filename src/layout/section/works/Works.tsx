import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./work/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp"
import timer from "../../../assets/images/proj2.webp"
import { Container } from "../../../components/Container";



const worksItems = ["All", "LANDING PAGE", "REACT", "SPA"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"SocialNetwork"}
                        src={socialImg}
                        text={"In the near future, there will be my works there."} />

                    <Work title={"Timer"}
                        src={timer}
                        text={"In the near future, there will be my works there."} />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`