import styled from 'styled-components'


export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`

export const Nav = styled.div`
    /* position: relative; */
    margin: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background: transparent;
    padding: 10px 0;

    @media(min-width: 1200px){
        width: 80%;
    }
`

export const Logo = styled.div`

`

export const StyledNavList = styled.div`
    & ul{
        display: flex;

        li{
            list-style: none;
            margin: 0 10px;

            a{
                color: var(--white);
                text-decoration: none;
                text-transform: capitalize;
            }
        }
    }

`