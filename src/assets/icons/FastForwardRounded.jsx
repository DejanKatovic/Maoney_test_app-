import { Box } from "@mui/material";
import React from "react";

export const FastForwardRounded = ({ size = 24, color, sx }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", ...sx }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill={!!color ? color : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="material-symbols:fast-forward-rounded">
          <path
            id="Vector"
            d="M4.05 16.975C3.71667 17.2083 3.375 17.225 3.025 17.025C2.675 16.825 2.5 16.525 2.5 16.125V7.87501C2.5 7.47501 2.675 7.17901 3.025 6.98701C3.375 6.79567 3.71667 6.80834 4.05 7.02501L10.25 11.175C10.55 11.375 10.7 11.65 10.7 12C10.7 12.35 10.55 12.625 10.25 12.825L4.05 16.975ZM14.05 16.975C13.7167 17.2083 13.375 17.225 13.025 17.025C12.675 16.825 12.5 16.525 12.5 16.125V7.87501C12.5 7.47501 12.675 7.17901 13.025 6.98701C13.375 6.79567 13.7167 6.80834 14.05 7.02501L20.25 11.175C20.55 11.375 20.7 11.65 20.7 12C20.7 12.35 20.55 12.625 20.25 12.825L14.05 16.975Z"
            fill="url(#paint0_linear_290_427)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_290_427"
            x1="11.6"
            y1="6.85242"
            x2="11.6"
            y2="17.1635"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.645833" stopColor="text.thirdly" />
            <stop offset="1" stopColor="#563ACC" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};
