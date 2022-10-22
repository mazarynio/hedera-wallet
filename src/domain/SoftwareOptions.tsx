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
}


// Note: use translation keys for title, description
export const SoftwareOptions: Map<SoftwareOption, SoftwareAttributes> = new Map(
  [
    [
      SoftwareOption.Keystore,
      {
        supported: true,
        title: "Keystore.title",
        description: "Keystore.description",
        value: SoftwareOption.Keystore,
        route: "access.software.keystore",
      },
    ],
    [
      SoftwareOption.Mnemonic,
      {
        supported: true,
        title: "Mnemonic.title",
        description: "Mnemonic.description",
        value: SoftwareOption.Mnemonic,
        route: "access.software.mnemonic",
      },
    ],
    [
      SoftwareOption.Key,
      {
        supported: true,
        title: "Key.title",
        description: "Key.description",
        value: SoftwareOption.Key,
        route: "access.software.key",
      },
    ],
  ]
);
