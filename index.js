const { port } = require('./src/configs');
const Database = require('./src/data-source');
const app = require('./src/app');
const Logger = require('./src/core/Logger');

(async () => {
    try {
        await Database.connect();
        Logger.info('DB Connection Open!');
        app.listen(port, () => {
            Logger.info(`Server started at port :::: ${port} `);
        });
    } catch (err) {
        await Database.disconnect();
    }
})();
