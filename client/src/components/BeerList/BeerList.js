import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import BeerCard from '../BeerCard/BeerCard';
import './BeerList.css';

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        getBeers {
          id
          name
          picture
          brewery {
            name
          }
          reviewer {
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <section className="BeerList">
          {data.getBeers.map(({ id, name, picture, brewery, reviewer }) => (
            <BeerCard key={id} name={name} picture={picture} brewery={brewery} reviewer={reviewer} />
          ))}
        </section>
      );
    }}
  </Query>
);

export default ExchangeRates;
