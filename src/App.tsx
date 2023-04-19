import React, { useState } from "react";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import { Box, Card, Divider, Typography } from "@mui/material";
import "./app.css";
import { ResultModal } from "./result_modal";
import { getResults } from "./getres";
function App() {
  const [recording, setRecording] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [res, setRes] = useState<IResType[]>();

  const handleClick = () => {
    setRecording(true);
    getResults().then(response=>{
      setRes(response);
      console.log(response);
      setRecording(false);
    }).then(()=>setModalOpen(true))
  };
  return (
    <Box
      className='App'
      sx={{
        backgroundColor: "#F0F0F0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            align: "start",
            m: 2,
            justifyContent: "center",
            fontSize: "30px",
            fontFamily: "quicksand",
          }}
        >
          MusicSense
        </Typography>
        <Divider />
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Card
            // elevation={recording ? '' : 12}
            className={recording ? "card" : ""}
            onClick={() => handleClick()}
            sx={{
              width: "20em",
              height: "20em",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0A4D68",
              cursor: "pointer",
            }}
          >
            <MusicNoteRoundedIcon
              className={recording ? "icon" : ""}
              sx={{ fontSize: "250px", color: "white" }}
            />
          </Card>
        </Box>
      </Box>
      <ResultModal modalOpen={modalOpen} res={res || []} setModalOpen={setModalOpen} />
    </Box>
  );
}

export default App;
