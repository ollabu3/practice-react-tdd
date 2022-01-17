import React from "react";
import { Alert } from "react-bootstrap";

const AlertBanner = ({ message, variant }) => {
  const alertMessage =
    message || "An unexpected error occurred. Please try again later ";
  const alertVariant = variant || "danger";
  return (
    <div>
      <Alert variant={alertVariant} style={{ backgorindColor: "red" }}>
        {alertMessage}
      </Alert>
    </div>
  );
};

export default AlertBanner;
