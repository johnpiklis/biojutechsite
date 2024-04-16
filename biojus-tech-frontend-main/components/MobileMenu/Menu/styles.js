import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--grey);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 1199.99px) {
        width: 100%;
    }

    a {
        font-family: var(--font-stack-2);
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: var(--black);
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 1199.99px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: var(--purple);
        }
    }
`