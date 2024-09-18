import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Head from "../component/Head";
import Leftsidebar from "../component/leftsidebar";
import Rightsidebar from "../component/rightsidebar";

function Contact() {
  // Initialize state with default values
  const [value, setValue] = useState({});


  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", value);
    
    setValue ({});
  };

  return (
    <React.Fragment>

      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: "url('/img/bg/page-bg-1.jpg')" }}
      >
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <Leftsidebar />
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Contact</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pr-60 pl-60 mb-30">
                    <div className="contact-area bg-light-white-2">
                      <h5 className="contact-title">
                        I'm always open to discussing product
                      </h5>
                      <h5 className="contact-title-b">
                        design work or partnerships.
                      </h5>
                      <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                      >
                        <Box
                          sx={{ "& > :not(style)": { m: 2, width: "100%" } }}
                        >
                          <TextField
                            id="name"
                            value={value.name || ''}  // Ensure value is a string
                            onChange={handleChange}
                            label="Name"
                            variant="standard"
                          />
                        </Box>
                        <Box
                          sx={{ "& > :not(style)": { m: 2, width: "100%" } }}
                        >
                          <TextField
                            id="email"
                            value={value.email || ''}  // Ensure value is a string
                            onChange={handleChange}
                            label="Email"
                            variant="standard"
                          />
                        </Box>
                        <Box
                          sx={{ "& > :not(style)": { m: 2, width: "100%" } }}
                        >
                          <TextField
                            id="messages"
                            value={value.messages || ''}  // Ensure value is a string
                            onChange={handleChange}
                            label="Message"
                            variant="standard"
                            multiline
                            rows={2}
                          />
                        </Box>
                        <Stack direction="row" spacing={1} className="mt-3 p-2 m-2">
                          <Button 
                            type="submit"
                            variant="contained" 
                            endIcon={<SendIcon />}
                          >
                            Send
                          </Button>
                        </Stack>
                      </form>
                    </div>
                  </div>
                  <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
                    <span>
                      © 2024 All Rights Reserved by Manas Singh
                      <a target="_blank" rel="noopener noreferrer" href="#"></a>
                    </span>
                  </div>
                </div>
              </div>
              <Rightsidebar />
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Contact;
