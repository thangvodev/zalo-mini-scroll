import React from "react";

const ChevronFilledIcon = ({ classname = "" }) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M8.7998 4.68959L4.97769 0.229278C4.91608 0.157422 4.83966 0.0997424 4.75367 0.0601974C4.66767 0.0206528 4.57414 0.00017786 4.47949 0.00017786C4.38484 0.00017786 4.29131 0.0206528 4.20531 0.0601974C4.11932 0.0997424 4.04289 0.157422 3.98129 0.229278L0.159176 4.68959C-0.20559 5.11533 0.0968323 5.77295 0.657379 5.77295L8.30269 5.77295C8.86324 5.77295 9.16566 5.11533 8.7998 4.68959Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronFilledIcon;
