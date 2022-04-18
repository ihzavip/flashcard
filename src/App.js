import React, { useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import data from "./data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MyPaper = ({ note }) => {
  return (
    <>
      {note.map((noteHolder) => {
        const { id, title, note } = noteHolder;
        return (
          <Paper
            elevation={6}
            sx={{
              px: "2rem",
              py: ".2rem",
              my: "2rem",
              mx: "auto",
              textAlign: "center",
            }}
          >
            <h4>Rule No. {id}</h4>
            <h4>{title}</h4>
            <p>{note}</p>
          </Paper>
        );
      })}
    </>
  );
};

function App() {
  const [note, setNote] = useState(data);
  return (
    <React.Fragment>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container maxWidth="md">
        <MyPaper note={note} />
      </Container>
    </React.Fragment>
  );
}

export default App;
