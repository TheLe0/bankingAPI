import { ServerConfig } from '../../src/config';

test('read DATABASE_TYPE env var test', () => {
    expect(ServerConfig.DatabaseType).toBeDefined();
});
