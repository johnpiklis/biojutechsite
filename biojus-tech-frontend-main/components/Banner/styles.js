import styled from "styled-components";


export const Wrapper = styled.div`
`
export const Container = styled.div`
    width: 80%;
    margin: auto;
`

export const BannerText = styled.h3`
    position: relative;
    text-align: center;
    font-size: 1.8em;
    text-transform: capitalize;
    background-image: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    /* &::before{
        content: '';
        position: absolute;
        left: 25%;
        top: 35%;
        height: 10px;
        width:10px;
        border-radius: 50%;
        background: var(--gradient);
    } */

    /* &::after{
        content: '';
        position: absolute;
        right: 25%;
        top: 40%;
        height: 10px;
        width:10px;
        border-radius: 50%;
        background: var(--gradient);
    } */
`