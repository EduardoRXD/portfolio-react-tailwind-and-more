import "./Home.css"
import Navbar from "../Components/Navbar"
import Interface from "../Components/Interface"
import Flex from "../Components/Flex"
import EmojiClick from "../Components/EmojiClick"
import { useState } from "react";
import SocialMediaBtn from "../Components/SocialMediaBtn"
import TextButton from "../Components/textButton"
import ProjectsBtn from "../Components/ProjectsBtn"

function Home() {
    const [emojiDivs, setEmojiDivs] = useState([]);

    const handleClick = (e) => {
        const newEmoji = <EmojiClick key={emojiDivs.length} x={e.clientX} y={e.clientY} />;
        setEmojiDivs([...emojiDivs, newEmoji]);
    };

    return (
        <>
            <Navbar />
            <main>
                <section className="top pt-25 px-[4%] py-5">
                    <Interface>
                        <Flex>
                            <div className="text w-122 flex-1">
                                <h1 class="text-5xl font-bold leading-15">Ideas that don't fit into templates.</h1>
                                <p class="text-3xl max-w-150 my-10">Hey! I'm very happy you took interest in my work. This is a simple page I made to develop my programming skills and pass the time, and many more projects are coming soon. Feel free to contact me about anything, just use the form!</p>
                            </div>

                            <div className="img flex-1 ml-auto max-w-109.5 relative">
                                <img src="/img1.png" alt="" class="h-109.5 animate-bounce relative inline-block select-none " draggable="false" />
                                <EmojiClick />
                            </div>
                        </Flex>
                    </Interface>
                </section>

                <section class="About Me py-12.5 px-[4%]">
                    <Interface>
                        <Flex>
                            <div class="image">
                                <img src="/image.jpeg" class="min-h-214 min-w-157" alt="" />
                            </div>

                            <div class="text">
                                <h2 class="font-bold text-4xl">Nice to meet you, <span class="block">I'm Eduardo.</span></h2>
                                <p class="text-justify my-5 text-[22px] leading-7">Hello, my name is Eduardo, I'm 21. Born in Brazil, I spent most of my life in the southern part of this beautiful country, and I'm happy with my current life, although it still have lots of room for improvement</p>
                                <p class="text-justify my-5 text-[22px] leading-7">In 2024 I spent some time between the end of my first high school year, and new year's eve working at Eskimó Sorvetes as a sales assistant, and after finishing high school, I enrolled at IFRS-Rolante exploring the field of software development</p>
                                <p class="text-justify my-5 text-[22px] leading-7">Currently, I'm looking for job opportunities in the IT industry, preferably close where I live.</p>
                                <div class="flex ">
                                    <SocialMediaBtn link={"https://www.linkedin.com/in/eduardo-rodrigues-3802ba330/"} icon={"bi bi-linkedin"}/>
                                    <SocialMediaBtn link={"https://github.com/EduardoRXD"} icon={"bi bi-github"}/>
                                    <SocialMediaBtn link={"https://judge.beecrowd.com/en/profile/1096694"} icon={"/beecrowd.png"}/>
                                </div>
                            </div>
                        </Flex>
                    </Interface>
                </section>

                <section class="Projects shadow-[0_0_30px_rgba(141,63,151,0.308)] py-15 px-[4%] ">
                    <Interface>
                        <h2 class="font-bold text-[50px] text-center">Projects</h2>
                        <div class="text-right py-5"><TextButton text={"View All"} fontSize={"25px"}/></div>
                        <ProjectsBtn/>
                    </Interface>
                </section>

                <section class="About Me"></section>
            </main>
        </>
    )
}

export default Home