import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import clsx from "clsx"
const Input = ({ label, name, width, icon, iconPosition, isValid }) => {
    const [status, setStatus] = useState({
        hover: false,
        active: false,
        invalid: !isValid,
        valid: isValid
    })
    useEffect(() => {
        setStatus((prev) => ({
            ...prev,
            invalid: !isValid,
            valid: isValid,
        }));
    }, [isValid]);
    return (
        <div className={` flex flex-col gap-3 h-fit`} style={{ width: `calc(${width})` }}>
            <label className="text-4 text-Slate_700" htmlFor={name}>{label}</label>
            <div className={
                clsx("w-full border-solid border-[1px]  flex flex-nowrap items-center relative",
                    {
                        "flex-row-reverse": iconPosition === 'right',
                        "border-Slate_500": !status.active && !status.hover && !status.invalid && !status.valid,
                        "border-Lime": status.valid && status.active,
                        "border-Slate_900": !status.active && status.hover,
                        "border-Red": status.invalid
                    }
                )}>
                {(iconPosition != "none")
                    ? <span className={clsx("py-3 px-4 flex items-center justify-center font-bold",
                        {
                            "bg-Lime text-Slate_700": status.active,
                            "bg-Slate_100 text-Slate_700": !status.active && !status.hover && !status.invalid && !status.valid,
                            "bg-Red text-white": status.invalid
                        }
                    )}>{icon}</span>
                    : ""
                }
                <input type="text" id={name} name={name} 
                    className="w-full cursor-pointer text-3 py-3 px-4 outline-none border-none"
                    onMouseEnter={() => setStatus({ ...status, hover: true })}
                    onMouseLeave={() => setStatus({ ...status, hover: false })}
                    onFocus={() => setStatus({ ...status, active: true })}
                    onBlur={() => setStatus({ ...status, active: false })}
                    onChange={() => setStatus({ ...status, valid: true, invalid: false })}
                />

                <span className={clsx("absolute top-full left-0 text-5 text-Red", { "block": status.invalid, "hidden": !status.invalid })}>This field is required</span>

            </div>
        </div >
    )
}
Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconPosition: PropTypes.oneOf(["left", "right", "none"]).isRequired,
    isValid: PropTypes.bool.isRequired,
}
export default Input