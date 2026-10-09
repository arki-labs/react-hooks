/**
 * Hook to detect if we're on the client side after hydration.
 * Returns false during SSR and initial hydration, true after first effect runs.
 *
 * This is useful for:
 * - Conditionally rendering client-only content
 * - Avoiding hydration mismatches for dynamic content
 */
export declare function useIsClient(): boolean;
//# sourceMappingURL=is-client.d.ts.map