import SimpleCrypto from "simple-crypto-js";
import Cookies from "js-cookie";

const cryptographyService = () => {
    const simpleCrypto = new SimpleCrypto("T()o(){o){R}");
    return simpleCrypto;
};

class SecureStorage {
    public storeItemEncrypt = (key: string, value: string | number | boolean | object) => {
        if (typeof window !== "undefined") {
            const encrypted = cryptographyService().encrypt(value);
            localStorage.setItem(key, encrypted);
            Cookies.set(key, encrypted);
        }
    };

    public getItemDecrypt = (key: string) => {
        if (typeof window !== "undefined") {
            const gotten = Cookies.get(key);
            if (gotten) {
                return cryptographyService().decrypt(gotten) as unknown as string;
            } else {
                return null;
            }
        }
    };

}

const secureStorage = new SecureStorage();
export const getSecureCookieStorage = (key: string) => {
    try {
        const token = secureStorage.getItemDecrypt(key);
        return token;
    } catch (e) {
        return null;
    }
};

export const setSecureCookieStorage = (key: string, value: string) => {
    secureStorage.storeItemEncrypt(key, value);
};

