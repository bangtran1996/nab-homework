
module.exports = (activity) => {
    return {
        create: async(activityCreateInput) => activity.create(activityCreateInput)
    }
}
