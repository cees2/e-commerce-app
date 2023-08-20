export const formatMoney = ({
    amount,
    currency,
}: {
    amount: number;
    currency: string;
}) => {
    return `${amount} ${currency}`;
};

export const capitalizeFirstLetter = (word: string) =>
    `${word?.charAt(0).toUpperCase()}${word?.slice(1)}`;
