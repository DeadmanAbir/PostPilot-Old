import { selector } from "recoil";
import { checkState, connectedCredentials, userProfileDetails } from "./Variables";
// configs/recoil.ts
import { RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
export const getLogin=selector({
    key: "c",
    get: ({get})=>{
        const check =get(checkState);
        return check.isLoginOpen;
    }
});

export const getSignUp=selector({
    key: "fg",
    get: ({get})=>{
        const check =get(checkState);
        return check.isSignUpOpen;
    }
});

export const userName=selector({
    key: "ik",
    get: ({get})=>{
        const check =get(connectedCredentials);
        return check.name;
    }
});

export const userToken=selector({
    key: "ln",
    get: ({get})=>{
        const check =get(connectedCredentials);
        return check.token;
    }
});

export const getUserProfileDetails=selector({
    key: "pq",
    get: ({get})=>{
        const check =get(userProfileDetails);
        return check.isProfile;
    }
});