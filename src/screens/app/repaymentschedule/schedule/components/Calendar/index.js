import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { getDaysArray, weekDays } from '../../../../../../utils/CalendarUtil.js';

class Calendar extends Component {

    render() {

        var calendarHeaders = (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                {weekDays.map(item => {
                    return (
                        <View key={item} style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: '#ffffff' }}>{item}</Text>
                        </View>
                    );
                })}

            </View>
        );



        let daysArray = getDaysArray(this.props.month, this.props.year);

        let calendarRows = [];

        let calendarRow = [];


        let count = 0;
        let weekCount = 0;

        daysArray.map(item => {
            calendarRow.push(
                <View key={item.day} style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: this.installmentDayIsActive(this.props.installmentDays, item.day) ? '#56BAEE' : 'rgba(0,0,0,0)' }}>
                    <Text style={{ fontSize: 12, color: item.thisMonth ? '#ffffff' : '#ffffff4d', fontWeight: 'bold' }}>{item.day}</Text>
                </View>
            );
            count++;

            if (count == 7) {
                calendarRows.push(
                    <View key={'week_' + weekCount} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        {calendarRow}
                    </View>
                )
                count = 0;
                weekCount++;
                calendarRow = [];
            }
        })


        return (
            <View style={{ flex: 1 }}>
                {calendarHeaders}
                {calendarRows}
            </View>
        );
    }

    installmentDayIsActive(installmentDays, day) {
        for(let i = 0; i < installmentDays.length;i++){
            if(installmentDays[i].day == day) {
                return true;
            }
        }

        return false;
    }
}


export default Calendar;