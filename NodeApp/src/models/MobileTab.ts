import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";



const TabModel = sequelize.define("Tabs", {
    name_tr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: "tabs"
})

export {
    TabModel
}