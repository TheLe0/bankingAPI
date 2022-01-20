import { Account } from '../../src/model';

const account = new Account("100", 10);

test('read account num from object account test', () => {
    expect(account.getAccountNum()).toBe("100");
});

test('read balance from object account test', () => {
    expect(account.getBalance()).toBe(10);
});
