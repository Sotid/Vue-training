export default {
    registerCoach(context, payload) {
        const coachData = {
            id: context.rootGetters.userId,
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
        areas: payload.rate
        }
        context.commit('registerCoach', coachData)
    }
}