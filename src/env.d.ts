declare module 'astro-broken-links-checker' {
	export default function brokenLinksChecker(options?: {
		checkExternalLinks?: boolean;
		cacheExternalLinks?: boolean;
		throwError?: boolean;
		linkCheckerDir?: string;
	}): import('astro').AstroIntegration;
}
