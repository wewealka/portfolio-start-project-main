import  React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';

const items = ["Home","Skills","Works","About me","Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
           <Menu menuItems={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
background-color: gray;
display: flex;
justify-content:space-between;
`