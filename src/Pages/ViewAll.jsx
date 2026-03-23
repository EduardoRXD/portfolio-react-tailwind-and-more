import "./ViewAll.jsx"
import Navbar from "../Components/Navbar.jsx"
import Interface from "../Components/Interface.jsx"
import { useRef, useEffect, useState } from 'react';
import DropdownButton from "../Components/DropdownButton.jsx";
import Button from "../Components/Button.jsx";
import RepoButton from "../Components/repoButton.jsx";

function ViewAll() {
    const [repos, setRepos] = useState([]);
    const [filters, setFilters] = useState([]);
    const [sort, setSort] = useState("created");
    const [searchResult, setSearchResult] = useState([]);

    const inputName = useRef()

    useEffect(() => {
        fetch("https://api.github.com/users/EduardoRXD/repos", {
            headers: { Accept: "application/vnd.github.mercy-preview+json" }
        })
            .then(res => res.json())
            .then(data => {
                setRepos(data);
                setSearchResult(data); // usa o resultado da API direto
            });
    }, []);


    function CreateFilters() {
        let topics = [];

        repos.forEach(repo => {
            topics.push(...repo.topics);
        });

        topics = [...new Set(topics)];

        return (
            <>
                {topics.map(name => {
                    const isActive = filters.includes(name);
                    return (<button key={name} onClick={() => setFilters(isActive ? filters.filter(f => f !== name) : [...filters, name])} className={`px-4 rounded text-black cursor-pointer h-12 ${isActive ? "bg-[rgb(42,223,255)]" : "bg-[rgb(42,99,255)]"}`}>{name}</button>);
                })}
            </>
        );

    }

    function SortButtons() {
        const list = ["created", "updated", "full_name"];

        return (
            <>
                {list.map(name => (
                    <button onClick={() => setSort(name)} class={`px-4 rounded text-black h-12 ${sort === name ? "bg-[rgb(42,223,255)]" : "bg-[rgb(42,99,255)]"}`}>{name === "full_name" ? "alphabetic" : name}</button>
                ))}
            </>
        );
    }

    function handleSearch() {
        let results = repos;
        const searchName = inputName.current?.value || "";

        if (searchName.trim() !== "") {
            results = results.filter(repo =>
                repo.name.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (filters.length > 0) {
            results = results.filter(repo =>
                filters.every(f => repo.topics.includes(f))
            );
        }

        results = [...results].sort((a, b) => {
            if (sort === "full_name") {
                return a.full_name.localeCompare(b.full_name);
            }
            if (sort === "created") {
                return new Date(b.created_at) - new Date(a.created_at);
            }
            if (sort === "updated") {
                return new Date(b.updated_at) - new Date(a.updated_at);
            }
            return 0;
        });

        setSearchResult(results);
    }

    return (<>
        <Navbar />

        <Interface>
            <section class="shadow-[0_0_30px_rgba(141,63,151,0.308)] pb-15 px-[4%]">
                <h1 class="mt-8 py-10 text-4xl font-bold text-center">Search project by name and filter</h1>

                <div class="flex flex-col gap-4">
                    <div class="flex w-full gap-5">
                        <input type="text" ref={inputName} placeholder="Name" class="w-[50%] h-10 border border-[rgb(65,106,182)] outline-0 pl-2 " />
                        <Button text={"Search"} hover={"noHover"} bgcolor={"rgb(117,43,117)"} BorderRadius={"rounded-2xl"} click={handleSearch}></Button>
                    </div>

                    <div class="flex gap-3 z-40">
                        <h2 class="text-3xl font-medium">Sort by:</h2>
                        <SortButtons />
                        <DropdownButton text={"Filters"} bgcolor={"rgb(65,182,157)"}>
                            <CreateFilters />
                        </DropdownButton>
                    </div>

                </div>
            </section>
        </Interface>

        <Interface padding={"25px"}>
            <section class="shadow-[0_0_30px_rgba(141,63,151,0.308)] pb-15">
                <div class="gap-5 flex content-start items-center">
                    {searchResult.map(repo => (
                        <RepoButton name={repo.name} html_url={repo.html_url}></RepoButton>
                    ))}
                </div>
            </section>
        </Interface>
    </>)
}

export default ViewAll