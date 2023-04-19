import { Divider, List, ListItem, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { SetStateAction } from "react";

export function ResultModal(props: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  res: IResType[]
}): JSX.Element {

  const handleClose = ()=>props.setModalOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    maxHeight: '90%',
    // border: "2px solid #000",
    // boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflowY: 'scroll'
  };
  return (
    <Modal
      open={props.modalOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography 
          id='modal-modal-title' 
          // variant='bo'
          fontFamily='Quicksand'
          variant='h6'
          fontWeight='bold'
          color='gray'
          component='h2'
        >
          Matches
        </Typography>
        <Divider />
        <Box
          sx={{display: 'flex', flexDirection: "column"}}
        >
          {
            props.res.map((result, index)=>{
              return (
                <Box key={index} sx={{display: 'flex', flexDirection: 'column', m: 1}}>
                  <Typography fontWeight='medium' color='black' fontFamily={'Quicksand'}>
                    Match {index + 1}
                  </Typography>
                  <Typography fontWeight={'bold'} color='gray' fontFamily={'Quicksand'} >
                    {result.song_name.replace('_', ' ')} 
                  </Typography>
                  <Typography color='gray' fontFamily={'Quicksand'} >
                    <b>{result.fingerprinted_hashes_in_db}</b> hashes in DB 
                  </Typography>
                  <Typography color='gray' fontFamily={'Quicksand'} >
                    <b>{result.hashes_matched_in_input}</b> fingerprints matched in input 
                  </Typography>
                  <Typography color='gray' fontFamily={'Quicksand'} >
                    offset matched at <b>{result.offset_seconds}</b> seconds 
                  </Typography>
                  
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </Modal>
  );
}
