import SimpleCrypto from "simple-crypto-js";

const cryptographyService = () => {
    const simpleCrypto = new SimpleCrypto("T()o(){o){R}");
    return simpleCrypto;
};

class SecureStorage {
    public storeItemEncrypt = (key: string, value: string | number | boolean | object) => {
        if (typeof window !== "undefined") {
            const encrypted = cryptographyService().encrypt(value);
            localStorage.setItem(key, encrypted);
        }
    };
    public getItemDecrypt = (key: string) => {
        if (typeof window !== "undefined") {
            const gotten = localStorage.getItem(key);
            if (gotten) {
                return cryptographyService().decrypt(gotten) as unknown as string;
            } else {
                return null;
            }
        }
    };
}

const secureStorage = new SecureStorage();
export const getSecureLocalStorage = (key: string) => {
    try {
        const token = secureStorage.getItemDecrypt(key);
        return token;
    } catch (e) {
        return null;
    }
};

export const setSecureLocalStorage = (key: string, value: string) => {
    secureStorage.storeItemEncrypt(key, value);
};

