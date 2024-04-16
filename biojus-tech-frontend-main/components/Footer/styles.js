import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--grey);
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
    padding-top: 250px;
    /* margin-top: 50px; */

    @media(min-width: 1200px){
        clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);
    }
`

export const Container = styled.div`
    width: 80%;
    margin: auto;
`

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8em;
    background-image: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`

export const SubText = styled.p`
    text-align: center;
    font-size: 1.1em;
    margin: 20px 0;
`

export const MainContent = styled.div`
    display: grid;
    margin-top: 40px;
    margin-bottom: 50px;

    @media(min-width: 1199.99px){
        grid-template-rows: 1fr;
        gap: 20px;
    }

    @media(min-width:  1200px){
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
    }
`


export const MapContent = styled.div`
    position: relative;

    img{
        height: 100%;
        min-width: 90% !important;
        max-width: 90% !important;
        z-index: 999;
    }

    :after{
        content: '';
        position: absolute;
        top: -20px;
        right: 0;
        height: 93%;
        width: 70%;
        background: var(--gradient);
        z-index: -999;
    }
`

export const ContactDetailsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 20px 0;
    border-bottom: 1px solid grey;

    @media(min-width:1200px){
        justify-content: center;
    }
`

export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;

    @media(min-width: 1200px){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 75%;
    }
    
`
    
export const ContactDetail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media(min-width: 1200px){
        :nth-child(2){
            margin: 0 20px;
        }
    }
`

export const DetailIcon = styled.span`
    svg{
        height: 50px;
        width: 50px;
    }
`

export const Details = styled.div`
    margin-left: 10px;
`

export const DetailTitle = styled.h4`
    font-family: var(--font-stack-1);
    text-transform: capitalize;
`

export const Detail = styled.p`
    font-family: var(--font-stack-1);
    text-transform: capitalize;
    font-size: 0.9em;
`

export const CopyrightWrapper = styled.div`
`

export const SocailHandles = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`

export const SocialHandle = styled.li`
    svg{
        height: 30px;
        width: 30px;
    }

    :first-child{
        margin-right: 10px;
    }
`

export const Copyright = styled.p`
    text-align: center;
`

