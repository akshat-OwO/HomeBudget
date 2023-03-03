import { formatCurrency, formatDateToLocaleString } from '../helper';

const ExpenseItem = ({ expense }) => {
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
        </>
    );
};

export default ExpenseItem;
