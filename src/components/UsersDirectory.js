import React, { useState } from 'react';
import './userdirectory.css';

// Dummy user data array
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
];

const UserCard = ({ user }) => {
  return (
    <div className='user-card'>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

const UsersDirectory = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Step 2: Define function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedUser(null);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSearchQuery('');
  };

  // Step 3: Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='user-directory'>
      {/* Step 4: Add search input */}
      <input
        type='text'
        placeholder='Search users...'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {searchQuery && (
        <div className='dropdown'>
          {/* Dropdown with filtered users */}
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className='dropdown-item'
              onClick={() => handleUserSelect(user)}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}
      <div className='user-list'>
        {/* Display selected user or all users if none selected */}
        {selectedUser ? (
          <UserCard user={selectedUser} />
        ) : (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};
export default UsersDirectory;
