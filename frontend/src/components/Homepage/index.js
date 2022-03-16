import React, {useContext}from 'react';
import { UserContext } from '../../UserContext';

const Homepage = () => {
  const { user, setUser } = useContext(UserContext);

  return <div>

    HELOLO
    {user}
  </div>;
};

export default Homepage;
