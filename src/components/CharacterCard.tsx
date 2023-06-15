"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CharacterProps } from "@/Interfaces/character.interface";

const CharacterCard: React.FC<CharacterProps> = ({ char }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
    >
      <CardMedia
        component="img"
        height="50"
        image={char.image}
        alt={char.name}
      />
      <CardContent>
        <div className="text-center">{char.name}</div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
