function TextButton({ref, text, fontSize}) {

    return <a href={ref} class="text-[rgb(146,146,146)] no-underline inline-block duration-200 ease-in-out cursor-pointer hover:text-[rgb(0,0,0)] hover:scale-110" style={{ fontSize }}>{text}</a>
}

export default TextButton