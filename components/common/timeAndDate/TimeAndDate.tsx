import React, { useEffect, useState } from "react";

function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
}

export function getDay(date: Date) {
    if (date.getDay() === 0) {
        return "Minggu";
    } else if (date.getDay() === 1) {
        return "Senin, Wr. Hijau";
    } else if (date.getDay() === 2) {
        return "Selasa, Wr. Kuning";
    } else if (date.getDay() === 3) {
        return "Rabu, Wr. Abu-Abu";
    } else if (date.getDay() === 4) {
        return "Kamis, Wr. Merah";
    } else if (date.getDay() === 5) {
        return "Jumat, Wr. Biru";
    } else if (date.getDay() === 6) {
        return "Sabtu, Wr. Ungu";
    }
}

export function getDate(format: string, date: Date) {
    if (format === "DD-MM-YYYY") {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join("-");
    } else if (format === "DD/MM/YYYY") {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join("/");
    }
}

export function getTime(date: Date) {
    return [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
    ].join(":");
}

export const GetLiveTime = () => {
    "use client";
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className=" flex-shrink-0 hidden sm:pr-0 sm:block">

            <h1 className="text-md text-right text-black">
                {getDay(time)} <br /> {getDate("DD-MM-YYYY", time)}, {getTime(time)}
            </h1>
        </div>
    );
};

export const GetDayAndDate = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <h1 className="text-md text-center flex-shrink-0 block sm:hidden">
            {getDay(time)} <br /> {getDate("DD-MM-YYYY", time)} <br /> {getTime(time)}
        </h1>
    );
};
