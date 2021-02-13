module.exports = function(sequelize, Datatypes) {
const Todo = sequelize.define("Todo", {
    text: Datatypes.STRING,
    complete:{
        type: Datatypes.BOOLEAN,
        default: false
    }
})
return Todo
}