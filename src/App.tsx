import React from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { AuthProvider } from './context/Auth.context'
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div>
        <Routes/>
        <GlobalStyles />
      </div>
    </AuthProvider>
  );
};

export default App;
