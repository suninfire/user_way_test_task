import * as http from 'http';
import * as express from 'express';
import * as dotenv from 'dotenv';

import {urlRouter} from './routes/url.router'
import sequelize from './DataBaseModels/urlModel';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/shorteningLink', urlRouter);

server.listen(process.env.PORT, async () => {
    try {
    await sequelize.sync();

    console.log('Database synced successfully.');
    console.log('App listen', process.env.PORT);

}catch (error) {
    console.error('Database synchronization failed:', error);
}
});


