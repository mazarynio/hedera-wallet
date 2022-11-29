import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useState,
} from "react"


export function createCtx(defaultValue: any) {
    type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
    const defaultUpdate: UpdateType = () => defaultValue;
    const ctx = createContext({
        mnemonicPhrase: defaultValue,
        setMnemonicPhrase: defaultUpdate,
    });

    function Provider(props: PropsWithChildren<{}>) {
        const [mnemonicPhrase, setMnemonicPhrase] = useState(defaultValue);
        return <ctx.Provider value={{ mnemonicPhrase, setMnemonicPhrase }} {...props} />;
    }

    return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}


