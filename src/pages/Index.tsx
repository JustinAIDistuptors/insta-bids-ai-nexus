
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Dashboard from './Dashboard';

const Index = () => {
  const navigate = useNavigate();
  
  // Redirect to the main dashboard
  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);
  
  return <Dashboard />;
};

export default Index;
