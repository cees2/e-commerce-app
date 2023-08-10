export const formatMoney = ({
    amount,
    currency,
}: {
    amount: number;
    currency: string;
}) => {
    return `${amount} ${currency}`;
};
