import type { DependencyList } from 'react';
export declare function useAsyncMemo<T>(factory: () => Promise<T> | undefined | null, deps: DependencyList): T | undefined;
export declare function useAsyncMemo<T>(factory: () => Promise<T> | undefined | null, deps: DependencyList, initial: T): T;
//# sourceMappingURL=async-memo.d.ts.map