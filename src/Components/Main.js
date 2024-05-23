import React from 'react'
import { useState } from 'react'

export default function Main() {
  const [balance,setBalance] = useState(0);
  const [transactions,setTransactions] = useState([]);
  const [description,setDescription] = useState('');
  const [amount,setAmount] = useState('');

  const addExpense = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount<=0){
      alert('Please enter a valid amount');
    }

    setBalance(
      (prevBalance) => prevBalance + parsedAmount);

    setTransactions(
      (prevTransactions) => [
        ...prevTransactions,
        {description,amount:parsedAmount},
      ]
    );

    setDescription('');
    setAmount('');

  };

  return (
    <>
    <div className='container'>
      <h1>Expense Tracker</h1>
      <div className='balance'>
        <h2>
          Balance: 
          <span id='balance'>
            {balance.toFixed(2)}/-
          </span>
        </h2>
      </div>
      <div className='transactions'>
        <h2>Transactions</h2>
        <ul>
          {
            transactions.map((e,i)=> (
              <li >
                {
                  `${e.description} : ${e.amount.toFixed(2)}/-`
                }
              </li>
            ))
          }
        </ul>
      </div>
      <div className='add-expense'>
        <h2>Add Expense</h2>
        <form>
          <label htmlFor='description'>Description:</label>
          <input type='text' className='form-control' id='description' value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required/>
          <br/>
          <label htmlFor='amount'>Amount:</label>
          <input type='text' className='form-control' id='amount' value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          required/>
          <button type='button' onClick={addExpense}>
            Add Expense
          </button>
        </form>
      </div>
    </div>
    </>
  )
}
