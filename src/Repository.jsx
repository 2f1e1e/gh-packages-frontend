import React, { useState } from 'react';

export const Repository = ({ handleOnSetClick }) => {
  const [token, setToken] = useState();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Token:</label>
      <input type="password" name="token" onChange={({ target }) => setToken(target.value)} />
      <div>
        <input type="button" value="Set" onClick={() => handleOnSetClick(token)} />
      </div>
    </div>
  );
};
