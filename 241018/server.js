import { ApolloServer, gql } from "apollo-server";

let tweets = [
  {
    id: "1",
    text: "First One!",
    userId: "2",
  },
  {
    id: "2",
    text: "Second One!",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "YEJI",
    lastName: "KIM",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Musk",
  },
];

const typeDefs = gql`
type User {
  id: ID!
  """
  Is the sum of firstName + lastName as a String
  """
  username: String!
  firstName: String!
  lastName: String!
}
  """
  Tweet object represents a resource for a Tweet
  """
type Tweet {
  id: ID!
  text: String!
  author: User
}
type Query {
  allTweets: [Tweet!]!
  allUsers: [User!]!
  allMovies: [Movie!]!
  tweet(id: ID!): Tweet
  movie(id: String!): Movie
}
type Mutation {
  postTweet(text: String, userId: ID): Tweet!
  """
  Delete a Tweet if found, else return false!
  """
  deleteTweet(id: ID!): Boolean!
}
  type Movie {
  id: Int!
  url: String!
  imdb_code: String!
  title: String
  title_english: String
  title_long: String
  slug: String!
  year: Int!
  rating: Float!
  runtime: Float!
  genres: [String]!
  summary: String
  description_full: String!
  synopsis: String
  yt_trailer_code: String!
  language: String!
  background_image: String!
  background_image_original: String!
  small_cover_image: String
  medium_cover_image: String!
  large_cover_image: String!
  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    allUsers() {
      console.log("userName called");
      return users;
    },
    tweet(root, {id}) {    // root = 반드시 첫번째 인자값으로 들어와야 한다
      return tweets.find((tweet) =>  tweet.id === id);
    },
    // movie라는 함수 필드가 query타입 안에 있었기 때문에 Query안에 있어야 한다.
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((json) => json.data.movies);
    },
    movie(root, {id}) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => json.data.movie);
    }
  },
  // post라는 메서드방식을 통해 기존값을 돌연변이형식으로 업데이트시킬때 이용하는 방식
  Mutation: {
    postTweet(root, {text, userId}) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      // 사용자로부터 데이터를 받아 원본데이터에 추가를 하고, 반환값은 새로 들어온 데이터만
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, {id}) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    }
  },
  // 필수값인데도 값을 가지고 있지 않을 때 : Dynamic field
  User: {
    username({firstName}) {
      return firstName;
    },
    username({lastName}) {
      return lastName;
    },
    username({firstName, lastName}) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({userId}) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다!");
        return null; 
      }
      return result;
    }
  }
};


// typedefs에서 데이터들의 타입 구조를 잡아주고, resolver함수에서 기능을 구현 및 실행한다.
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);  // 터미널에 에러 및 현 상태를 보여주는 임의의 콘솔
});
