import { atom } from "recoil";
// configs/recoil.ts
import { RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
export const checkState=atom({
    key: "a",
    default: {
        isLoginOpen: false,
        isSignUpOpen: false
    }
});

export const connectedCredentials=atom({
    key: "b",
    default: {
        name: null,
        token: null
    }
});

export const userProfileDetails=atom({
    key: "x",
    default: {
        isProfile: false
    }
});