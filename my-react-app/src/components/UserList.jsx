function UserList({ users, addedUserId }) {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li
          key={user.id}
          className={`user-item ${user.id === addedUserId ? 'new-user' : ''}`}
          aria-live="polite"
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;