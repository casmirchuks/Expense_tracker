import {useState } from 'react';

const AddExpense = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!Text) {
            alert('Please add expense')
            return
        }
        onAdd({text,amount,day})
        setText('')
        setAmount('')
        setDay('')
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Expense</label>
                <input type="text" placeholder="Add Expense" 
                    value={text} 
                    onChange={(e)=> setText(e.target.value)}> 
                </input>
            </div>
            <div className="form-control">
                <label>Amount</label>
                <input type="text" placeholder="Add Amount"
                    value={amount} 
                    onChange={(e)=> setAmount(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day and Time"
                    value={day} 
                    onChange={(e)=> setDay(e.target.value)}>
                </input>
            </div>
            <input type="submit" value='Save Expense' className="btn btn-block" ></input>
        </form>
    ) 
}

export default AddExpense