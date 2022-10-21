import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { config } from "../common/constants";

const currentStyleType = config.styleType;

const setPadding = (styleType: string, isAltType: string): string => {
  if (styleType === "grayscale") {
    return "0px 12px";
  } else {
    return isAltType === "true" ? "3px 18px" : "3px 30px";
  }
};

export const StyledButtonPrimary = styled(Button, {
  shouldForwardProp: prop => prop !== "styleType"
})<{ styleType?: string; isalttype?: string }>(
  ({
    theme: { palette },
    styleType = currentStyleType,
    isalttype = "false"
  }) => ({
    padding: setPadding(styleType, isalttype),
    border: styleType === "grayscale" ? "2px solid #000" : "1px solid #33A852",
    fontSize: styleType === "grayscale" ? "16px" : "14px",
    color: styleType === "grayscale" ? "#000" : "#fff",
    textTransform: "none",
    backgroundColor:
      styleType === "grayscale" ? palette.primary.main : "#33A852",
    boxShadow: "none",
    borderRadius: isalttype === "true" ? "2px" : "5px",
    ":hover": {
      boxShadow: "none",
      color: styleType === "grayscale" ? "initial" : "#33A852",
      backgroundColor: styleType === "grayscale" ? "initial" : "#fff"
    }
  })
);
