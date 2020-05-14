module.exports = (sequelize, DataTypes) => {

    let Student = sequelize.define('Guest', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, state: {
            type: DataTypes.STRING,
            allowNull: false,
        }, present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    Student.sync({force: false}).then( () => {
        console.log('synced guest table')
    })

    return Guest
}