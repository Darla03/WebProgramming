// frontend/src/pages/Personal.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Personal() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/personal')
      .then(res => setInfo(res.data))
      .catch(err => console.error("Error fetching personal info:", err));
  }, []);

  return (
    <div>
      <h2>Personal Info</h2>
      {info.map((person, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Phone:</strong> {person.phone_number}</p>
        </div>
      ))}
    </div>
  );
}

export default Personal;
