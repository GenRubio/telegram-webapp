export const usePriceHelper = () => {
    const formatPrice = (price) => {
        //nesesito pasar el precio a float y despues cambiar el punto por la coma
        let priceFloat = parseFloat(price);
        let priceString = priceFloat.toString();
        let priceArray = priceString.split('.');
        let priceFormated = priceArray[0] + ',' + priceArray[1];
        return priceFormated;
    }

    return {
        formatPrice
    }
}