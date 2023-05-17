"use client";

type Props = {
  color: string;
};

function DashboardIcon({ color }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="7.08333"
        height="7.08333"
        rx="1.66667"
        fill={color}
      />
      <rect
        x="8.83337"
        y="0.5"
        width="7.08333"
        height="7.08333"
        rx="1.66667"
        fill={color}
      />
      <rect
        x="0.5"
        y="8.83337"
        width="7.08333"
        height="7.08333"
        rx="1.66667"
        fill={color}
      />
      <rect
        x="9.25004"
        y="9.25004"
        width="6.25"
        height="6.25"
        rx="1.25"
        stroke={color}
        strokeWidth="0.833333"
      />
    </svg>
  );
}

export default DashboardIcon;
