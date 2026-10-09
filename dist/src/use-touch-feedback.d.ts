export type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection';
type TouchFeedbackOptions = {
    haptic?: HapticFeedbackType;
    visual?: boolean;
    audio?: boolean;
    duration?: number;
};
/**
 * Hook for providing touch feedback on mobile devices
 * Combines haptic, visual, and audio feedback for better user experience
 */
export declare function useTouchFeedback(): {
    trigger: (options?: TouchFeedbackOptions) => boolean;
    triggerHaptic: (type?: HapticFeedbackType) => void;
    triggerAudio: (frequency?: number, duration?: number) => void;
    createTouchHandlers: (onPress: () => void, options?: TouchFeedbackOptions) => {
        onTouchStart: ((e: React.TouchEvent) => void) | undefined;
        onTouchEnd: ((e: React.TouchEvent) => void) | undefined;
        onClick: (() => void) | undefined;
    };
    isTouch: boolean;
};
export {};
//# sourceMappingURL=use-touch-feedback.d.ts.map