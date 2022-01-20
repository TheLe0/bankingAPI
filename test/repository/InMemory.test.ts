import { DatabaseType } from '../../src/config';
import { RepositoryFactory, IRepository } from '../../src/repository';


let repository :IRepository;

beforeEach(() => {
    repository = RepositoryFactory.getRepository(DatabaseType.IN_MEMORY);
});

test('reset data on in memory repository test', () => {
    expect(repository.resetDatabase()).toBe(true);
});
