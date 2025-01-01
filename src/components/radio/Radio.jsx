import { useState } from "react"
import PropTypes from 'prop-types'
import clsx from "clsx"
const Radio = ({ label, name, width, id, checked, setChecked, value }) => {
    const [status, setStatus] = useState({
        hover: false,
        invalid: false,
        valid: false
    })


    return (
        <label htmlFor={`${name}_${id}`} style={{ width: `calc(${width})` }} tabIndex="0"
            onMouseEnter={() => setStatus({ ...status, hover: true })}
            onMouseLeave={() => setStatus({ ...status, hover: false })}
            onFocus={() => setStatus({ ...status, active: true })}
            className={clsx("w-full text-3 text-Slate_900 border-solid border-[1px] py-3 px-4 flex flex-nowrap items-center justify-start gap-4 cursor-pointer",
                {
                    "border-Slate_500": !(checked == `${value}`) && !status.hover && !status.invalid && !status.valid,
                    "border-Lime bg-Lime/15": checked == `${value}`,
                    "border-Lime": !(checked == `${value}`) && status.hover

                }
            )}>
            <input type="radio" id={`${name}_${id}`} name={name} value={value}
                className={clsx("w-6 h-6 cursor-pointer text-3 outline-none border-none", { "bg-Lime": checked == `${value}` })}
                onMouseEnter={() => setStatus({ ...status, hover: true })}
                onMouseLeave={() => setStatus({ ...status, hover: false })}
                onChange={() => setChecked({ value })}
            />
            {label}
        </label>
    )
}
Radio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
    setChecked: PropTypes.func.isRequired
}
export default Radio