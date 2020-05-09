
module.exports = (user) => {
    return {
        getByUsername: async (username) => {
            return user.findOne({
                where: {
                    username
                },
                raw: true,
            })
        }
    }
}
