const moment = require('moment');

const bookedSessions = [];

const prepareBookingSessions = () => {
  const data = [];
  data.push(
    generateBookingSession(
      '08:00 - 09:00',
      moment('2022-01-02 08:00').toDate(),
      moment('2022-01-02 09:00').toDate(),
    ),
  );

  data.push(
    generateBookingSession(
      '07:00 - 08:00',
      moment('2022-01-02 07:00').toDate(),
      moment('2022-01-02 08:00').toDate(),
    ),
  );

  data.push(
    generateBookingSession(
      '12:00 - 14:00',
      moment('2022-01-02 12:00').toDate(),
      moment('2022-01-02 14:00').toDate(),
    ),
  );

  data.push(
    generateBookingSession(
      '16:00 - 17:00',
      moment('2022-01-02 16:00').toDate(),
      moment('2022-01-02 17:00').toDate(),
    ),
  );

  return data;
};

const generateBookingSession = (name, startTime, endTime) => {
  return {
    name,
    startTime,
    endTime,
  };
};
const modifyArray = (data) => {
  let i = 0;
  for (const bookedSession of data) {
    bookedSession.name = i.toString();
    i++;
  }
};

bookedSessions.push(...prepareBookingSessions());
console.log(bookedSessions);

modifyArray(bookedSessions);
console.log(bookedSessions);
