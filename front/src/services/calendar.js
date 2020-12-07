import dayjs from "dayjs";

export const createCalendar = month => {
    // 今月の最初の日を追加
    const firstDay = getMonth(month);
    // 最初の日の日曜日のindexを取得
    const firstDayIndex = firstDay.day();

    return Array(35)
    .fill(0)
    .map((_,i) => {
        const diffFormFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFormFirstDay,"day");

        return day;
    });
};

export const isSameDay = (d1,d2) => {
    const format = "YYYYMMDD";
    return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1,m2) => {
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format);
};

export const isFirstDay = day => day.date() === 1;

export const getMonth = ({ year,month }) => {
    return dayjs(`${year}-${month}`);
};

export const getNextMonth = month => {
    const day = getMonth(month).add(1,"month");
    return formatMonth(day);
};

export const getPreviousMonth = month => {
    const day = getMonth(month).add(-1,"month");
    return formatMonth(day);
}

export const formatMonth = day => ({
    month: day.month() + 1,
    year: day.year()
});