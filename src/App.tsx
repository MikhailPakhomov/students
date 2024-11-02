import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { newDate } from 'react-datepicker/dist/date_utils';

import 'react-datepicker/dist/react-datepicker.css';

// const weekDays: string[] = [
//   'Воскресенье',
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота',
// ];

const months: string[] = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const workHours: string[] = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];
const weekDays: string[] = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

type Entry = {
  kidsId?: number;
  kidsName?: string;
  phoneNumber?: string;
  lesson?: string;
  free?: boolean;
};
const clientsEntries: Entry[] = [
  { kidsId: 1, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 2, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 3, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 4, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 5, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 6, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 7, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 8, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 9, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
  { kidsId: 10, kidsName: 'Вася', phoneNumber: '89991112233', lesson: 'Русский язык', free: false },
];

function App() {
  const [entries, setEntries] = React.useState(clientsEntries);

  const deleteEntry = (array: Entry[], index: number): void => {
    array.splice(index, 1, { free: true });
    console.log(array);
    setEntries((prevEntries) => [...array]);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div></div>
          {weekDays.map((day, index) => {
            return (
              <div className="header-item-wrapper">
                <div className="header-item">{day}</div>
              </div>
            );
          })}
        </div>
        <div className="bottom">
          <div className="bottom-time">
            {workHours.map((hour, index) => {
              return (
                <div className="hour-wrapper">
                  <div>{hour}</div>
                </div>
              );
            })}
          </div>
          <div className="bottom-client">
            <div className="bottom-client_monday">
              {entries.map((entry, index) => {
                return (
                  <div
                    className="bottom-clients-item-wrapper"
                    onClick={() => {
                      console.log(entry.kidsId);
                    }}>
                    {entry.free ? (
                      <div>Свободно</div>
                    ) : (
                      <>
                        <div>{entry.kidsName}</div>
                        <div>{entry.lesson}</div>
                        <div>{entry.phoneNumber}</div>
                        <button
                          onClick={() => {
                            deleteEntry(entries, index);
                          }}>
                          удалить
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="bottom-client_tuesday"></div>
            <div className="bottom-client_wednesday"></div>
            <div className="bottom-client _thursday"></div>
            <div className="bottom-client_friday"></div>
            <div className="bottom-client_saturday"></div>
            <div className="bottom-client_sunday"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
