
module.exports = (admin) => {
    return {
        getByAdminname: async (username) => {
            return admin.findOne({
                where: {
                    username
                },
                raw: true,
            })
        }
    }
}
