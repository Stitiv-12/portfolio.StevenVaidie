/** Autorise les hôtes exacts de la plateforme et de la configuration SSR, sans wildcard. */
export function getAllowedServerHosts(environment: Readonly<Record<string, string | undefined>>): string[] {
  const candidates = [
    environment['NG_ALLOWED_HOSTS'],
    environment['VERCEL_URL'],
    environment['VERCEL_BRANCH_URL'],
    environment['VERCEL_PROJECT_PRODUCTION_URL'],
  ];
  const hosts = new Set<string>();

  for (const value of candidates) {
    for (const entry of value?.split(',') ?? []) {
      const hostname = entry.trim().toLowerCase();
      if (!hostname || hostname.includes('*') || !URL.canParse(`https://${hostname}`)) {
        continue;
      }

      const url = new URL(`https://${hostname}`);
      if (url.origin === `https://${hostname}` && !url.port) {
        hosts.add(hostname);
      }
    }
  }

  return [...hosts];
}
