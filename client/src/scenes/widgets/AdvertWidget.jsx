import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:4000/assets/1ecde018e863e2aaee31f00a23378c35.jpe"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Some ad</Typography>
        <Typography color={medium}>somerandomad.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The Straw Hats are a pirate crew that travels the Grand Line, searching for the One Piece, the greatest treasure in the world.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
