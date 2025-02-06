import { Connection } from "./db/db.js";
import dotenv from "dotenv"
import  app  from "./app.js";
dotenv.config({
    path: './env'
})


Connection()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server Listen at : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(`Error come from db: ${error}`);

    })
