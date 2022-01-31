import app from './index';
import logger from './utils/logger.util';
const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.log({ private: true, level: 'info', message: `app listening at http://localhost:${port}` })
})