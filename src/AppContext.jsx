import { createContext, useState } from "react";
export const AppContext = createContext()
const AppProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [monthlyTotal, setMonthlyTotal] = useState(0)
    return (
        <AppContext.Provider value={{ total, setTotal, monthlyTotal, setMonthlyTotal }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider