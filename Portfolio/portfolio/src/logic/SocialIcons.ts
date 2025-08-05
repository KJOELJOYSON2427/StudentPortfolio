import githubIcon from "../../public/icons/github.png";
import linkedinIcon from "../../public/icons/linkedn.png";
import facebookIcon from "../../public/icons/facebook.png";
import type { StaticImageData } from 'next/image';

type SocialIcon ={
    name:string;
    url:string;
    alt:string;
    icon:StaticImageData;
}


const socialIcons:SocialIcon[]=[
    {
        name:"Facebook",
        url:"https://www.facebook.com",
        alt:"FaceBook Icon",
        icon:facebookIcon.src ? facebookIcon : ({} as StaticImageData) // Ensure compatibility with next/image
    },
    {
        name:"linkedin",
        url:"https://www.linkedin.com/in/joeljoyson",
        alt:"LinkedIn Icon",
        icon:linkedinIcon.src? linkedinIcon : ({} as StaticImageData) // Ensure compatibility with next/image
    },
    {
        name:"GitHub",
        url:"https://www.github.com/joeljoyson",
        alt:"GitHub Icon",
        icon:githubIcon.src ? githubIcon : ({} as StaticImageData) // Ensure compatibility with next/image
    }
]
type SocialFunction = () => SocialIcon[];
export  const socialIconData:SocialFunction=() :SocialIcon[]=>{
    return socialIcons;
}