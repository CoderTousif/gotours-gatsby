export const SIGNUP_INPUT = gql`
  mutation signup(
    $name: String!
    $email: EmailAddress!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      _id
      email
      photo
      token
    }
  }
`

export const LOGIN_INPUT = gql`
  mutation login($email: EmailAddress!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      photo
      token
    }
  }
`
