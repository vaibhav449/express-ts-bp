import { format } from "node:path";
import winston from "winston";
import wistonDailyRotateFile from "winston-daily-rotate-file";
import {getCorrelationId} from "../helper/request.helper.js"
const logger=winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        winston.format.json(),
        winston.format.printf(({timestamp, level, message,...data}) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message} , ${JSON.stringify(data)}, CorrelationId : ${getCorrelationId()}`;
        })
    ),
    transports:[
        new winston.transports.Console(),
        new wistonDailyRotateFile({
            filename: "logs/application-%DATE%.log",
            datePattern: "YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "14d"
        })
    ]
});

export default logger;