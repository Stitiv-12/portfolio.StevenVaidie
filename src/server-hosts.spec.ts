import { getAllowedServerHosts } from './server-hosts';

describe('getAllowedServerHosts', () => {
  it('should leave platform hosts empty when no environment is configured', () => {
    expect(getAllowedServerHosts({})).toEqual([]);
  });

  it('should combine exact Vercel hosts with custom SSR hosts without duplicates', () => {
    expect(getAllowedServerHosts({
      NG_ALLOWED_HOSTS: ' custom.example, Shared.Example ,',
      VERCEL_URL: 'preview.vercel.app',
      VERCEL_BRANCH_URL: 'branch.vercel.app',
      VERCEL_PROJECT_PRODUCTION_URL: 'shared.example',
    })).toEqual(['custom.example', 'shared.example', 'preview.vercel.app', 'branch.vercel.app']);
  });

  it('should reject URLs, paths, ports, credentials and wildcard hosts', () => {
    expect(getAllowedServerHosts({
      NG_ALLOWED_HOSTS: '*, *.vercel.app, https://bad.example, bad.example/path, bad.example:4000, user@bad.example, bad.example?query, bad.example#hash, allowed.example',
    })).toEqual(['allowed.example']);
  });
});
