import clsx from "clsx"
import Input from "../input/Input"
import Radio from "../radio/Radio"
import { calculateRepaymentWithTotal, calculateInterestOnlyWithTotal } from "../../helpers/caculator"
import { useState, useContext } from "react"
import { AppContext } from "../../AppContext"
const Form = () => {
    const [checked, setChecked] = useState("")
    const { setTotal, setMonthlyTotal } = useContext(AppContext)
    let [valid, setValid] = useState({
        amount: true,
        term: true,
        rate: true,
        type: true
    })
    let caculator = {
        re_pay: (amount, term, rate) => {
            let { monthlyRepayment, totalRepayment } = calculateRepaymentWithTotal(amount, term, rate)
            setTotal(totalRepayment)
            setMonthlyTotal(monthlyRepayment)
        },
        int_only: (amount, term, rate) => {
            let { monthlyRepayment, totalRepayment } = calculateInterestOnlyWithTotal(amount, term, rate)
            setTotal(totalRepayment)
            setMonthlyTotal(monthlyRepayment)
        }

    }
    let handleSubmit = (e) => {
        e.preventDefault()
        let data = Object.fromEntries(new FormData(e.target))

        if (!data) {
            setValid({
                amount: false,
                term: false,
                rate: false,
                type: false
            })
            return false
        }

        let isValid = true
        for (const key in data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) continue
            const element = data[key];
            if (element !== "" && element !== null && element !== undefined) continue
            setValid((valid) => {
                return {
                    ...valid,
                    [key]: false
                }
            })
            isValid = false
        }
        if (!data.type) {
            setValid((valid) => {
                return {
                    ...valid,
                    type: false
                }
            })            
            return false
        }
        if (!isValid) return false
        console.log(data.type);
        
        caculator[data.type](data.amount, data.term, data.rate)
    }
    return (
        <form className="flex flex-row flex-wrap gap-4 p-10 bg-white justify-start w-[45%] mb:w-full" noValidate onSubmit={(e) => handleSubmit(e)}>
            <Input key="1" name="amount" label="Mortgage Amount" width={"100%"} icon={"$"} iconPosition={"left"} isValid={valid.amount} ></Input>
            <Input key="2" name="term" label="Mortgage Term" width={"50% - 8px"} icon={"year"} iconPosition={"right"} isValid={valid.term} ></Input >
            <Input key="3" name="rate" label="Interest Rate" width={"50% - 8px"} icon={"%"} iconPosition={"right"} isValid={valid.rate} ></Input >
            <fieldset className="border-none w-full flex flex-col gap-3 relative">
                <label className="text-4 text-Slate_700">Mortgage Type</label>
                <Radio key="4" id="4" name="type" value="re_pay" label="Repayment" width={"100%"} checked={checked} setChecked={setChecked} ></Radio >
                <Radio key="5" id="5" name="type" value="int_only" label="Interest Only" width={"100%"} checked={checked} setChecked={setChecked}></Radio >
                <span className={clsx("text-5 text-Red absolute top-full left-0", { "hidden": valid.type == true, "block": valid.type == false })}>This field is required</span>
            </fieldset>
            <button type="submit" className="flex items-center justify-center gap-4 text-3 text-Slate_900 py-3 px-3  mt-2 w-max  bg-Lime hover:bg-Lime/50 rounded-3xl">
                <i className="block w-5 h-5 bg-black"
                    style={{ mask: "url(./assets/images/icon-calculator.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-calculator.svg) center / cover no-repeat" }}
                ></i>
                Calculate Repayments</button>
        </form>
    )
}
export default Form