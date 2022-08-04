import './App.css';
import { useAuthUser, useLoginWithRedirect } from "@frontegg/react";
import {contextOptions} from './'
const logoutOauth = () => {
    window.location.href = `${contextOptions.baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.origin}/oauth/callback`;
};

const logout = () => {
    window.location.href = `${window.location.origin}/account/logout`;
};

function App() {
  const user  = useAuthUser();
  const loginWithRedirect = useLoginWithRedirect();
    console.log('user', user)
  return (
      <div className="App">
        { user ? (
            <div>
              <div>
                <img src={user?.profilePictureUrl} alt={user?.name}/>
              </div>
              <div>
                <span>Logged in as: {user?.name}</span>
              </div>
              <div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
              <button onClick={() => logout()}>Click me to logout</button>
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
