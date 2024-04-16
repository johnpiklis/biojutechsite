import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 20px 0;
`

export const Container = styled.div`
    width: 80%;
    margin: auto;

    h3{
        font-size: 1.8em;
        text-align: center;

        span{
            background-image: var(--gradient);
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media(min-width: 1200px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-top: 50px;
    }
`

export const Content = styled.div`
    padding: 20px 30px;
    padding-right: 40px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    h4{
        font-size: 1.4em;
        margin: 7px 0;
        background-image: var(--gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    @media(max-width: 1199.99px){
        order: 1;
    }

    @media(min-width: 1200px){
        width: 40%;
    }
`

export const ContentImg = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    position: relative;
    width: 100%;
    height: 300px;

    @media(max-width: 1199.99px){
        box-shadow: none;
    }

    @media(min-width: 1200px){
        top: 80px;
        left: -33px;
        width: 40%;
        height: 300px;
    }
`