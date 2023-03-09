// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";

// helper functions
import { createExpense, deleteItem, getAllMatchingItems } from "../helper";

// loader
export async function budgetLoader({ params }) {
    const budget = getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: params.id
    })[0];

    const expenses = getAllMatchingItems({
        category: 'expenses',
        key: 'budgetId',
        value: params.id
    });

    if (!budget) {
        throw new Error("The Budget you are trying to find doesn't exist");
    }

    return { budget, expenses };
}

// action
export async function budgetAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === 'deleteExpense') {
        try {
            deleteItem({
                key: 'expenses',
                id: values.expenseId
            })
            return toast.success(`Expense deleted!`);
        } catch(e) {
            throw new Error('There was a problem deleting your Expense');
        }
    }

    if (_action === 'createExpense') {
        try {
            // create an expense
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            return toast.success(`Expense ${values.newExpense} created!`);
        } catch(e) {
            throw new Error('There was a problem creating your Expense');
        }
    }
}

const BudgetPage = () => {
    const { budget, expenses } = useLoaderData();

    return (
        <div className="grid-lg" style={{"--accent": budget.color}}>
            <h1 className="h2">
                <span className="accent">{budget.name} </span> 
                Overview
            </h1>
            <div className="flex-lg">
                <BudgetItem budget={budget} showDelete={true} />
                <AddExpenseForm budgets={[budget]} />
            </div>
            {
                expenses && expenses.length > 0 && (
                    <div className="grid-lg">
                        <h2>
                            <span className="accent">{budget.name}</span>
                            Expenses
                        </h2>
                        <Table expenses={expenses} showBudget={false} />
                    </div>
                )
            }
        </div>
    );
}
 
export default BudgetPage;