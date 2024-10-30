import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Header = styled.header``;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul`
  width: 700px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0 15px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 30px;
  height: auto;
  margin: 0 10px;
`;

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ['allCoins'],
    queryFn: fetchCoins,
  });

  return (
    <Container>
        <Helmet>
          <title>Coin List</title>
        </Helmet>
      <Header>
        <Title>Coins List</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                🎖️Now Rank: {coin.rank}
                <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
