import { S } from './StyledMain';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Glad you could make it</S.SmallText>
                        <S.Name>I am <span>Vladimir Razumovich</span></S.Name>
                        <S.MainTitle>
                            <p>
                                A Web Developer.
                                A Frontend Dev.
                            </p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Frontend Dev.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="" />
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


