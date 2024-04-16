import styled from 'styled-components'

export const StyledContactForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & form{
        width: 100%;
        input, textarea, button{
            display: block;
            width: 100%;
            padding: 10px;
            margin: 25px 0;
        }

        input,textarea{
            background: transparent;
            border: 1px solid var(--black);
        }

        input::placeholder, textarea::placeholder{
            font-family: var(--font-stack-1);
            text-transform: capitalize;
        }

        input:first-child{
            margin-top: 0;
        }

        button{
            font-family: var(--font-stack-1);
            font-size: 1em;
            text-transform: capitalize;
            color: var(--white);
            background: var(--gradient);
            border: none;
            margin-bottom: 0
        }

        @media(min-width: 1200px){
            width: 80%;
        }
    }
`