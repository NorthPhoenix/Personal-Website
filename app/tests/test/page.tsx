"use client";
import ErrorPopup from "app/_globalComponents/ErrorPopup";

const resume = () => {
  return (
    <ErrorPopup
      header={"header"}
      message={"message"}
      close={() => {}}
      closeAfter={1000000}
    />
  );
};

export default resume;
