const express = require("express")
const app = express()
const PORT = 3000
const db = require("./models/index")
const routes = require('./routes/api-routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

app.use(routes);


db.sequelize.sync().then(() => {
    app.listen(PORT, ()=> {
        console.log(`App listening on http://localhost:${PORT}`);
      });
    }
)



