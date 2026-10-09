export type ViewportType = 'mobile' | 'tablet' | 'desktop';
export type ViewportInfo = {
    type: ViewportType;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    width: number;
    height: number;
    isTouch: boolean;
};
export declare function useViewport(): ViewportInfo;
//# sourceMappingURL=use-viewport.d.ts.map