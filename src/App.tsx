import { useQuery } from '@apollo/client';
import React from 'react';

import { FETCH_INFO } from './fetchInfo';
import { Repos } from './Repos';

interface InfoResponse {
  viewer: {
    name: string
    login: string
    bio: string
    avatarUrl: string
    repositories: {
      totalCount: number
    }
  }
}

export const App: React.FC = () => {
  const { loading, error, data } = useQuery<InfoResponse>(FETCH_INFO);

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="App container mt-5">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="card">
            <img className="card-img-top" src={data?.viewer.avatarUrl} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">{data?.viewer.name}</h4>
              <p className="font-weight-light">@{data?.viewer.login}</p>
              <p className="card-text">{data?.viewer.bio}</p>
              <a href="https://github.com/ivanstnsk" className="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <h1 className="text-primary">
            <i className="bi bi-diagram-2-fill"></i>
            Github repos {data?.viewer.repositories.totalCount}
          </h1>
          {!loading && !error && (
            <Repos />
          )}
        </div>
      </div>
    </div>
  );
}

