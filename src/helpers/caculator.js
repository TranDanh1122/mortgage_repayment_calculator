export function calculateRepaymentWithTotal(amount, termYears, annualRate) {
    const monthlyRate = annualRate / 12 / 100; // Lãi suất hàng tháng
    const totalMonths = termYears * 12; // Tổng số tháng
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    return {
        monthlyRepayment: emi.toFixed(2),
        totalRepayment: totalPayment.toFixed(2)
    }

}
export function calculateInterestOnlyWithTotal(amount, annualRate, termYears) {
    const monthlyInterest = (amount * annualRate) / 12 / 100;
    const totalInterest = monthlyInterest * termYears * 12;
    return {
        monthlyInterest: monthlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
    };
}