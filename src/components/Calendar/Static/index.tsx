import moment from 'moment-timezone'
import 'react-dates/initialize';
import {useState} from 'react'
import 'react-dates/lib/css/_datepicker.css';

import { DayPickerSingleDateController, OrientationShape, isInclusivelyAfterDay, isInclusivelyBeforeDay } from 'react-dates';

interface Props {
    initialDate: moment.Moment
}
export default function CalendarStatic(props: Props) {
    const {initialDate} = props
    let [activeDate, setActiveDate] = useState<moment.Moment | null>(initialDate)
    let [isFocused, setIsFocused] = useState(true)
    const defaultProps = {
        // example props for the demo
        autoFocus: false,
        initialDate,
        date: activeDate,
        showInput: false,
      
        // day presentation and interaction related props
        renderCalendarDay: undefined,
        renderDayContents: null,
        isDayBlocked: () => false,
        isOutsideRange: (day: moment.Moment) => !isInclusivelyAfterDay(day, moment()) || !isInclusivelyBeforeDay(day, moment().add(2, 'weeks')),
        isDayHighlighted: () => false,
        enableOutsideDays: false,
      
        // calendar presentation and interaction related props
        orientation: "horizontal" as OrientationShape,
        withPortal: false,
        initialVisibleMonth: null,
        numberOfMonths: 1,
        onOutsideClick() {},
        keepOpenOnDateSelect: false,
        renderCalendarInfo: null,
        isRTL: false,
      
        // navigation related props
        navPrev: null,
        navNext: null,
        renderNavPrevButton: null,
        renderNavNextButton: null,
        // onPrevMonthClick() {},
        // onNextMonthClick() {},
      
        // internationalization
        monthFormat: 'MMMM YYYY',
      };
      
    return  <DayPickerSingleDateController
    {...defaultProps}
    onDateChange={(date) => setActiveDate(date)}
    onFocusChange={() => setIsFocused(true)}
    focused={isFocused}
    date={activeDate}
    hideKeyboardShortcutsPanel={true}
    noBorder={true}
    noNavButtons={true}
    renderCalendarInfo={() =>
    {
        if (!activeDate) {
            return
        } else if (activeDate.date() === 12) {    
        return (    <ul>
        <li>PGE - $180.00</li>
        <li>Spotify - $70.00</li>
        </ul>)
        } else if (activeDate.date() === 16) {

        return (    <ul>
        <li>Phone - $180.00</li>
        <li>Internet - $70.00</li>
    </ul>)
    }
    return 
        }
    }
  />
}
