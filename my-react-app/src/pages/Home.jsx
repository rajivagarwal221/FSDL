import { useState, useEffect } from 'react';
import InputFocus from '../components/InputFocus';
import UserList from '../components/UserList';
import { useWindowWidth } from '../hooks/useWindowWidth';

function Home() {
  const windowWidth = useWindowWidth();
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Alice' },
    { id: 'u2', name: 'Bob' },
    { id: 'u3', name: 'Charlie' },
  ]);
  const [count, setCount] = useState(0);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');
  const [addedUserId, setAddedUserId] = useState('');

  useEffect(() => {
    // Example side effect: log changes to the user list
    console.log('User list changed:', users);
  }, [users]);

  const handleAddUser = event => {
    event.preventDefault();
    if (newName.trim().length < 3) {
      setError('Name must be at least 3 characters long');
      return;
    }

    const id = `u${users.length + 1}`;
    setUsers(prev => [...prev, { id, name: newName.trim() }]);
    setAddedUserId(id);
    setNewName('');
    setError('');
  };

  return (
    <section className="page page-home">
      <h1>Home Page</h1>
      <p>Current window width: <strong>{windowWidth}px</strong></p>

      <div className="card">
        <h2>Counter (like Vite default)</h2>
        <div className="counter-section">
          <button onClick={() => setCount(count => count - 1)}>-</button>
          <span className="counter">count is {count}</span>
          <button onClick={() => setCount(count => count + 1)}>+</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <h2>Input focus with refs</h2>
        <InputFocus />
      </div>

      <div className="card">
        <h2>Add a User (form validation)</h2>
        <form onSubmit={handleAddUser} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            placeholder="Enter at least 3 characters"
            aria-label="New user name"
            style={{ flex: '1', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p className="form-error">{error}</p>}
      </div>

      <div className="card">
        <h2>User List (keys are stable IDs)</h2>
        <UserList users={users} addedUserId={addedUserId} />
      </div>
    </section>
  );
}

export default Home;