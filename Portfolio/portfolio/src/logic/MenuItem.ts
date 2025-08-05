


export interface MenuItem{
    id:string;
    label:string;
    href:string;
}



const MenuItems:MenuItem[]=[
    {
        id:"1",
        label:"Home",
        href:"/"
    },
    {
        id:"2",
        label:"About",
        href:"/about"
    },
    {
        id:"3",
        label:"Projects",
        href:"/projects"
    },
    {
        id:"4",
        label:"Contact",
        href:"/contact"
    }
]

export const getMenuItems=():MenuItem[]=>{
    return MenuItems;
}
