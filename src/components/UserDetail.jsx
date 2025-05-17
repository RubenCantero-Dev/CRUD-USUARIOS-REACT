export default function UserDetail({ user, onClose }) {
    return (
      <div className="user-detail">
        <button onClick={onClose} className="close-btn">×</button>
        <h2>Detalles del Usuario</h2>
        <div className="detail-item">
          <strong>ID:</strong> {user.id}
        </div>
        <div className="detail-item">
          <strong>Nombre:</strong> {user.name}
        </div>
        <div className="detail-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="detail-item">
          <strong>Teléfono:</strong> {user.phone || 'No proporcionado'}
        </div>
      </div>
    );
  }