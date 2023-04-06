export const usePriceHelper = () => {
    const formatPrice = (price) => {
        return price.toString().replace(".", ",");
    }

    return {
        formatPrice
    }
}