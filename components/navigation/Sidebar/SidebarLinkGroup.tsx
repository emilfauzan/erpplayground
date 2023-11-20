import { SidebarLinkGroup } from "@/interface/typings";
import { useState } from 'react'

const SidebarLinkGroup = ({ children, activeCondition }: SidebarLinkGroup) => {
    const [open, setOpen] = useState<boolean>(activeCondition);

    const handleClick = () => {
        setOpen(!open);
    };

    return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup