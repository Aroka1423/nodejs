const express = require('express');
const sequelize = require('./config/db');
const PORT = 5000;
const authRouter = require('./routes/authRouter');
const app = express();


app.use(express.json());
app.use("/api", authRouter);

const start = async () => {
    try {
        await sequelize.sync()
            .then(() => {
                console.log("DB connected")
            });

        app.listen(PORT, console.log(`The server is connected to the port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
};

start();