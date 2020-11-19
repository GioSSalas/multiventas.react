

export const Input = ({type,name,placeholder,value, onClick, onChange}) => {

    return(
        <div className="w-full h-10 flex items-center mb-2">
            <input type={type} name={name} placeholder={placeholder}
            className="w-full h-full border border-gray-300 rounded-sm px-1 text-sm"
            onClick={onClick}
            onChange={onChange}
            value={value}
            />
        </div>
    )
}

export const Button = ({children,name,value, onClick,type}) => {
    let className="bg-black text-white text-white text-sm h-10 w-full rounded-sm hover:bg-opacity-90"
    switch(type){
        case "secondary": 
            className="text-gray-900 text-sm h-10 w-full rounded-sm mb-2 bg-gray-200"
            break
        default:
            className="bg-black text-white text-white text-sm h-10 w-full rounded-sm hover:bg-opacity-90 mb-2"
            break
    }
    return(
        <button className={className} 
        value={value} name={name} 
        onClick={onClick}>
            {children}
        </button>
    )
}

export const Checkbox = ({children,name,value,onChange}) => {
    return (
        <div className="dom-checkbox w-full">
            <input id={"checkbox-"+name} type="checkbox" name={name} value={value} onChange={onChange} />
            <label htmlFor={"checkbox-"+name} className="text-xs">
                <span></span>
                {children}
            </label>
        </div>
    )
}