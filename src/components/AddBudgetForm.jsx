import { Form } from 'react-router-dom';

// library imports
import { CurrencyRupeeIcon } from '@heroicons/react/24/solid';

const AddBudgetForm = () => {
    return (
        <div className="form-wrapper">
            <h2 className="h3">Create Budget</h2>
            <Form method="post" className="grid-sm">
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input
                        type="text"
                        name="newBudget"
                        id="newBudget"
                        placeholder="e.g., Groceries"
                        required
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input
                        type="number"
                        name="newBudgetAmount"
                        id="newBudgetAmount"
                        step="0.01"
                        placeholder="e.g., ₹350"
                        required
                        inputMode='decimal'
                    />
                </div>
                <button type='submit' className="btn btn--dark">
                    <span>Create Budget</span>
                    <CurrencyRupeeIcon width={20} />
                </button>
            </Form>
        </div>
    );
};

export default AddBudgetForm;
