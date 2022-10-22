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
}

export const CreateOptions: Map<CreateOptionType, CreateAttributes> = new Map([
    [
        CreateOptionType.Software,
        {
            supported: true,
            title: "Software.title",
            description: "Software.description",
            value: CreateOptionType.Software,
            route: "create.software",
        },
    ],
    [
        CreateOptionType.Hardware,
        {
            supported: true,
            title: "Hardware.title",
            description: "Hardware.description",
            value: CreateOptionType.Hardware,
            route: "access.hardware", // same process as access
        },
    ],
]);