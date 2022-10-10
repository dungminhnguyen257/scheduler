import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";

export default function Appointment(props) {
  return (
    <article className="appointment">
      {props.time && <Header time={props.time} />}
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
}
