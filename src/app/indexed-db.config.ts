import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'todos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'done', keypath: 'done', options: { unique: false } },
      ],
    },
  ],
};
