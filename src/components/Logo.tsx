import React from 'react';
import { Icon } from './Icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const Logo:React.FC = () => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={'mainicon'} />
        </a>
    )
};