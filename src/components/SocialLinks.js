import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const SocialLinks = ({
  buttonSize = "large",
  iconSize = { xs: 18, sm: 20, md: 21, lg: 22 },
  color = "primary",
  gap = 1,
  flexDirection = "row",
  placement = "bottom",
  mixBlendMode = "difference",
  additionalStyles,
}) => {
  return (
    <Box sx={{ display: "flex", gap, flexDirection, width: "100%" }}>
      <Tooltip title="Github" arrow enterDelay={500} placement={placement}>
        <IconButton
          size={buttonSize}
          target="_blank"
          href="https://github.com/SiddharthSsb11"
          sx={{ mixBlendMode, ...additionalStyles }}
          disableRipple
        >
          <GitHubIcon sx={{ fontSize: iconSize }} color={color} />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow enterDelay={500} placement={placement}>
        <IconButton
          size={buttonSize}
          target="_blank"
          href="https://www.linkedin.com/in/siddharthsingh11/"
          sx={{ mixBlendMode, ...additionalStyles }}
          disableRipple
        >
          <LinkedInIcon sx={{ fontSize: iconSize }} color={color} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook" arrow enterDelay={500} placement={placement}>
        <IconButton
          size={buttonSize}
          target="_blank"
          href="https://dev.to/siddharthssb11"
          sx={{ mixBlendMode, ...additionalStyles }}
          disableRipple
        >
          <LogoDevIcon sx={{ fontSize: iconSize }} color={color} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialLinks;
