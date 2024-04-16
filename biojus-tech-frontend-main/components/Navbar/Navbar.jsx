import useMatchMedia from '../Hooks/useMatchMedia';
import NavList from './NavList';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Container, Nav, Logo } from './styles';

const Navbar = () => {

    const isDesktopScreen = useMatchMedia('(min-width: 1200px)', true)
    const isMobileScreen = useMatchMedia('(max-width: 1199.99px)', true)

    return (
            <Container>
                <Nav>
                    <Logo>
                        <h5>Logo</h5>
                    </Logo>
                    {isDesktopScreen && (<NavList/>)}
                    {isMobileScreen && (<MobileMenu/>)}
                </Nav>
            </Container>
    );
}
 
export default Navbar;

