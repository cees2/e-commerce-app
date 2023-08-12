import { BadgeStatus } from "../services/types";
import classes from "../styles/Badge.module.css";

interface Props {
    title: string;
    status: BadgeStatus;
}

const getBadgeClassName = (status: BadgeStatus) => {
    switch (status) {
        case BadgeStatus.BESTSELLER:
            return "PRIMARY";
        default:
            return "";
    }
};

export const Badge = ({ title, status }: Props) => {
    const { badge } = classes;
    const badgeClassName = getBadgeClassName(status);

    return <div className={`${badge} ${badgeClassName}`}>{title}</div>;
};
