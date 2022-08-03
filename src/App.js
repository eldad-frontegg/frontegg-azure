import './App.css';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import {contextOptions} from './'
const logout = () => {
    window.location.href = `${contextOptions.baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.origin}/oauth/callback`;
};

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  return (
      <div className="App">
        { isAuthenticated ? (
            <div>
              <div>
                <img src={user?.profilePictureUrl} alt={user?.name}/>
              </div>
              <div>
                <span>Logged in as: {user?.name}</span>
              </div>
              <div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
              </div>
            </div>
        ) : (
            <div>
              <button onClick={() => loginWithRedirect()}>Click me to login</button>
              <button onClick={() => logout()}>Click me to logout</button>
            </div>
        )}
      </div>
  );
}

export default App;
