export default function UserList({ users, onEdit, onDelete, onSelect }) {
    return (
      <div className="user-list">
        <h2>Lista de Usuarios ({users.length})</h2>
        {users.length === 0 ? (
          <p>No hay usuarios registrados</p>
        ) : (
          <ul>
            {users.sort((a, b) => a.id - b.id).map(user => (
              <li key={user.id}>
                <div onClick={() => onSelect(user)} style={{ cursor: 'pointer' }}>
                  <strong>#{user.id} - {user.name}</strong>
                  <p>{user.email}</p>
                </div>
                <div className="actions">
                  <button onClick={() => onEdit(user)}>Editar</button>
                  <button onClick={() => onDelete(user.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }