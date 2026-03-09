function SocialMediaBtn({ link, icon }) {
    const isFilePath = /\.[a-zA-Z0-9]+$/.test(icon);

    return <a href={`${link}`} class="w-20 h-20 rounded-[50%] bg-[rgb(117,43,117)] m-1.25 text-3xl border-0 duration-300 flex justify-center items-center hover:scale-110 hover:shadow-[0_0_30px_rgba(229,165,238,1)]">
        {isFilePath ? (
            <button class="filter-[invert(1)] cursor-pointer"><img src={`/portfolio-react-tailwind-and-more/${icon}`} class="w-20 h-15 inline-block items-center justify-center" alt="" /></button>
        ) : (
            <button class="filter-[invert(1)] cursor-pointer"><i class={`${icon} `}></i></button>
        )}
    </a>
}

export default SocialMediaBtn