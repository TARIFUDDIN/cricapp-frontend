import React from 'react';
import { CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import MultiStageForm from './components/MultistageForm';
import { AuthProvider, useAuth } from './authContext';


const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <HomePage /> : <MultiStageForm />;
};

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <AppContent />
    </AuthProvider>
  );
}

export default App;
