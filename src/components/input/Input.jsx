import { useState } from "react"
import PropTypes from 'prop-types'
const Input = ({ width, icon, iconPosition }) => {
    const [status, setStatus] = useState('init')
    return (
        <div className={`w-${width} border-solid border-[1px] border-Slate_500 flex flex-nowrap items-center 
            ${iconPosition == 'right' ? 'flex-row-reverse' : ''}  hover:border-Slate_900 ${status == "focus" ? 'border-lime font-bold' : ''} `}>
            <span className={`bg-Slate_100 text-Slate_700 
                                py-3 px-4
                                flex items-center justify-center
                               
                                ${status == "focus" ? 'bg-lime font-bold' : ''} 
                                `}>{icon}</span>
            <input type="text"
                className="w-full cursor-pointer text-3 py-3 px-16 outline-none border-none"
                onFocus={() => setStatus('focus')}
            />
        </div>
    )
}
Input.propTypes = {
    width: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconPosition: PropTypes.oneOf(["left", "right"]).isRequired
}
export default Input