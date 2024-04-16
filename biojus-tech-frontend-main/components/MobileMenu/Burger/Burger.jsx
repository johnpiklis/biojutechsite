import { StyledBurger } from "./styles";

const Burger = ({open, setOpen, ...props}) => {

    const isExpanded = open ? true : false;

    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}{...props}>
            <span/>
            <span/>
            <span/>
        </StyledBurger>
    );
}
 
export default Burger;