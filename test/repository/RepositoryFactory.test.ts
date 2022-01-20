import { DatabaseType } from '../../src/config';
import { RepositoryFactory } from '../../src/repository';
import InMemory from '../../src/repository/InMemory';

test('create an instance of in memory repository test', () => {

    const repository = RepositoryFactory.getRepository(DatabaseType.IN_MEMORY);

    expect(repository instanceof InMemory).toBe(true);
});


test('create an instance of not defined databse type test', () => {

    const repository = RepositoryFactory.getRepository(undefined);

    expect(repository).toBeUndefined();
});