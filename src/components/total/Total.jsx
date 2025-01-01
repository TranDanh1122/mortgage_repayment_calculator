import { useContext } from "react"
import { AppContext } from "../../AppContext.jsx"
import clsx from "clsx"
const Total = () => {
    const { total, monthlyTotal } = useContext(AppContext)

    return (
        <div className="bg-Slate_900 p-10 pb-28 rounded-bl-[128px] mb:rounded-none w-[55%] mb:w-full">
            <div className={clsx("", { "hidden": !total && !monthlyTotal })}>
                <h2 className="text-2 text-white ">Your Result</h2>
                <p className="text-4 text-Slate_300 mt-5 mb-10 mb:text-center">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                <div className="flex flex-col items-start justify-start p-6 bg-black/25 border-t-2 border-solid border-Lime rounded-md">
                    <span className="text-4 text-Slate_300">Your monthly repayments</span>
                    <span className="text-1 text-Lime pb-6 border-b-[1px]  border-solid border-Slate_300 mt-2">${monthlyTotal}</span>
                    <span className="text-4 text-Slate_300 mb-2 mt-6">Total youll repay over the term</span>
                    <span className="text-2 text-white">${total}</span>
                </div>
            </div>
            <div className={clsx("flex-col items-center justify-center", { "hidden": total && monthlyTotal, "flex": !total && !monthlyTotal })}>
                <img src="./assets/images/illustration-empty.svg" alt="illustration-empty" className="object-cover w-[200px] h-[200px]" />
                <h2 className="text-2 text-white mt-10">Results shown here</h2>
                <p className="text-4 text-Slate_300 mt-5 mb-10 mb:text-center">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
            </div>
        </div>
    )
}
export default Total