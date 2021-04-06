import {FaTimes} from 'react-icons/fa'

const Expense = ({expense, onDelete}) => {
    return (
        <div className='expense'> 
            <h3>{expense.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={()=>onDelete(expense.id)} /> </h3>
            <p>{expense.amount}</p>
            <p>{expense.day}</p>
        </div>
    )
}

export default Expense