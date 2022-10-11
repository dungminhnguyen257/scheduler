export function getAppointmentsForDay(state, day) {
  const matchedDay = state.days.filter((aDay) => aDay.name === day);
  if (matchedDay.length === 0) {
    return [];
  }
  const appointmentIds = matchedDay[0].appointments;

  const appointmentArray = [];
  for (const key in state.appointments) {
    if (appointmentIds.includes(parseInt(key))) {
      appointmentArray.push(state.appointments[key]);
    }
  }
  return appointmentArray;
}

export function getInterview(state, interview) {
  let interviewer = null;

  if (interview === null) {
    return null;
  }

  for (const key in state.interviewers) {
    if (parseInt(key) === interview.interviewer) {
      interviewer = state.interviewers[key];
    }
  }

  return {
    ...interview,
    interviewer: interviewer,
  };
}
