import { ServerConfig } from '../../src/config';

test('read HOST env var test', () => {
    expect(ServerConfig.Host).toBeDefined();
});

test('read PORT env var test', () => {
    expect(ServerConfig.Port).toBeDefined();
});
