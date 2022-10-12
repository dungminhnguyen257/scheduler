import { useState, useEffect } from "react";
import axios from "axios";

const GET_DAYS = "/api/days";
const GET_APPOINTMENTS = "/api/appointments";
const GET_INTERVIEWERS = "/api/interviewers";
const PUT_DELETE_APPOINTMENT_PREFIX = "/api/appointments/";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get(GET_DAYS),
      axios.get(GET_APPOINTMENTS),
      axios.get(GET_INTERVIEWERS),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(PUT_DELETE_APPOINTMENT_PREFIX + appointment.id, {
        interview: interview,
      })
      .then((res) => {
        setState((prev) => {
          const newState = { ...prev, appointments };
          updateSpots(newState, newState.day);
          return newState;
        });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(PUT_DELETE_APPOINTMENT_PREFIX + appointment.id)
      .then((res) => {
        setState((prev) => {
          const newState = { ...prev, appointments };
          updateSpots(newState, newState.day);
          return newState;
        });
      });
  }

  function updateSpots(newState, day) {
    const currentDay = newState.days.find((dayItem) => dayItem.name === day);
    const appointmentIds = currentDay.appointments;

    const emptyInterviewsForTheDay = appointmentIds.filter(
      (id) => !newState.appointments[id].interview
    );
    const spots = emptyInterviewsForTheDay.length;

    currentDay.spots = spots;
  }

  return { state, setDay, bookInterview, cancelInterview };
}
