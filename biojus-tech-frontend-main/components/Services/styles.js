import styled from "styled-components";


export const Wrapper = styled.div`
    background: var(--grey);
    padding: 200px 0;
    clip-path: polygon(0 18%, 100% 0%, 100% 86%, 0% 100%);

    @media(min-width: 1200px){
        clip-path: polygon(0 23%, 100% 0, 100% 81%, 0 100%);
    }

`

export const Container = styled.div`
    width: 80%;
    margin: auto;
`

export const SectionTitle = styled.h3`
    margin: 30px 0;
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

export const ServicesWrapper = styled.div`
    margin: 20px 0;

    @media(min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
`

export const ServiceCard = styled.div`
    background: var(--white);
    padding: 30px;
    box-shadow: var(--box-shadow);
    transition: box-shadow 0.3s ease;
    margin-bottom: 20px;

    &:hover{
        box-shadow: var(--box-shadow-hover);
    }

    @media(min-width: 1200px){
        margin: 0;
    }
`

export const CardIcon = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    span{
        svg{
            height: 50px;
            width: 50px;
        }
    }
`

export const CardTitle = styled.h3`
    text-align: center;
    margin: 10px 0;
`

export const CardBody = styled.p``