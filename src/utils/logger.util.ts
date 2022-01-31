import winston, { format } from 'winston';

const { combine, timestamp, printf, label, prettyPrint } = format;

const logFormat = printf(({ type, text, time }) => `${time} ${type} : ${text}`);

const ignorePrivate = format((info, opts) => {
    if (info.private && process.env.NODE_ENV === 'production') { return false; }
    return info;
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        ignorePrivate(),
        timestamp(),
        logFormat,
        prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: []
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: combine(
            label({ label: 'log' }),
            ignorePrivate(),
            timestamp(),
            logFormat,
            prettyPrint()
        )
    }));
}
export default logger;