import { useContext, useState } from "react";
import FlashContext, { FlashContextApi } from "./Context";
import { Flash, FlashType } from "../../../../services/types";

interface AppFlashProps {
    children: JSX.Element;
}

const SingleFlash = ({ flash }: { flash: Flash }) => {
    console.log(flash);
    return <div>Flash</div>;
};

const getFlashUniqueId = (flashes: Flash[]): number => {
    let findingUniqueIdInProgress = true;
    let uniqueId = Math.random();

    while (findingUniqueIdInProgress) {
        if (flashes.some((flash) => flash.id === uniqueId)) {
            uniqueId = Math.random();
            continue;
        }
        findingUniqueIdInProgress = false;
    }

    return uniqueId;
};

export const AppFlash = ({ children }: AppFlashProps) => {
    const [flashes, setFlashes] = useState<Flash[]>([]);

    const addFlash = (type: FlashType, message: string) => {
        const newFlash = {
            type,
            message,
            id: getFlashUniqueId(flashes),
        };
        setFlashes((flashes) => [...flashes, newFlash]);
    };

    const removeFlash = (flashId: number) => {
        const flashIndex = flashes?.findIndex((flash) => flash.id === flashId);
        setFlashes((flashes) => flashes.splice(flashIndex, 1));
    };

    const contextValue = {
        flashes,
        addFlash,
        removeFlash,
    } as FlashContextApi;

    return (
        <FlashContext.Provider value={contextValue}>
            {flashes.map((flash) => (
                <SingleFlash flash={flash} key={flash.id} />
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
