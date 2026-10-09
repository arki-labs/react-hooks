export type SwipeDirection = 'up' | 'down' | 'left' | 'right' | 'tap';
type SwipeGestureOptions = {
    threshold?: number;
    swipeVelocity?: number;
    onSwipe?: (direction: SwipeDirection, deltaX: number, deltaY: number) => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onTap?: () => void;
};
/**
 * Hook for detecting swipe gestures on touch devices
 * Useful for quick number entry and navigation
 */
export declare function useSwipeGesture(options?: SwipeGestureOptions): {
    handlers: {
        onTouchStart: (e: React.TouchEvent) => void;
        onTouchMove: (e: React.TouchEvent) => void;
        onTouchEnd: (_e: React.TouchEvent) => void;
    };
    isSwipping: boolean;
};
/**
 * Hook for number pad swipe input
 * Maps swipe patterns to numbers 1-9
 */
export declare function useNumberSwipeGesture(onNumberSelect: (num: number) => void): {
    handleSwipeOnElement: (element: HTMLElement, startX: number, startY: number, direction: SwipeDirection) => void;
    getZoneFromPosition: (x: number, y: number, bounds: DOMRect) => number;
};
export {};
//# sourceMappingURL=use-swipe-gesture.d.ts.map