export function generateQuery(
  query: string,
  page?: number,
  prevPage?: number,
  cursor?: { first: string, last: string }
): string {
  let params = ', first: 10';

  if (page !== 1 && page) {
    params = `, first: 10, after: "${cursor?.last}"`;
  }
  if (prevPage > page) {
    params = `, last: 10, before: "${cursor?.first}"`;
  }

  const searchQuery = `search(query: "${query}", type: REPOSITORY${params})`;

  return `{
    ${searchQuery} {
    repositoryCount
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
      cursor
    }
  }
}`
}