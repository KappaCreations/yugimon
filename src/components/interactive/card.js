import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { MonContext } from "../hooks/MonContext";

const Card = () => {
  const cardWidth = "calc(66.6667vh * 2 / 3)"; // Two-thirds of the viewport height
  const cardHeight = "66.6667vh"; // Set the desired height of the card

  const maxWidth = `calc((100vh * 2 / 3) / 1.425)`; // Two-thirds of the viewport width divided by the aspect ratio (1.425)
  const { poke, yugi } = useContext(MonContext);

  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    if (poke !== null) {
      const fetchSprite = async () => {
        try {
          const response = await fetch(poke.url);
          const data = await response.json();
          setSprite(data.sprites.front_shiny);
        } catch (error) {
          console.error(error);
        }
      };

      fetchSprite();
    }
  }, [poke]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          maxWidth: maxWidth,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(1.41)",
        }}
      >
        <img
          src="https://i.ibb.co/mG6jvpR/monster-normal.png"
          alt="Monster"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "1",
            top: 0,
            left: 0,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: "2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Dela Gothic One", cursive',
                textAlign: "center",
              }}
            >
              {poke.name} {yugi.race}
            </Typography>
          </Box>
          <Box
            sx={{
              boxShadow: 12,
              bgcolor: "lightgreay",
              height: "250px",
              marginBottom: "20px",
            }}
          >
            <img
              src={sprite}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              padding: "10px",
              width: "290px",
              marginBottom: "26px",
              position: "absolute",
              marginTop: "400px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Dela Gothic One", cursive',
                textAlign: "center",
                fontSize: 11,
                lineHeight: 1,
              }}
            >
              {yugi.desc}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              marginTop: "485px",
              marginLeft: "120px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Dela Gothic One", cursive',
                textAlign: "center",
                fontSize: 10,
                lineHeight: 1,
              }}
            >
              {yugi.atk}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              marginTop: "485px",
              marginLeft: "240px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Dela Gothic One", cursive',
                textAlign: "center",
                fontSize: 10,
                lineHeight: 1,
              }}
            >
              {yugi.def}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
