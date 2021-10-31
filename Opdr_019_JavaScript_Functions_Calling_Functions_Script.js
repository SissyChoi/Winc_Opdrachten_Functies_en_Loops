//Hey kiddo
const ageCheck = function (age) {
    if (age >= 18) {
        return "True"
    }
    else {
        return "False"
    }
};

const adultCheck = function (age) {
    if (ageCheck(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}; 

console.log(adultCheck(15));
console.log(adultCheck(25));


//VAT exercise 1
const calculateVat = function (basePrice, VAT) {
    return basePrice * (VAT / 100); 
};

const priceIncludingVat = function(basePrice, VAT) {
    const vatRate = calculateVat(basePrice, VAT);
    return basePrice + vatRate;
};

console.log(priceIncludingVat(3000, 21));
console.log(priceIncludingVat(2000, 9));
console.log(priceIncludingVat(1000, 0));


//VAT exercise 2
const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice (priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return (basePrice, VAT);
};

console.log(calculateBasePriceAndVAT(1210, 21)); 
console.log(calculateBasePriceAndVAT(2.18, 9));
