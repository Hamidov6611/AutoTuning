import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function VideoPlayer({ src, title }) {
  return (
    <Card className="h-auto md:h-[556px] w-full">
      <CardMedia
        component="video"
        controls
        src={src}
        alt={title}
        title={title}
      />
      <CardContent>
        <h2>{title}</h2>
      </CardContent>
    </Card>
  );
}

export default VideoPlayer;
