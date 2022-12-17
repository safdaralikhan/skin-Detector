import React, { useState, useEffect } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import img1 from './img/screenbackground.jpg'
import img2 from './img/Scopium-01.png'
import logo from "./img/whitelogo.png"
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import { Divider, Typography, Toolbar, AppBar, Paper, Grid, Collapse, IconButton, Alert, DialogContent, Dialog, Button, useMediaQuery, styled, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from "react-router-dom";

export default function Home() {
    const theme = useTheme();
    const [Load, setLoad] = useState(false);
    const [FileList, setFileList] = useState([]);
    const [Condition, SetCondition] = useState("");
    const [Data, setData] = useState([]);
    const [Data2, setData2] = useState([]);
  
    // modal
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlert2, setOpenAlert2] = useState(false);
    const [Error, setError] = useState("");
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
  
    const Navigate = useNavigate();

    const reload = () => {
      Navigate(0);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

     // dropzone 2 start
  const onDropzoneAreaChange = (files) => {
    setFileList(files);
  };

    return (<>
        {/* {fullScreen === true ?
          // <CommingSoon />
          : */}
          <section className="section" style={{ backgroundImage: `url(${img1})`, minHeight: "100vh", width: "100%", backgroundSize: "cover" }}>
            {Load ? <Loader fullPage loading /> : null}
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 mt-1" >
                  <Collapse in={openAlert}>
                    <Alert
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpenAlert(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                      variant="filled"
                      severity="error"
                    >
                      {Error}
                    </Alert>
                  </Collapse>
                  <Collapse in={openAlert2}>
                    <Alert
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpenAlert2(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                      variant="filled"
                      severity="warning"
                    >
                      {Error}
                    </Alert>
                  </Collapse>
                </div>
              </div>
              <div className="row text-center justify-content-center">
                <div className="col-md-5" >
                  <img src={logo} width="80%" className="img-fluid mt-4" alt="logo" />
                </div>
              </div>
              <div className="row justify-content-center " >
                <div className="col-md-6" >
                  <DropzoneArea
                    acceptedFiles={['image/*']}
                    filesLimit={1000}
                    maxFileSize={1048576000} //1000 MB
                    showFileNames={false}
                    dropzoneText={"Drag and drop an image here or click"}
                    onChange={onDropzoneAreaChange}
                    // onDrop={(e)=>console.log("drop",e)}
                    showFileNames={true}
                    dropzoneClass="dropZoneCustomClass"
                    showAlerts={false}
                    dropzoneText={"Drag and drop an images or gif here"}
                  />
                </div>
              </div>
              {/* <div className="row justify-content-center mt-3">
                <div className="col-md-4">
                  <label
                    htmlFor="status"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      marginLeft: "3%"
                    }}
                  >
                    Select Category:
                  </label>
                  <select
                    className="form-control mt-1  "
                    id="status"
                    value={Condition}
                    onChange={(e) =>
                      SetCondition(e.target.value)
                    }
                  >
                    <option value={""}>Select a value</option>
                    {Data2.map((v, i) => {
                    
    
    
                      // return <option selected value={v.dropdownname}>{v.name}</option>
    
    
                    })}
                    <option value={"Echocardiogram"}>Echocardiogram</option>
                    <option selected value={"Electrocardiogram"}>Electrocardiogram</option>
                    <option selected value={"Echocardiogram_Real_Data"}>Echocardiogram_Real_Data</option>
                    <option selected value={"ElectrocardiogramReal"}>ElectrocardiogramReal</option>
                    <option selected value={"electrocardio_ekg"}>electrocardio_ekg</option>
                    <option selected value={"ECG(h5files)"}>ECG(h5files)</option>
                    <option selected value={"ECG(5_labels)"}>ECG(5_labels)</option>
                    <option selected value={"ECG(h5files2)"}>ECG(h5files2)</option>
                    <option selected value={"ECG(h5files2local)"}>ECG(h5files2local)</option>
                    <option selected value={"echocardio(mergedata)"}>echocardio(mergedata)</option>
    
    
    
    
    
    
    
                  </select>
                </div>
              </div>
              <div className="row jutify-content-center text-center ">
                <div className="col-md-12 mt-4" >
                  <button type="button" className="btn btn-pills btn-light btn-block px-4 mt-4 text-dark" onClick={UploadApi}>Submit</button>
                  <Button className="mx-4" variant="contained" >Submit</Button>
                  <Button variant="contained">Clear All</Button>
                </div>
                <div className="col-md-3 mt-1" style={{ marginLeft: "38%" }}>
                </div>
    
              </div> */}
    
            </div>
          </section>
        
      </>
      )
    }
