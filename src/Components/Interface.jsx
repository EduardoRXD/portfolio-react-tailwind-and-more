function Interface({children, padding}) {
    return <div style={{paddingTop: padding ? padding: "60px"}} class={`max-w-7xl m-auto`}>{children}</div>
}

export default Interface