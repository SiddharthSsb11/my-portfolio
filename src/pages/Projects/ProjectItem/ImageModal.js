import React from "react";
import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import Image from "mui-image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { keyframes } from "@mui/system";
import { useSwipeable } from "react-swipeable";

const containerStyles = {
  zIndex: 5,
  height: "100vh",
  width: "100vw",
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  backdropFilter: "blur(2px) contrast(80%) brightness(50%)",
};

const actionsContainer = {
  zIndex: 2,
  maxWidth: "1500px",
  mx: "auto",
  display: "flex",
  py: 1,
  ".active": {
    border: 2,
    opacity: 1,
    borderColor: "primary.main",
  },
};

const imageListItemStyles = {
  height: "auto",
  border: { xs: 1, md: 2 },
  borderColor: { xs: "transparent", md: "transparent" },
  p: { xs: 0.25, sm: 0.25, md: 0.4, lg: 0.5 },
  opacity: 0.65,
  transition: "all 250ms ease",
  "&:hover": {
    opacity: 1,
    borderColor: "primary.dark",
  },
};

const slideDown = keyframes`
  0% {
    transform: translateY(-2em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ImageModal = ({ imageName, imagesList, handleClose, setShowModal }) => {
  const image = imagesList.find((item) => item.name === imageName);

  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose();
  };

  const handlePrevItemClick = () => {
    const index = imagesList.findIndex((item) => item.name === imageName);
    if (index === 0) {
      setShowModal({
        isVisible: true,
        imageName: imagesList[imagesList.length - 1].name,
      });
    } else {
      setShowModal({ isVisible: true, imageName: imagesList[index - 1].name });
    }
  };

  const handleNextItemClick = () => {
    const index = imagesList.findIndex((item) => item.name === imageName);
    if (index === imagesList.length - 1) {
      setShowModal({ isVisible: true, imageName: imagesList[0].name });
    } else {
      setShowModal({ isVisible: true, imageName: imagesList[index + 1].name });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextItemClick,
    onSwipedRight: handlePrevItemClick,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    delta: 10,
  });

  const handlersBackdrop = useSwipeable({
    onSwipedLeft: handleNextItemClick,
    onSwipedRight: handlePrevItemClick,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    delta: 10,
  });

  return (
    <Box sx={containerStyles}>
      <Box
        sx={{
          zIndex: 2,
          height: "100vh",
          width: "100vw",
          position: "absolute",
        }}
        onClick={handleCloseClick}
        {...handlersBackdrop}
      ></Box>

      <Box
        sx={{
          zIndex: 3,
          boxShadow: 10,
          maxHeight: "65vh",
          maxWidth: { xs: "95vw", md: "90vw" },
          position: "relative",
          my: "auto",
          display: "flex",
          flexDirection: "column",
          "&:hover .actions": {
            opacity: 1,
          },
        }}
        {...handlers}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 5,
            left: 5,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(5,5,5,.1)",
            transition: "all 350ms ease",
            opacity: 0,
            display: { xs: "none", md: "initial" },
          }}
          className="actions"
        >
          <IconButton color="primary" onClick={handlePrevItemClick}>
            <ArrowBackIosNewIcon
              sx={{ fontSize: { md: 38, lg: 40, xl: 45 } }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 5,
            right: 5,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(5,5,5,.1)",
            transition: "all 350ms ease",
            opacity: 0,
            display: { xs: "none", md: "initial" },
          }}
          className="actions"
        >
          <IconButton color="primary" onClick={handleNextItemClick}>
            <ArrowForwardIosIcon
              sx={{ fontSize: { md: 38, lg: 40, xl: 45 } }}
            />
          </IconButton>
        </Box>
        <Image src={image.url} duration={300} fit="cover" sx={{ zIndex: 2 }} />
        {image.title && (
          <Box
            sx={{
              backgroundColor: "rgba(75,75,75,.75)",
              width: "100%",
              opacity: 0,
              animation: `${slideDown} 800ms ease forwards 250ms`,
              zIndes: 1,
            }}
          >
            <Box
              sx={{
                px: { xs: 1, md: 2 },
                py: 0.75,
                border: 1,
                m: { xs: 0.25, md: 0.5 },
                borderRadius: 1,
                borderColor: "rgba(200,200,200,.25)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={500}
                fontSize={{ xs: 13, sm: 18, md: 20, lg: 21, xl: 22 }}
                letterSpacing={0.15}
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(10,10,10,.25)",
                }}
              >
                {image.title}
              </Typography>
              <Typography
                variant="body2"
                pt={0.5}
                fontSize={{ xs: 9.5, sm: 11, md: 13, lg: 14, xl: 14 }}
                sx={{
                  textShadow: "1px 1px 7px rgba(10,10,10,.25)",
                  opacity: 0.65,
                }}
              >
                {image.description}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      {/* actions */}
      <Box
        sx={{
          zIndex: 2,
          width: "100%",
          backgroundColor: "rgba(100,100,100,.6)",
          boxShadow: 10,
        }}
      >
        <Box sx={actionsContainer}>
          <IconButton
            color="primary"
            size="large"
            onClick={handlePrevItemClick}
          >
            <ArrowBackIosNewIcon
              sx={{ fontSize: { xs: 25, sm: 26, md: 30, lg: 32, xl: 35 } }}
            />
          </IconButton>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              gap: { xs: 0.5, sm: 1.5, md: 2 },
              alignItems: "center",
              justifyContent: "center",
              overflowX: "auto",
            }}
          >
            {/* images list here */}
            {imagesList.map((item) => (
              <Box
                key={item.name}
                sx={{
                  width: { sm: 100, md: 150, lg: 160, xl: 160 },
                  height: "auto",
                  display: "inline-block",
                }}
              >
                <ButtonBase
                  sx={imageListItemStyles}
                  className={item.name === imageName ? "active" : ""}
                  onClick={() =>
                    setShowModal({ isVisible: true, imageName: item.name })
                  }
                >
                  <Image src={item.url} duration={200} />
                </ButtonBase>
              </Box>
            ))}
          </Box>
          <IconButton
            color="primary"
            size="large"
            onClick={handleNextItemClick}
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: 25, sm: 26, md: 30, lg: 32, xl: 35 } }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageModal;
