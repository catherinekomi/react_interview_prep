import './userdirectory.css';
import { useState } from 'react';

// Dummy user data array
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
];

// What do I want here?
// I want to implement a:
// 1. search bar with
// 2. drop down menu
// 3. ability to click on a user while searching and typing
// 4. and then this user has to pop up on a screen

const MyUsersDirectory = () => {
  // 1. set up 3 states
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // 2. handle changes are for <input/>
  const handleChanges = (e) => {
    // query refers to the text entered by the user
    // and on change the query will be different
    const query = e.target.value;
    // and here we setSearchQuery from '' to a query change
    setSearchQuery(query);
    // and theeen we filter and by user, then make it lowercase and includes what is in query
    // on target value to lower case
    const filtered = dummyUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // 3. a) handle User Selection are for div dropdown logic
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSearchQuery('');
    setFilteredUsers([]);
  };

  return (
    <div>
      <h1>Users Directory</h1>
      <input
        value={searchQuery}
        onChange={handleChanges}
        placeholder='Lets find the user'
      />
      {/* 3. b) This part is going to render dropdown menu on the input */}
      {searchQuery && (
        <div className='dropdown'>
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
      {/* so if there a selected user we can show it on the page */}
      {selectedUser && (
        <div class='selected-user'>
          <h3>{selectedUser.name}</h3>
          <p> Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default MyUsersDirectory;
