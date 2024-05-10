import { gql } from "@urql/next";

export const SignInMutation = gql`
    mutation SignIn($input: AuthInput!) {
    signin(input: $input) {
        token
    }
    }
`