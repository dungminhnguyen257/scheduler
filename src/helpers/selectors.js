export function getAppointmentsForDay(state, day) {
  const matchedDay = state.days.filter((aDay) => aDay.name === day);
  if (matchedDay.length === 0) {
    return [];
  }
  const appointmentIds = matchedDay[0].appointments;

  const appointmentArray = [];

  appointmentIds.forEach((id) => {
    if (state.appointments[id]) {
      appointmentArray.push(state.appointments[id]);
    }
  });

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
export function getInterviewersForDay(state, day) {
  const matchedDay = state.days.filter((aDay) => aDay.name === day);
  if (matchedDay.length === 0) {
    return [];
  }
  const interviewerIds = matchedDay[0].interviewers;

  const interviewersArray = [];

  interviewerIds.forEach((id) => {
    if (state.interviewers[id]) {
      interviewersArray.push(state.interviewers[id]);
    }
  });

  return interviewersArray;
}
