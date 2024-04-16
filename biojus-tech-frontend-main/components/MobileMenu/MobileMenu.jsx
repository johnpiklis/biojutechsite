import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import useOnClickOutside from "../Hooks/useOnClickOutside";
import { useState } from "react";
import { useRef } from "react";
import FocusLock from "react-focus-lock";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "mobile-menu";

    useOnClickOutside(node, () => setOpen(false))

    return (
        <>
            <div ref={node}>
                <FocusLock disabled={!open}>
                    <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
                    <Menu open={open} setOpen={setOpen} id={menuId}/>
                </FocusLock>
            </div>
        </>
    );
}
 
export default MobileMenu;