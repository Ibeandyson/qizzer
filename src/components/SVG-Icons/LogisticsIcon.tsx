type Props = {
  color: string;
};

function LogisticsIcon({ color }: Props) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_437_3482"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="22"
      >
        <path
          d="M0.999817 14.4999V19.9999C0.999817 20.2651 1.10517 20.5194 1.29271 20.707C1.48025 20.8945 1.7346 20.9999 1.99982 20.9999H15.9998C16.265 20.9999 16.5194 20.8945 16.7069 20.707C16.8945 20.5194 16.9998 20.2651 16.9998 19.9999V14.4999"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9998 5.99988H1.99982C1.7346 5.99988 1.48025 6.10523 1.29271 6.29277C1.10517 6.48031 0.999817 6.73466 0.999817 6.99988V9.99988C0.999817 10.2651 1.10517 10.5194 1.29271 10.707C1.48025 10.8945 1.7346 10.9999 1.99982 10.9999H15.9998C16.265 10.9999 16.5194 10.8945 16.7069 10.707C16.8945 10.5194 16.9998 10.2651 16.9998 9.99988V6.99988C16.9998 6.73466 16.8945 6.48031 16.7069 6.29277C16.5194 6.10523 16.265 5.99988 15.9998 5.99988Z"
          fill="white"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinejoin="round"
        />
        <path
          d="M4.99982 0.999878V2.99988M8.99982 0.999878V2.99988M12.9998 0.999878V2.99988M4.99982 15.9999H12.9998"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_437_3482)">
        <path
          d="M-3.00018 -1.00012H20.9998V22.9999H-3.00018V-1.00012Z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export default LogisticsIcon;
