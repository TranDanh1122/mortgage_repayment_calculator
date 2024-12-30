import { useState } from "react"
const Input = ({ width, icon, iconPosition }) => {
    const [status, setStatus] = useState('Pristine')
    return (
        <div className={` w-${width}  `}>
            <span className="absolute top-0 left-0 py-3 px-4">
                <i className="block w-4 h-3 bg-Slate_700" style={{ mask: `url(${icon}) center / cover no-repeat`, WebkitMask: `url(${icon}) center / cover no-repeat` }}></i>
            </span>
            <input type="text" className="w-full cursor-pointer text-3" />

        </div>
    )
}
export default Input