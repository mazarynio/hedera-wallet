export enum SoftwareOption {
    Keystore = "Keystore",
    Mnemonic = "Mnemonic",
    Key = "PrivateKey",
}

export interface SoftwareAttributes {
    supported: boolean;
    title: string;
    description: string;
    value: SoftwareOption;
    route: string;
    id: number;
}


// Note: use translation keys for title, description
export const SoftwareOptions: Map<SoftwareOption, SoftwareAttributes> = new Map(
  [
    [
      SoftwareOption.Keystore,
      {
        id: 1,
        supported: true,
        title: "Keystore.title",
        description: "Keystore.description",
        value: SoftwareOption.Keystore,
        route: "keystore",
      },
    ],
    [
      SoftwareOption.Mnemonic,
      {
        id: 2,
        supported: true,
        title: "Mnemonic.title",
        description: "Mnemonic.description",
        value: SoftwareOption.Mnemonic,
        route: "mnemonic",
      },
    ],
    [
      SoftwareOption.Key,
      {
        id: 3,
        supported: true,
        title: "Key.title",
        description: "Key.description",
        value: SoftwareOption.Key,
        route: "key",
      },
    ],
  ]
);
