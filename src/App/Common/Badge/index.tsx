import { BadgeStatus } from "../services/types";
import classes from "../styles/Badge.module.css";

interface Props {
    title: string;
    status: BadgeStatus;
}

const getBadgeClassName = (status: BadgeStatus) => {
    let className = "";

    switch (status) {
        case BadgeStatus.BESTSELLER:
            className = "primary";
            break;
        default:
            className = "";
    }

    return classes[className];
};

export const Badge = ({ title, status }: Props) => {
    const { badge } = classes;
    const badgeClassName = getBadgeClassName(status);

    return <div className={`${badge} ${badgeClassName}`}>{title}</div>;
};
