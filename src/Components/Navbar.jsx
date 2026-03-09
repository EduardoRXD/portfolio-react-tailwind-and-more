import { useEffect, useState, useRef } from "react";
import TextButton from "./textButton";
import Button from "./Button";

function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [top, setTop] = useState(0);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setTop(getComputedStyle(navRef.current).top);
            setPrevScrollPos(scrollY);
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
    }, [scrollY]);

    return <header>
        <div className="Navbar w-full bg-[rgb(243,243,243)]/90 flex justify-between items-center px-5 fixed top-0 z-10 backdrop-blur min-h-18.5" ref={navRef}
        style={{ top: scrollY < prevScrollPos ? `${Math.min(0, parseInt(top) + (prevScrollPos - scrollY) / 3)}px` : `${Math.max(-80, parseInt(top) - (scrollY - prevScrollPos) / 3)}px`}}>

            <div className="Logo">
                <a href="#">
                    <img src="/portfolio-react-tailwind-and-more/Logo.png" alt="Logo" />
                </a>
            </div>

            <nav class="menu">
                <ul>
                    <li class="inline-block px-10"><TextButton text="Home" ref={"#top"}/></li>
                    <li class="inline-block px-10"><TextButton text="About Me" ref={"#about"}/></li>
                    <li class="inline-block px-10"><TextButton text="Projects" ref={"#projects"}/></li>
                </ul>
            </nav>

            <div>
                <a href="#contact">
                    <Button text="Contact Info" paddingX="px-10" paddingY="py-2" />
                </a>
            </div>
        </div>
    </header>
}

export default Navbar