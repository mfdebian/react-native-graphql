import React from "react";
import { useQuery, gql } from "@apollo/client";

type Launch = {
  id: string;
  mission_name: string;
};

type LaunchesData = {
  launchesPast: Launch[];
}

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export function Launches() {
  const { data, loading, error } = useQuery<LaunchesData>(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1 style={{ padding: 10 }}>SpaceX Launches</h1>
      <ul>
        {data?.launchesPast.map((launch: Launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}
