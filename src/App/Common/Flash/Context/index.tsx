import { createContext } from "react";
import { Flash, FlashType } from "../../../../services/types";

export interface FlashContextApi {
    flashes: Flash[];
    addFlash: (type: FlashType, message: string) => void;
    removeFlash: (flashId: number) => void;
}

const FlashContext = createContext<FlashContextApi>({
    flashes: [] as Flash[],
    addFlash: () => {},
    removeFlash: () => {},
});

export default FlashContext;
