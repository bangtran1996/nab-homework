
module.exports = (brand) => {
    return {
        create: async(brandCreateInput) => brand.create(brandCreateInput)
    }
}
