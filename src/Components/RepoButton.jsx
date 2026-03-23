function RepoButton({name, html_url}) {
    return <a href={`${html_url}`} class="group hover:scale-105 duration-300 relative"><img src={`https://raw.githubusercontent.com/EduardoRXD/${name}/main/screenshot.PNG`} alt="" class="w-105 h-105 border text-[rgb(89,17,148)]" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300">
            <span className="text-white text-2xl">{name}</span>
        </div>
    </a>
}

export default RepoButton