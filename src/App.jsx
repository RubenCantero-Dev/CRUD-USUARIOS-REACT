import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import useUsers from './hooks/useUsers';
import './styles.css';

function App() {
  const { users, addUser, updateUser, deleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSubmit = (userData) => {
    if (editingUser) {
      updateUser(editingUser.id, userData);
      setEditingUser(null);
    } else {
      addUser(userData);
    }
  };

  return (
    <div className="app">
      <h1>Gestión de Usuarios</h1>
      <div className="content">
        <UserForm 
          onSubmit={handleSubmit} 
          editingUser={editingUser} 
          onCancel={() => setEditingUser(null)}
        />
        <UserList 
          users={users} 
          onEdit={setEditingUser} 
          onDelete={deleteUser}
          onSelect={setSelectedUser}
        />
        {selectedUser && (
          <UserDetail 
            user={selectedUser} 
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;