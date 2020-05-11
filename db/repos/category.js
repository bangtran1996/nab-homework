
module.exports = (category) => {
    return {
        create: async (categoryCreateInput) => category.create(
            categoryCreateInput,
        )
    }
}
