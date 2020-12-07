import React from "react";
import { 
    isSameMonth,
    isFirstDay, 
    isSameDay,
    getMonth
} from "../../services/calendar";
import Schedule from "../Schedule/index.jsx";

import dayjs from "dayjs";

import { Typography } from "@material-ui/core";
import * as styles from "./style.css";

const CalendarElement = ({ 
    day, 
    month, 
    schedules,
    ...props 
    }) => {
    const today = dayjs();
    // 当日かどうか判断
    const isToday = isSameDay(day,today);
    // 当月以外をグレーにする
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day,currentMonth);

    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    // 文字列のフォーマットをどうするか決める。
    // 月の最初だけ月情報をつける。
    const format = isFirstDay(day) ? "M月D日" : "D";

    return (
        <div className={styles.element}>
        <Typography
            className={styles.date}
            color={textColor}
            align="center"
            variant="caption"
            component="div"
        >
            <span className={isToday ? styles.today:""}>
                {day.format(format)}
            </span>
        </Typography>
            <div className={styles.schedules}>
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} {...props} />
                ))}
            </div>
        </div>
    );
};

export default CalendarElement;