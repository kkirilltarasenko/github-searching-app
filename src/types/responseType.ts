import { RepositoryType } from 'src/types/repositoryType';

export type ResponseType = {
  data: {
    search?: {
      edges: Array<RepositoryType>,
    },
    viewer: {
      repositories: {
        edges: Array<RepositoryType>,
      }
    }
    repositoryCount: number,
  }
};