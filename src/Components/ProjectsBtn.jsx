import { useEffect, useState } from "react";
import RepoButton from "./RepoButton";
import Flex from "./Flex";

function ProjectsBtn() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/EduardoRXD/repos?sort=updated&per_page=3")
            .then(res => res.json())
            .then(data => setRepos(data));
    }, []);

    return <Flex gap={"20px"}>
        {repos.map(({ name, html_url }) => (
            <RepoButton name={name} html_url={html_url}></RepoButton>
        ))}
    </Flex>
}

export default ProjectsBtn