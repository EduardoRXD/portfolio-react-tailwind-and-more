function Button({ text, paddingX, paddingY, BorderRadius, hover, bgcolor, textColor, click }) {
    return <button onClick={click} style={{backgroundColor: bgcolor ? bgcolor: "rgb(89,17,148)", color: textColor ? textColor : "rgb(229,165,238)"}} class={`border-0 ${BorderRadius ? BorderRadius : "rounded-4xl"} cursor-pointer font-semibold text-lg ${paddingX ? paddingX: "px-10"} ${paddingY ? paddingY: "py-2"} ${hover ? hover : "hover:shadow-[0_0_30px_rgb(229,165,238)] hover:scale-110"} ease-in-out duration-200`}>{text}</button>
}

export default Button