export const baseUrl = `http://localhost:1337/api`

export function createSlots() {
    try {
        let date = new Date()
        let slots = []
        for (let i = date.getDate(); i <= date.getDate() + 13; i++) {
            let findDay = new Date()
            findDay.setDate(i)
            findDay = findDay.toDateString().split(" ")[0]
            slots.push({ day: findDay, date: i })
        }

        return slots
    } catch (error) {
        console.log(error)
    }
}