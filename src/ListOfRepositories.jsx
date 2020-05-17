import React from 'react';
import { useQuery } from 'graphql-hooks';
import * as queries from './queries';

export const ListOfRepositories = () => {
  const { loading, error, data } = useQuery(queries.getRepositories, {
    variables: {
      count: 5,
    },
  });

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <ul>
      {data.viewer.repositories.nodes.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
