import Link from "next/link";
import linksdata from "./data/linksdata.json";
import { StyledNavList } from "./styles";


const NavList = () => {
    return (
        <StyledNavList>
            <ul>
                {
                    linksdata.map(linkdata =>(
                        <li key={linkdata.id}>
                            <Link href={linkdata.path}>
                                <a>{linkdata.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </StyledNavList>
    );
}
 
export default NavList;