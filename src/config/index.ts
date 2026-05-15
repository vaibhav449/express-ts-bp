import dotenv from "dotenv";
dotenv.config();

// type of server configuration

type ServerConfig = {
    port: string | undefined
}

export const serverConfig: ServerConfig ={
    port: process.env.PORT
} 