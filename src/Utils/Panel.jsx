import { CrossMark } from "./IconUtils";


function Panel({ isOpen, onDismiss, children }) {
    return <>
        <div
            class={`fixed inset-0 bg-black/50 z-40 opacity-[60%] peer-checked:opacity-100 transition-opacity pointer-events-none peer-checked:pointer-events-auto` + ((!isOpen) ? " hidden" : "")}
            onClick={()=>{onDismiss()}}
        ></div>
        <div className={`fixed z-100 top-0 left-0 h-full w-64 bg-[#1a222f] text-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`} onBlur={onDismiss}>
                <div onClick={()=>onDismiss()} className={(isOpen?'':'hidden ')+"absolute top-[15px] right-[-30px]"}>
                        {CrossMark}
                </div>
            {children}
        </div>
    </>

}

export default Panel;