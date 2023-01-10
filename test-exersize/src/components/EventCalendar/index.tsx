import React, {FC} from 'react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import {IEvent} from "../../models/IEvent";
import {current} from "@reduxjs/toolkit";

interface EventCalendarProps {
    events: IEvent[];
}
const EventCalendar: FC<EventCalendarProps> = ({events}) => {
    const dateCellRender = (value: Dayjs) => {
        const formattedDate = value.format('YYYY.MM.DD');
        const currentDayEvents = events.filter(event => event.date === formattedDate)
        return (
            <div>
                {currentDayEvents.map((event, i) => (
                    <div key={i}>{event.description}</div>
                ))}
            </div>
        );
    };

    return <Calendar dateCellRender={dateCellRender} />
};

export default EventCalendar;
