const breakPoints = [1024]

export const Media = (index:number) => {
    return `@media (max-width: ${breakPoints[index]}px)`
}