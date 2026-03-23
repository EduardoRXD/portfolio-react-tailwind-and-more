function DropdownButton({text, bgcolor, children}) {

    return <div class="group relative"> 
        <button style={{backgroundColor: bgcolor}} class={`px-10 py-3 rounded-[10px] mb-2`}>{text}</button>
        <div class="hidden group-hover:flex gap-3 w-120 h-80 py-4 flex-wrap absolute content-start">
            {children}
        </div>
    </div>
}

export default DropdownButton