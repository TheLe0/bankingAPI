import { AppConfig } from '../../src/config';

test('read DATABASE_TYPE env var test', () => {
    expect(AppConfig.DatabaseType).toBeDefined();
});