import { useState, useEffect } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState(() => {
    // Cargar desde localStorage al inicio
    const saved = localStorage.getItem('crud-users');
    return saved ? JSON.parse(saved) : [];
  });

  // Persistir cambios en localStorage
  useEffect(() => {
    localStorage.setItem('crud-users', JSON.stringify(users));
  }, [users]);

  // Obtener el menor ID disponible
  const getNextId = () => {
    const usedIds = users.map(user => user.id);
    let nextId = 1;
    while (usedIds.includes(nextId)) {
      nextId++;
    }
    return nextId;
  };

  const addUser = (userData) => {
    setUsers([...users, { ...userData, id: getNextId() }]);
  };

  const updateUser = (id, userData) => {
    setUsers(users.map(user => user.id === id ? { ...user, ...userData } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return { users, addUser, updateUser, deleteUser, getNextId };
};

export default useUsers;