import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login($UserData: UserLoginInput!) {
    login(UserData: $UserData) {
      id,
      name,
      email,
      accessToken
    }
  }
`;
