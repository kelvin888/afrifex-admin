export const formatNumber = (num: number | undefined) => {
    if (num) {
        return new Intl.NumberFormat().format(num)
    }
    return num;
}