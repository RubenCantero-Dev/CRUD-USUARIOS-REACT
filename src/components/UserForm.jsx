import { useState, useEffect } from 'react';

export default function UserForm({ onSubmit, editingUser, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>{editingUser ? `Editar Usuario #${editingUser.id}` : 'Agregar Usuario'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email válido"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono (opcional)"
        value={formData.phone}
        onChange={handleChange}
      />
      <div className="form-actions">
        <button type="submit">
          {editingUser ? 'Actualizar' : 'Agregar'}
        </button>
        {editingUser && (
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}