// frontend/src/pages/Hobbies.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hobbies')
      .then(res => setHobbies(res.data))
      .catch(err => console.error("Error fetching hobbies:", err));
  }, []);

  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby.hobby_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;

