import { useEffect, useState } from "react";
import Flex from "./Flex";

function ProjectsBtn() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/EduardoRXD/repos?sort=updated")
            .then(res => res.json())
            .then(data => setRepos(data));
    }, []);

    const pages = repos.slice(0, 3);

    return <Flex gap={"20px"}>
         {pages.map(({name, html_url}) => (
            <a href={`${html_url}`}><img src={`https://raw.githubusercontent.com/EduardoRXD/${name}/main/screenshot.PNG`} alt="" class="w-109.5 h-109.5 border text-[rgb(89,17,148)] duration-300 hover:scale-105" /></a>
         ))}
    </Flex>
}

export default ProjectsBtn