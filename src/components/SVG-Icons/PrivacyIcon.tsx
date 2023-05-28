import React from "react";

type Props = {
  color: string;
};

function PrivacyIcon({ color }: Props) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.19 3.47C0.47 3.79 0 4.51 0 5.3V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V5.3C18 4.51 17.53 3.79 16.81 3.47L9.81 0.36C9.29 0.13 8.7 0.13 8.19 0.36L1.19 3.47ZM9 6C9.55 6 10 6.45 10 7C10 7.55 9.55 8 9 8C8.45 8 8 7.55 8 7C8 6.45 8.45 6 9 6ZM9 10C9.55 10 10 10.45 10 11V15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V11C8 10.45 8.45 10 9 10Z"
        fill={color}
      />
    </svg>
  );
}

export default PrivacyIcon;
