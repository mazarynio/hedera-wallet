export enum HardwareOption {
    Ledger = "ledger",
    Finney = "finney",
    Bitbox = "bitbox",
    Trezor = "trezor",
    Secalot = "secalot",
    Keepkey = "keepkey",
}

export interface HardwareAttributes {
    supported: boolean;
    title: string;
    description: string;
    value: HardwareOption;
    route: string;
    id: number;
}


// Note: use translation keys for title, description
export const HardwareOptions: Map<HardwareOption, HardwareAttributes> = new Map(
  [
    [
      HardwareOption.Ledger,
      {
        id: 1,
        supported: true,
        title: "Ledger.title",
        description: "Ledger.description",
        value: HardwareOption.Ledger,
        route: "ledger",
      },
    ],
    [
      HardwareOption.Finney,
      {
        id: 2,
        supported: false,
        title: "Finney.title",
        description: "Finney.description",
        value: HardwareOption.Finney,
        route: "finney",
      },
    ],
    [
      HardwareOption.Bitbox,
      {
        id: 3,
        supported: false,
        title: "Bitbox.title",
        description: "Bitbox.description",
        value: HardwareOption.Bitbox,
        route: "bitbox",
      },
    ],
    [
      HardwareOption.Trezor,
      {
        id: 4,
        supported: false,
        title: "Trezor.title",
        description: "Trezor.description",
        value: HardwareOption.Trezor,
        route: "trezor",
      },
    ],
    [
      HardwareOption.Secalot,
      {
        id: 5,
        supported: false,
        title: "Secalot.title",
        description: "Secalot.description",
        value: HardwareOption.Secalot,
        route: "secalot",
      },
    ],
    [
      HardwareOption.Keepkey,
      {
        id: 6,
        supported: false,
        title: "KeepKey.title",
        description: "KeepKey.description",
        value: HardwareOption.Keepkey,
        route: "keepkey",
      },
    ],
  ]
);
