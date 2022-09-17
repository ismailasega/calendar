// * @Author: Ismail Debele Asega
// * @Email: asega03@gmail.com
// * @LinkedIn: https://www.linkedin.com/in/asegaismail/
// * @Github: https://github.com/ismailasega
// * @GitLab: https://gitlab.com/asegaismail
// * @Tel: +256-784-491412 / +256-756-454376

import React from "react";

/**
 * Declaring type of props
 *
 */
type selectedDateView = {
  title: string;
  date: string;
};

const DateView: React.FC<selectedDateView> = (props) => {
  return (
    <div className="selectedDetails">
      <div className="selected-text">
        <strong>{props.title}</strong>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default DateView;
