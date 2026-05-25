export class customError extends Error {
    statusCode:number;
    codeKisneLikhaTha:string;
    name: string;   
    constructor(message:string,statusCode?:number,codeKisneLikhaTha?:string,name?:string){
        super(message);
        this.statusCode = statusCode || 500;
        this.codeKisneLikhaTha = codeKisneLikhaTha || "Unknown author of the error";
        this.name = name || "UnknownError";
    }
}

export class InternalServerError extends customError {
    constructor(message:string,codeKisneLikhaTha?:string){
        super(message,500,codeKisneLikhaTha,"InternalServerError");
    }
}