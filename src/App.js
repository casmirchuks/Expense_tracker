import {useState} from 'react';
import Header from './components/Header';
import Expenses from './components/Expenses';
import AddExp from './components/AddExpense';


const App = () => {
  const [toggleExpense, setToggleExpense] = useState(false)
  const [expenses, setExpense] = useState([
      {
          id: 1,
          text: 'Airtime',
          amount: 50,
          day: 'Feb 5th at 2:30pm',
  
      },
      {
          id: 2,
          text: 'Groceies',
          amount: 250,
          day: 'Feb 8th at 3:30pm',
  
      },
      {
          id: 3,
          text: 'Uber',
          amount: 100,
          day: 'Mar 17th at 6:30pm',
  
      },
  ])

  // Add Expense
  const AddExpense = (expense) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newExpense = {id, ...expense}
    setExpense([...expenses, newExpense])
  }

  // Delete Expense
  const deleteExpense = (id) => {
    setExpense(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div className="container">
    <Header onAdd={()=> setToggleExpense(!toggleExpense)}
      showExpense={toggleExpense}
    />
    { toggleExpense && <AddExp onAdd={AddExpense}/> }
    <Expenses expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
