export const groupBy = (xs, key) => {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const stringifyPrice = ({ value, currency }) =>
  String(value).concat(getCurrencySymbol(currency));

const getCurrencySymbol = currency => {
  switch (currency) {
    case "EUR":
      return "€";

    case "USD":
      return "$";

    default:
      return "lei";
  }
};
