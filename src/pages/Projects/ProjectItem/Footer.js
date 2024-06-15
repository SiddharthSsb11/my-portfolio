import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, ButtonBase, IconButton } from "@mui/material";
import SocialLinks from "../../../components/SocialLinks";
import DownloadIcon from "@mui/icons-material/Download";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import resumeUrl from "../../../constants/resume";

const contactButtonStyles = {
  width: "fit-content",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: { xs: 0.5, sm: 0.5, lg: 1, xl: 1.5 },
  justifyContent: "left",
  borderLeft: 2,
  borderColor: "rgba(100,100,100,.75)",
  py: { xs: 0.15, sm: 0.25, md: 0.5 },
  px: { xs: 1, xl: 2 },
  transition: "all 250ms ease-in-out",
  letterSpacing: 0.4,
  opacity: 0.75,
  "&:hover": {
    opacity: 1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.02)",
    borderColor: "primary.main",
  },
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 3, sm: 3, md: 5, lg: 5, xl: 6 },
        pb: { xs: 1, sm: 1, md: 2, lg: 2, xl: 3 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
      }}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} sm={7} md={7} lg={5} pr={{ sm: 2, md: 4, xl: 4 }}>
          <Box>
            <Typography
              variant="h2"
              fontWeight={400}
              fontSize={{ xs: 16, sm: 17, md: 20, lg: 24, xl: 25 }}
              letterSpacing={0.5}
              lineHeight={1.1}
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              Let's Talk
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography
              sx={{
                fontSize: { xs: 9.5, sm: 10, md: 11, lg: 12, xl: 12 },
                fontWeight: 400,
                opacity: 0.7,
                letterSpacing: 0.3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              I am excited to take a leap forward and further hone my knowledge
              and skills with the right company.
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography
              sx={{
                fontSize: { xs: 9.5, sm: 10, md: 10, lg: 11.5, xl: 11.5 },
                fontWeight: 300,
                opacity: 0.5,
                letterSpacing: 0.3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              For inquiries, please feel free to reach me through my contact
              informations provided.
            </Typography>
          </Box>

          <Box
            mt={{ xs: 2.5, sm: 1.5, md: 2, xl: 3 }}
            sx={{
              display: { xs: "flex", sm: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <ButtonBase
              onClick={() => navigate("/contact")}
              sx={{
                borderLeft: 2,
                fontSize: { xs: 13, sm: 14, md: 15, lg: 17, xl: 18 },
                lineHeight: 1.4,
                color: "primary.main",
                borderColor: "rgba(100,100,100,.75)",
                px: { xs: 1, md: 1.5 },
                py: 0.1,
                fontWeight: 600,
                letterSpacing: 0.4,
                opacity: 0.85,
                transition: "all 250ms ease-in-out",
                fontFamily: "Manrope",
                "&:hover": {
                  opacity: 1,
                  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                  transform: "scale(1.02)",
                  borderColor: "primary.main",
                },
              }}
            >
              Contact Page
            </ButtonBase>
            <ButtonBase
              href={resumeUrl}
              target="_blank"
              color="inherit"
              sx={{
                boxShadow: 5,
                border: 2,
                fontSize: { xs: ".75rem" },
                lineHeight: 1,
                borderColor: "rgba(100,100,100,.75)",
                display: { xs: "block", sm: "none" },
                px: { xs: 1.5, sm: 2, md: 2.2, lg: 2.75 },
                py: { xs: 1, sm: 1.15, md: 1.15, lg: 1.25 },
                fontWeight: 600,
                letterSpacing: 1.25,
                opacity: 1,
                transition: "all 250ms ease-in-out",
                textTransform: "uppercase",
                transform: { sm: "skewX(-3deg)" },
                "&:hover": {
                  opacity: 1,
                  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                  transform: { sm: "scale(1.02) skewX(-3deg)" },
                  borderColor: "primary.dark",
                },
              }}
            >
              Download My CV{" "}
              <DownloadIcon sx={{ ml: 1.5 }} style={{ fontSize: "inherit" }} />
            </ButtonBase>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
            height: "100%",
          }}
          mt={{ xs: 5, sm: 0 }}
        >
          <Box align="left">
            <Typography
              variant="h2"
              fontWeight={400}
              fontSize={{ xs: 16, sm: 18, md: 20, lg: 24, xl: 25 }}
              letterSpacing={0.5}
              lineHeight={1.1}
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              Siddharth Singh Bhadauriya
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 10.5, sm: 11, md: 12, lg: 13.5, xl: 13.5 },
                fontWeight: 200,
                opacity: 0.7,
                letterSpacing: 1,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                mt: { xs: 0.7, sm: 1.5 },
              }}
            >
              Delhi NCR, India
            </Typography>
          </Box>
          <Box mt={{ xs: 1.5, sm: 1.5, md: 4, xl: 4 }}>
            <Box>
              <IconButton
                size="small"
                href="tel:7742705662"
                sx={contactButtonStyles}
                disableRipple
              >
                <LocalPhoneIcon
                  color="primary"
                  sx={{ fontSize: { xs: 20, sm: 20, md: 22, lg: 23 } }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 12, md: 13, lg: 13.5, xl: 15 },
                    letterSpacing: 1,
                  }}
                  fontWeight={300}
                >
                  (+91) 77427 05662
                </Typography>
              </IconButton>
            </Box>
            <Box mt={{ xs: 1, sm: 1, md: 2 }}>
              <IconButton
                size="small"
                target="_blank"
                href="mailto: siddharthsb101@gmail.com"
                sx={contactButtonStyles}
                disableRipple
              >
                <MailOutlineIcon
                  color="primary"
                  sx={{ fontSize: { xs: 20, sm: 20, md: 22, lg: 23 } }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 12, md: 13, lg: 13.5, xl: 15 },
                    letterSpacing: 1,
                  }}
                  fontWeight={300}
                >
                  siddharthsb101@gmail.com
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            justifyContent: "space-between",
            height: "100%",
          }}
          mt={{ xs: 0, sm: 3, md: 1.5, lg: 0 }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: { xs: "space-between", lg: "right" },
            }}
          >
            <Box
              mt={{ md: 2, xl: 4 }}
              sx={{ display: { xs: "none", sm: "initial", md: "none" } }}
            >
              <ButtonBase
                onClick={() => navigate("/contact")}
                sx={{
                  borderLeft: 2,
                  fontSize: { xs: 13, sm: 14, md: 17, lg: 18 },
                  lineHeight: 1.4,
                  color: "primary.main",
                  borderColor: "rgba(100,100,100,.75)",
                  px: 1,
                  py: 0.15,
                  fontWeight: 600,
                  letterSpacing: 0.4,
                  opacity: 0.85,
                  transition: "all 250ms ease-in-out",
                  fontFamily: "Manrope",
                  "&:hover": {
                    opacity: 1,
                    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                    transform: "scale(1.02)",
                    borderColor: "primary.main",
                  },
                }}
              >
                Contact Page
              </ButtonBase>
            </Box>
            <ButtonBase
              href={resumeUrl}
              target="_blank"
              color="inherit"
              sx={{
                boxShadow: 5,
                border: 2,
                fontSize: {
                  xs: ".8rem",
                  sm: ".85rem",
                  md: ".9rem",
                  lg: ".95rem",
                },
                display: { xs: "none", sm: "block" },
                lineHeight: 1,
                borderColor: "rgba(100,100,100,.75)",
                px: { xs: 1.8, sm: 2, md: 2.2, lg: 2.75 },
                py: { xs: 1.15, sm: 1.15, md: 1.15, lg: 1.25 },
                fontWeight: 600,
                letterSpacing: { xs: 1.75, lg: 1.75 },
                opacity: { xs: 0.9, lg: 0.75 },
                transition: "all 250ms ease-in-out",
                textTransform: "uppercase",
                transform: { sm: "skewX(-3deg)" },
                "&:hover": {
                  opacity: 1,
                  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                  transform: { sm: "scale(1.02) skewX(-3deg)" },
                  borderColor: "primary.dark",
                },
              }}
            >
              Download My CV{" "}
              <DownloadIcon sx={{ ml: 1.5 }} style={{ fontSize: "inherit" }} />
            </ButtonBase>
          </Box>
          <Box
            mt={4}
            sx={{
              width: "fit-content",
              display: { xs: "none", md: "initial" },
            }}
            ml="auto"
          >
            <SocialLinks
              flexDirection="row"
              color="inherit"
              gap={0.5}
              placement="bottom"
              additionalStyles={{
                opacity: { md: 0.85, lg: 0.65 },
                transition: "all 150ms ease-in-out",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.15)",
                  color: "primary.light",
                },
              }}
            />
          </Box>
          <Box
            sx={{ width: "100%", display: { xs: "none", md: "initial" } }}
            mt={{ md: 3, lg: 3, xl: 3 }}
          >
            <Typography
              sx={{
                fontSize: { xs: 9, sm: 9, md: 9, lg: 9, xl: 12 },
                opacity: 0.5,
                mixBlendMode: "difference",
                textAlign: "right",
              }}
            >
              © 2024 Siddharth Singh Bhadauriya, All rights reserved.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          mt={{ xs: 2.75, sm: 5 }}
          mb={1}
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: { xs: "row", sm: "row" },
            justifyContent: "space-between",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            mt={{ md: 4 }}
            sx={{
              width: "fit-content",
              display: { xs: "initial", md: "none" },
            }}
            ml={{ sm: "auto" }}
          >
            <SocialLinks
              flexDirection="row"
              color="inherit"
              gap={0.5}
              placement="bottom"
              additionalStyles={{
                opacity: 0.8,
                transition: "all 150ms ease-in-out",
                p: 0.1,
                mr: 1.5,
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.15)",
                  color: "primary.light",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              mt: { xs: 0.5, sm: 0 },
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 9, sm: 10, md: 11.5, lg: 13, xl: 14 },
                opacity: 0.5,
                mixBlendMode: "difference",
                textAlign: { xs: "right", sm: "right" },
              }}
            >
              © 2024 Siddharth Singh Bhadauriya, All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
