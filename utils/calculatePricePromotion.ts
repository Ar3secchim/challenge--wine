export function calculatePricePromotion(price: number, perctPromotion: number) {
  let descont = (price * perctPromotion) / 100;
  let pricePromotion = price - descont;
  return pricePromotion;
}
