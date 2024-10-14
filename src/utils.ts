export function useIsMobile() {
    const width = window.innerWidth;
    return width <= 480;
}

export function useIsTablet() {
    const width = window.innerWidth;
    return width <= 768 && width > 480;
}