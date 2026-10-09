type UseLongPressOptions = {
    onLongPress: () => void;
    onSinglePress?: () => void;
    delay?: number;
};
export declare function useLongPress({ onLongPress, onSinglePress, delay }: UseLongPressOptions): {
    onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchStart: (e: React.MouseEvent | React.TouchEvent) => void;
    onTouchEnd: () => void;
    onClick: (e: React.MouseEvent) => void;
    onContextMenu: (_e: React.MouseEvent) => void;
};
export {};
//# sourceMappingURL=long-press.d.ts.map