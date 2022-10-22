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
}


// Note: use translation keys for title, description
export const HardwareOptions: Map<HardwareOption, HardwareAttributes> = new Map(
  [
    [
      HardwareOption.Ledger,
      {
        supported: true,
        title: "Ledger.title",
        description: "Ledger.description",
        value: HardwareOption.Ledger,
        route: "access.hardware.ledger",
      },
    ],
    [
      HardwareOption.Finney,
      {
        supported: false,
        title: "Finney.title",
        description: "Finney.description",
        value: HardwareOption.Finney,
        route: "access.hardware.finney",
      },
    ],
    [
      HardwareOption.Bitbox,
      {
        supported: false,
        title: "Bitbox.title",
        description: "Bitbox.description",
        value: HardwareOption.Bitbox,
        route: "access.hardware.bitbox",
      },
    ],
    [
      HardwareOption.Trezor,
      {
        supported: false,
        title: "Trezor.title",
        description: "Trezor.description",
        value: HardwareOption.Trezor,
        route: "access.hardware.trezor",
      },
    ],
    [
      HardwareOption.Secalot,
      {
        supported: false,
        title: "Secalot.title",
        description: "Secalot.description",
        value: HardwareOption.Secalot,
        route: "access.hardware.secalot",
      },
    ],
    [
      HardwareOption.Keepkey,
      {
        supported: false,
        title: "KeepKey.title",
        description: "KeepKey.description",
        value: HardwareOption.Keepkey,
        route: "access.hardware.keepkey",
      },
    ],
  ]
);
