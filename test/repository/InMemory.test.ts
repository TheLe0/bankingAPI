import { DatabaseType } from '../../src/config';
import { IRepository, RepositorySingleton } from '../../src/repository';


let repository :IRepository;

beforeEach(() => {
    repository = RepositorySingleton.getInstance(DatabaseType.IN_MEMORY);
    repository.resetDatabase();
});

test('reset data on in memory repository test', () => {
    expect(repository.resetDatabase()).toBe(true);
});

test('get balance of an account that does not exist test', () => {
    expect(repository.getBalanceByAccountNum("100")).toBeUndefined();
});

test('create an new account test', () => {
    
    const account = repository.createAccount("100", 10);
    
    expect(account.id).toBe("100");
    expect(account.balance).toBe(10);
});

test('create a duplicate account test', () => {
    
    let account = repository.createAccount("100", 10);
    account = repository.createAccount("100", 100);

    expect(account.id).toBe("100");
    expect(account.balance).toBe(110);
});

test('get balance of an account that exists test', () => {
    
    const account = repository.createAccount("100", 10);
    const balance = repository.getBalanceByAccountNum(account.id);

    expect(balance).toBe(account.balance);
});