import React, { useState } from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { ListOfRepositories } from './ListOfRepositories';
import { ListOfPackages } from './ListOfPackages';
import { Repository } from './Repository';
import { useEffect } from 'react/cjs/react.development';

const client = new GraphQLClient({
  url: 'https://api.github.com/graphql',
});

// https://developer.github.com/v4/previews/#github-packages
client.setHeader('Accept', 'application/vnd.github.packages-preview+json');

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      setToken(token);
      client.setHeader('Authorization', `bearer ${token}`);
    }
  }, []);

  const handleOnSetClick = (token) => {
    if (token) {
      setToken(token);
      window.sessionStorage.setItem('token', token);
      client.setHeader('Authorization', `bearer ${token}`);
    }
  };

  return (
    <ClientContext.Provider value={client}>
      <div>
        {!token ? (
          <Repository handleOnSetClick={handleOnSetClick} />
        ) : (
          <>
            Packages: <ListOfPackages />
            Repositories: <ListOfRepositories />
          </>
        )}
      </div>
    </ClientContext.Provider>
  );
};

export default App;
