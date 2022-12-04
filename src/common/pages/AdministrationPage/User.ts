/* @TODO: share types with api.ts */
export type User = {
  id: string,
  url: string,
  data: {
    login: string,
    name: string,
  }
};
