import { AsyncLocalStorage } from "node:async_hooks";

type store={
    correlationId:string
}

export const asyncLocalStorage = new AsyncLocalStorage<store>();

export const getCorrelationId = ():string|undefined=>{
    const store = asyncLocalStorage.getStore();
    return store?.correlationId;
}