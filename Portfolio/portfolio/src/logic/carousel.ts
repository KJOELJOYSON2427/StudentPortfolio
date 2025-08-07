interface ImageCarouselProps {
    images:string;
    alt:string;
}


const images:ImageCarouselProps[] = [
    { images: "/icons/Student.jpg", alt: "Student" },
    { images: "/icons/Developer.jpg", alt: "Developer" },
    { images: "/icons/Engineer.jpg", alt: "Engineer" },
];


export const getImageCarousel:() => ImageCarouselProps[] = ():ImageCarouselProps[] => {
    return images;
}