import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Dashboard: React.FC = () => {
  const [user, setUser] = useState('');
  const location = useLocation();
  console.log('loscstion',location)

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')
      try {
        const response = await axios.get(`http://localhost:5000/clients/getUser/${location?.state?.username}`,{
          headers: {
            Authorization: `${token}`, 
          },});
          console.log('response',response)
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
      console.log(user);
    };

    fetchUser();
  }, []);

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <p>Welcome {location?.state?.username}</p>
    </div>
  );
};

export default Dashboard;



