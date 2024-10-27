import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/db";


const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    createdAt: true,
    updatedAt: true,
    tableName: "user"
})

export {
    User
}