import { markAssetError } from "next/dist/client/route-loader"

const fnAmPm = (h)=>{
    if (h > 11){
        return "PM"
    }else{
        return "AM"
    }
}
const hours = (h)=>{
    if(h === 0){
        return 12
    }
    else if(h < 13){
        return h
    }else{
        return (h - 12)
    }
}
const Minute = (m)=>{
    if(m < 10){
        return `0${m}`
    }else{
        return m
    }
}


const time = (st)=>{
    const date = new Date(st);
    let a = fnAmPm(date.getHours())
    let m = Minute(date.getMinutes());
    let h = hours(date.getHours())
    return `${h}:${m}:${a}`;
}

export default time;