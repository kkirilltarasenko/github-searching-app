import { nanoid } from '@reduxjs/toolkit';
import { RepositoryDetailsType } from 'src/types/repositoryType';
import { format } from 'date-fns';

type ReturnType = {
  description: string,
  id: string,
  name: string,
  url: string,
  stargazerCount: number,
  lastCommitDate: string,
  owner: {
    login: string,
    url: string,
    avatarUrl: string,
  },
  languages: { id: string, value: string }[],
}

export function parseRepository(repository: RepositoryDetailsType): ReturnType {
  const { description, id, name, url, stargazerCount, updatedAt, owner, languages } = repository.repository;
  const lastCommitDate = format((new Date(updatedAt)),'HH:mm, yyyy-MM-dd');
  const parsedLanguages = languages.edges.reduce((acc: { id: string, value: string }[], el) => {
    acc.push({
      id: nanoid(),
      value: el.node.name,
    });
    return acc;
  }, []);

  return {
    description: description,
    id: id,
    name: name,
    url: url,
    stargazerCount: stargazerCount,
    lastCommitDate: lastCommitDate,
    owner: {
      login: owner.login,
      url: owner.url,
      avatarUrl: owner.avatarUrl,
    },
    languages: parsedLanguages,
  }
}
