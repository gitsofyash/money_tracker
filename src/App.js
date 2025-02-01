import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + '/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';

    const price = name.split(' ')[0];

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price,  // Assuming the price is in the format of '+200'
        name: name.substring(price.length + 1), 
        datetime,
        description
      }),
    })
      .then(response => response.json())
      .then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        setTransactions([...transactions, json]); // Add new transaction to the list
        console.log('result', json);
      })
      .catch(error => console.error('Error:', error)); // Optional: Handle errors
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance += parseFloat(transaction.price) || 0; // Prevent NaN issues
  }

  return (
    <main>
      <h1 className="app-title">Money Tracker Application</h1>
      <h1>${balance} <span></span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input 
            type="text" 
            value={name} 
            onChange={ev => setName(ev.target.value)}
            placeholder={'E.g., +500 Salary, -200 Grocery'}
          />
          <input 
            type="date"
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input 
            type="text" 
            value={description}
            onChange={ev => setDescription(ev.target.value)}       
            placeholder={'E.g., Salary for January, Bought groceries'}
          />
        </div>
        <button type="submit">Add New Expense</button>
      </form>

      <div className="transactions">
      {transactions.length > 0 && [...transactions].reverse().map((transaction, index) => (
          <div key={index} className="transaction">
            <div className="left">
              <div className="name">{transaction.name}</div>
              <div className="description">{transaction.description}</div>
            </div>
            <div className="right">
              <div className={"price " + (transaction.price < 0 ? 'red' : 'green')}>{transaction.price}</div>
              <div className="datetime">{new Date(transaction.datetime).toLocaleDateString()}</div>
              </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
