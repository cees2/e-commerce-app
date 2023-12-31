import { useCallback, useContext, useEffect, useState } from "react";
import FlashContext, { FlashContextApi } from "./Context";
import { Flash, FlashType } from "../../../services/types";
import SuccessSVG from "../../../graphics/Common/success.svg";
import WarningSVG from "../../../graphics/Common/warning.svg";
import ErrorSVG from "../../../graphics/Common/error.svg";
import CloseSVG from "../../../graphics/Common/close.svg";
import classes from "./Flash.module.css";

interface SingleFlashProps {
    flash: Flash;
    onFlashRemove: (flashId: string) => void;
    flashIndex: number;
}

const getFlashConfig = (flashType: FlashType) => {
    const { success, warning, error } = classes;

    switch (flashType) {
        case FlashType.SUCCESS:
            return {
                className: success,
                svg: SuccessSVG,
            };
        case FlashType.WARNING:
            return {
                className: warning,
                svg: WarningSVG,
            };
        case FlashType.ERROR:
            return {
                className: error,
                svg: ErrorSVG,
            };
    }
};

const SingleFlash = ({
    flash,
    onFlashRemove,
    flashIndex,
}: SingleFlashProps) => {
    const { type, message } = flash;
    const { className, svg } = getFlashConfig(type);
    const { flashWrapper, flashIcon, flashMessage, closeFlashwrapper } =
        classes;

    const flashRemoveHandler = useCallback(
        () => onFlashRemove(flash.id),
        [flash.id, onFlashRemove],
    );

    const topOffset = { marginTop: `${(flashIndex + 1) * 4}rem` };

    useEffect(() => {
        setTimeout(() => flashRemoveHandler(), 5000);
    }, [flashRemoveHandler]);

    return (
        <div className={`${flashWrapper} ${className}`} style={topOffset}>
            <img src={svg} className={`ml-1 ${flashIcon}`} />
            <span className={flashMessage}>{message}</span>
            <div className={closeFlashwrapper} onClick={flashRemoveHandler}>
                <img src={CloseSVG} className={`${flashIcon}`} />
            </div>
        </div>
    );
};

export const AppFlash = ({ children }: { children: JSX.Element }) => {
    const [flashes, setFlashes] = useState<Flash[]>([]);

    const addFlash = useCallback(
        (type: FlashType, message: string) => {
            const newFlash = {
                type,
                message,
                id: crypto.randomUUID(),
            };
            setFlashes((flashes) => [...flashes, newFlash]);
        },
        [],
    );

    const removeFlash = useCallback(
        (flashId: string) => {
            const flashIndex = flashes?.findIndex(
                (flash) => flash.id === flashId,
            );
            setFlashes((flashes) => {
                const newFlashes = [...flashes];
                newFlashes.splice(flashIndex, 1);
                return newFlashes;
            });
        },
        [flashes],
    );

    const contextValue = {
        flashes,
        addFlash,
        removeFlash,
    } as FlashContextApi;

    return (
        <FlashContext.Provider value={contextValue}>
            {flashes.map((flash, index) => (
                <SingleFlash
                    flash={flash}
                    onFlashRemove={removeFlash}
                    flashIndex={index}
                    key={flash.id}
                />
            ))}
            {children}
        </FlashContext.Provider>
    );
};

export const useFlashContext = () => {
    const context = useContext(FlashContext);
    if (!context) throw new Error("Context has been used outside of provider");
    return context;
};
