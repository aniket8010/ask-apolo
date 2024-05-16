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

export function findTimeSlots(startTime = "", endTime = "") {

    try {
      const slots = [];
  
      const startDate = new Date(startTime);
      const endDate = new Date(endTime);
  
      let currentTime = new Date(startDate);
  
      while (currentTime < endDate) {
        // console.log(currentTime,"lo")
        const formattedTime = currentTime.toLocaleTimeString('en-IN', { hour12: true, });
  
        const [time, period] = formattedTime.split(' ');
        const [hours, minutes] = time.split(':');
  
        const slotTime = `${Number(hours) < 10 ? `0${hours}` : hours}:${minutes} ${period}`;
  
        slots.push(slotTime);
  
        currentTime.setMinutes(currentTime.getMinutes() + 15);
      }
  
      return slots;
    } catch (error) {
      console.log(error);
    }
}