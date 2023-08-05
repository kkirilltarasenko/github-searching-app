export type RepositoryType = {
  node: {
    description: string,
    id: string,
    name: string,
    url: string,
    stargazerCount: number,
    updatedAt: string,
    owner: {
      login: string,
      url: string,
      avatarUrl: string,
    },
    languages: {
      edges: { node: { name: string } }[]
    }
  },
  cursor: string,
};

export type RepositoryDetailsType = {
  repository: {
    description: string,
    id: string,
    name: string,
    url: string,
    stargazerCount: number,
    updatedAt: string,
    owner: {
      login: string,
      url: string,
      avatarUrl: string,
    },
    languages: {
      edges: { node: { name: string } }[]
    },
  }
}