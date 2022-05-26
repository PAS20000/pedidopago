export const breakPoints = [1024, 761]

export const Media = (index:number) : string => {
    return `@media (max-width: ${breakPoints[index]}px)`
}