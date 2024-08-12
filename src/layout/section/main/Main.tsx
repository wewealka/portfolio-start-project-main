import { S } from './StyledMain';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Glad you could make it</S.SmallText>
                        <S.Name>I am <span>Vladimir Razumovich</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
