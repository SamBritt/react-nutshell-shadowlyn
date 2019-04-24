export default {
    getDate(date) {
        let monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        // let hour = date.getHours()
        // let minutes = date.getMinutes()
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
}