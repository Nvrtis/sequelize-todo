const express = require("express")
const app = express()
const PORT = 3000
const db = require("./models/index")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));




db.sequelize.sync().then(() => {
    app.listen(PORT, ()=> {
        console.log(`App listening on http://localhost:${PORT}`);
      });
    }
)



