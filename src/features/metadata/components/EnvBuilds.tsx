import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { StyledMetadataItem } from "../../../styles/StyledMetadataItem";
import { Build } from "../../../features/metadata/components";
import { buildMapper } from "../../../utils/helpers/buildMapper";
import { useAppSelector } from "../../../hooks";

interface IData {
  selectedBuildId: number;
}

export const EnvBuilds = ({ selectedBuildId }: IData) => {
  const { builds } = useAppSelector(state => state.enviroments);
  const envBuilds = builds.length ? buildMapper(builds, selectedBuildId) : [];
  const currentBuild = envBuilds.find(build => build.id === selectedBuildId);

  return (
    <>
      <StyledMetadataItem
        sx={{
          fontWeight: 500,
          paddingBottom: "5px"
        }}
      >
        Builds:
      </StyledMetadataItem>
      {currentBuild && (
        <>
          <Build builds={envBuilds} selectedBuildId={selectedBuildId} />
          <StyledMetadataItem
            sx={{
              marginTop: "0",
              fontSize: "13px",
              fontWeight: 500,
              paddingBottom: "0"
            }}
          >
            Status: {""}
            <Typography component="span" sx={{ fontSize: "13px" }}>
              {currentBuild.status}
              {(currentBuild.status === "Building" ||
                currentBuild.status === "Queued") && (
                <CircularProgress
                  size={10}
                  sx={{
                    marginLeft: "8px"
                  }}
                />
              )}
            </Typography>
          </StyledMetadataItem>
        </>
      )}
      {!currentBuild && (
        <CircularProgress
          size={20}
          sx={{ marginLeft: "15px", marginTop: "6px", marginBottom: "7px" }}
        />
      )}
    </>
  );
};
