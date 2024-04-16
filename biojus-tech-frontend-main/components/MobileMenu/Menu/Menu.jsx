import { StyledMenu } from "./styles";
import Link from "next/link";
import linksdata from "../../Navbar/data/linksdata.json";

const Menu = ({open,setOpen, ...props}) => {

    const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            {
                linksdata.map(linkdata => (
                    <Link key={linkdata.id} href={linkdata.path}>
                        <a onClick={() => setOpen(!open)}>{linkdata.name}</a>
                    </Link>
                ))
            }
        </StyledMenu>
    );
}

export default Menu;