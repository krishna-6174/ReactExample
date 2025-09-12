
export function calculateTotal(cartItems){
    if(!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
export function calculateButtonDiscount(totalPrice,discountPercentage){
    return totalPrice*discountPercentage/100;
}
export function getCouponDiscount(couponCode,totalPrice){
    const discounts = {
        "BLACKFRIDAY": 20,
        "NEWYEAR": 15,
        "SUMMER": 10,
        "KRISHNA10": 10,
        "WINTER": 5
    };
    let discountPercentage = discounts[couponCode] || 0;
    return {
        isValid : discountPercentage > 0,
        discountPercentage,
        discountAmount : (totalPrice * discountPercentage / 100)
    }
}
