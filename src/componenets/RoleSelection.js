// RoleSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const history = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === 'admin') {
        history('/admin-login');
    } else {
        history('/patient-dashboard');
    }
  };

  return (
    <div className="role-selection">
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelect('admin')}>Admin</button>
      <button onClick={() => handleRoleSelect('patient')}>Patient</button>
    </div>
  );
}

export default RoleSelection;
