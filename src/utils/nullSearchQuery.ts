export function nullSearchQuery(): string {
  return `{
   viewer {
     ... on User {
      repositories(first: 3) {
        edges {
          node {
            ... on Repository {
              name
          id
          description
          url
          stargazerCount
          updatedAt
          owner {
            ... on RepositoryOwner {
              login
              url
              avatarUrl
            }
          }
          languages(first: 10) {
            edges {
              node {
                ... on Language {
                  name
                }
              }
            }
          }
            }
          }
        }
      }
    }
   }
}`
}