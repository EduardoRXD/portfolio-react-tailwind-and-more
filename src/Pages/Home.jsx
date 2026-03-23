import "./Home.css"
import Navbar from "../Components/Navbar"
import Interface from "../Components/Interface"
import Flex from "../Components/Flex"
import EmojiClick from "../Components/EmojiClick"
import { useState } from "react";
import SocialMediaBtn from "../Components/SocialMediaBtn"
import TextButton from "../Components/textButton"
import ProjectsBtn from "../Components/ProjectsBtn"
import Button from "../Components/Button"

function Home() {
    
    return (
        <>
            <Navbar />
            <main>
                <section className="top pt-25 px-[4%] py-5" id="top">
                    <Interface>
                        <Flex>
                            <div className="text w-122 flex-1">
                                <h1 class="text-5xl font-bold leading-15">Ideas that don't fit into templates.</h1>
                                <p class="text-3xl max-w-150 my-10">Hey! I'm very happy you took interest in my work. This is a simple page I made to develop my programming skills and pass the time, and many more projects are coming soon. Feel free to contact me about anything, just use the form!</p>
                            </div>

                            <div className="img flex-1 ml-auto max-w-109.5 relative">
                                <img src="/portfolio-react-tailwind-and-more/img1.png" alt="" class="h-109.5 animate-bounce relative inline-block select-none " draggable="false" />
                                <EmojiClick />
                            </div>
                        </Flex>
                    </Interface>
                </section>

                <section class="About Me py-12.5 px-[4%]" id="about">
                    <Interface>
                        <Flex>
                            <div class="image">
                                <img src="/portfolio-react-tailwind-and-more/image.jpeg" class="min-h-214 min-w-157" alt="" />
                            </div>

                            <div class="text">
                                <h2 class="font-bold text-4xl">Nice to meet you, <span class="block">I'm Eduardo.</span></h2>
                                <p class="text-justify my-5 text-[22px] leading-7">Hello, my name is Eduardo, I'm 21. Born in Brazil, I spent most of my life in the southern part of this beautiful country, and I'm happy with my current life, although it still have lots of room for improvement</p>
                                <p class="text-justify my-5 text-[22px] leading-7">In 2024 I spent some time between the end of my first high school year, and new year's eve working at Eskimó Sorvetes as a sales assistant, and after finishing high school, I enrolled at IFRS-Rolante exploring the field of software development</p>
                                <p class="text-justify my-5 text-[22px] leading-7">Currently, I'm looking for job opportunities in the IT industry, preferably close where I live.</p>
                                <div class="flex ">
                                    <SocialMediaBtn link={"https://www.linkedin.com/in/eduardo-rodrigues-3802ba330/"} icon={"bi bi-linkedin"} />
                                    <SocialMediaBtn link={"https://github.com/EduardoRXD"} icon={"bi bi-github"} />
                                    <SocialMediaBtn link={"https://judge.beecrowd.com/en/profile/1096694"} icon={"/beecrowd.png"} />
                                </div>
                            </div>
                        </Flex>
                    </Interface>
                </section>

                <section class="Projects shadow-[0_0_30px_rgba(141,63,151,0.308)] py-15 px-[4%]" id="projects">
                    <Interface>
                        <h2 class="font-bold text-[50px] text-center">Projects</h2>
                        <div class="text-right py-5"><TextButton text={"View All"} fontSize={"25px"} ref={"#ViewAll"}/></div>
                        <ProjectsBtn />
                    </Interface>
                </section>

                <section class="Contact mt-27.5 " id="contact">
                    <Interface>
                        <h2 class="font-bold text-[50px] text-center mb-8">Contact Me</h2>

                        <form action="https://formsubmit.co/eduardorodgs00@gmail.com" method="POST" class="max-w-125 m-auto flex justify-center flex-col gap-2.5">
                            <input type="text" name="name" id="" placeholder="Name:" required class="w-full border-0 px-5 py-4 bg-[rgba(190,190,190,0.767)] outline-0 text-base rounded-2xl"/>
                            <input type="text" name="email" id="" placeholder="Email:" required class="w-full border-0 px-5 py-4 bg-[rgba(190,190,190,0.767)] outline-0 text-base rounded-2xl"/>
                            <input type="text" name="phone" id="" placeholder="Phone number(optional):" class="w-full border-0 px-5 py-4 bg-[rgba(190,190,190,0.767)] outline-0 text-base rounded-2xl"/>
                            <textarea name="message" id="" placeholder="Message:" required class="h-30 m-h-50 resize-none w-full border-0 px-5 py-4 bg-[rgba(190,190,190,0.767)] outline-0 text-base rounded-2xl"></textarea>
                            <div class="submit text-center mt-4 mb-20">
                                <Button text={"submit"} paddingX={"w-30"} paddingY={"h-15"} BorderRadius={"rounded-[15px]"}/>
                            </div>
                        </form>
                    </Interface>
                </section>
                
                <footer class="shadow-[0_0_30px_rgba(141,63,151,0.308)] pb-15 px-[4%]">
                    <Interface>
                        <div class="pb-5">
                            <Flex> 
                                <div class="logo">
                                    <a href=""><img src="/portfolio-react-tailwind-and-more/Logo.png" alt="" /></a>
                                </div>
                                <Flex gap={"0"}>
                                    <SocialMediaBtn link={"https://www.linkedin.com/in/eduardo-rodrigues-3802ba330/"} icon={"bi bi-linkedin"} />
                                    <SocialMediaBtn link={"https://github.com/EduardoRXD"} icon={"bi bi-github"} />
                                    <SocialMediaBtn link={"https://judge.beecrowd.com/en/profile/1096694"} icon={"/beecrowd.png"} />
                                </Flex>
                            </Flex>
                        </div>
                        <div class="border-solid border-t-2 border-[rgb(89,17,148)] py-5">
                            <p><i class="bi bi-envelope-fill text-[rgb(89,17,148)] text-3xl "></i> <a class="text-[20px]" href="mailto:eduardorodgs00@gmail.com">eduardorodgs00@gmail.com</a></p>
                        </div>
                    </Interface>
                </footer>
            </main>
        </>
    )
}

export default Home