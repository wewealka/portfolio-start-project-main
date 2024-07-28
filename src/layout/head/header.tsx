import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import { HeaderMenu } from './HeaderMenu';
import {Container} from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home","Skills","Works","Testimony","Contacts"]

export const Header = () => {
    return (
        <StyledHeader> 
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
background-color:rgba(31, 31, 32, 0.9);
padding:20px 0;
position:fixed;
top:0;
right:0;
left:0;
z-index:99999;

`