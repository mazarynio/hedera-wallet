import { HardwareOption } from "./HardwareOptions";
import { SoftwareOption } from "./SoftwareOptions";


export type CreateOption = HardwareOption | SoftwareOption;

export enum CreateOptionType {
    Software = "Software",
    Hardware = "Hardware",
}

export interface CreateAttributes {
    supported: boolean;
    title: string;
    description: string;
    value: CreateOptionType;
    route: string;
    id: number;
}

export const CreateOptions: Map<CreateOptionType, CreateAttributes> = new Map([
    [
        CreateOptionType.Software,
        {
            id: 1,
            supported: true,
            title: "Software.title",
            description: "Software.description",
            value: CreateOptionType.Software,
            route: "software",
        },
    ],
    [
        CreateOptionType.Hardware,
        {
            id: 2,
            supported: true,
            title: "Hardware.title",
            description: "Hardware.description",
            value: CreateOptionType.Hardware,
            route: "hardware", // same process as access
        },
    ],
]);


