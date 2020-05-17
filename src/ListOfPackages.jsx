import React from 'react';
import { useQuery } from 'graphql-hooks';
import * as queries from './queries';

export const ListOfPackages = () => {
  const { loading, error, data } = useQuery(queries.getPackages);

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <ul>
      {data.viewer.packages.nodes.map(({ id, name, latestVersion: { version } }) => (
        <li key={id}>
          {name} ({version})
        </li>
      ))}
    </ul>
  );
};
