import { useQuery } from '@apollo/client';
import React from 'react';

import { FETCH_REPOS } from './fetchRepos';

interface ReposResponse {
  search: {
    nodes: Array<{
      name: string
      description: string
      id: string
      url: string
    }>
  }
}

export const Repos: React.FC = () => {
  const { loading, error, data } = useQuery<ReposResponse>(FETCH_REPOS);

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <ul className="list-group list-group-flush">
      {data?.search.nodes.map((repo) => {
        return (
          <li className="list-group-item" key={repo.id.toString()}>
            <a className="h5 mb-0 text-decoration-none" href={repo.url}>
              {repo.name}
            </a>
            <p className="small">{repo.description}</p>
          </li>
        )
      })}
    </ul>
  );
}

