function Flex({children, gap}) {
    return <div class="flex justify-between items-center" style={{gap: gap || "60px"}}>{children}</div>
}

export default Flex