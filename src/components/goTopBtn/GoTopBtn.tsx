
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from "react";

export const GoTopBtn = () => {

    const [showBtn,setswhowBtn] = useState (false)
    useEffect ( ()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY>400) {
                setswhowBtn (true)
            } else {
                setswhowBtn (false)
            }
        })
    }, [])

    return (
        <>
        {showBtn && (<StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"gotoparrow"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
        </StyledGoTopBtn>)}
        </>
    )
}

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position:fixed;
    right:30px;
    bottom:30px;
`