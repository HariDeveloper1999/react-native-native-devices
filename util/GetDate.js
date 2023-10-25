export function GetFullDate(date){
    return date.toISOString().slice(0,10)

}

export function getDateMinusdate(date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days)
}