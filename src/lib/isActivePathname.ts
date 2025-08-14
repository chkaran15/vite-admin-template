export const isActivePathname = (
    currentPathname: string,
    targetPathname: string,
    exact: boolean = false
): boolean => {
    if (exact) {
        return currentPathname === targetPathname;
    }
    
    // Special case for root path
    if (targetPathname === '/') {
        return currentPathname === '/';
    }
    
    return currentPathname === targetPathname || 
                 currentPathname.startsWith(`${targetPathname}/`);
}