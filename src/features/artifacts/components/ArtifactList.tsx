import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import React from "react";
import { ArtifactItem } from "./ArtifactsItem";
import { Artifact } from "../../../common/models";
import ListItem from "@mui/material/ListItem";
import useTheme from "@mui/material/styles/useTheme";
import { BlockContainer } from "../../../components";

export interface IArtifactsProps {
  /**
   * @param artifacts list of artifacts
   */
  artifacts: Artifact[] | never[];
}

export const ArtifactList = ({ artifacts }: IArtifactsProps) => {
  const { typography } = useTheme();

  return (
    <BlockContainer title="Logs and Artifacts">
      {artifacts.length ? (
        <Box>
          {artifacts.map((link, index) => (
            <ListItem
              key={link.name}
              sx={{
                padding: "0",
                marginBottom: index === artifacts.length - 1 ? "0px" : "15px",
                fontFamily: typography.fontFamily
              }}
            >
              <ArtifactItem artifact={link} />
            </ListItem>
          ))}
        </Box>
      ) : (
        <CircularProgress size={20} />
      )}
    </BlockContainer>
  );
};
