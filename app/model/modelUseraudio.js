const { DataTypes } = require("sequelize");

const creatModeluseraudio = (sequelize) => {
    const Audio = sequelize.model('Audio');
    const User = sequelize.model('User');
    const UserAudio = sequelize.define('UserAudio', {
        UserId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        AudioId: {
            type: DataTypes.INTEGER,
            references: {
                model: Audio,
                key: 'id'
            }
        }
    });
    Audio.belongsToMany(User, { through: UserAudio });
    User.belongsToMany(Audio, { through: UserAudio });
    return UserAudio;
}
module.exports = creatModeluseraudio;