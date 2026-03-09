function Button({text, paddingX, paddingY}) {
    if (paddingX && paddingY) {
        return <button class={`bg-[rgb(89,17,148)] text-[rgb(229,165,238)] border-0 rounded-4xl cursor-pointer font-semibold text-lg ${paddingX} ${paddingY} hover:shadow-[0_0_30px_rgb(229,165,238)] hover:scale-110 ease-in-out duration-200`}>{text}</button>
    } else {

    }
}

export default Button