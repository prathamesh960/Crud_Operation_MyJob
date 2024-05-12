// import { useEffect } from "react";
// import Box from "@mui/material/Box";
// import {
//   TextField,
//   Typography,
//   Grid,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Paper,
//   Button,
// } from "@mui/material";
// import Container from "@mui/material/Container";
// import { useState } from "react";
// import JoditEditor from "jodit-react";
// import { useLocation, useNavigate } from "react-router-dom";
// import useValidation from "../Hooks/useValidation";
// import LinearProgress from "@mui/material/LinearProgress";
// import { updateRequest } from "../api/api";
// import {  UPDATE_DELETE_JOB } from "../api/server";
// import axios from "axios";
// import Nav from "../Components/Nav";

// interface Job {
//   title: string;
//   content: string;
//   status: string;
// }

// export default function AddJobForm(props: any) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { eventHandler } = useValidation();
//   const isEditRoute = location.pathname === "/EditJob";

//   const [errors, setErrors] = useState({
//     title: "",
//   });

//   const [job, setJob] = useState<Job>({
//     title: "",
//     content: "",
//     status: "",
//   });

//   // for progress bar
//   const [isLoading, setLoading] = useState(false);

//   const updateValue = (e: any) => {
//     setJob({ ...job, [e.target.name]: e.target.value });
//   };

//   const ValidationHandler = async (e: any, alterName?: any) => {
//     try {
//       const val = e.target.value;
//       const id = alterName;
//       if (id) {
//         const res = await eventHandler(id, val);
//         setErrors({ ...errors, [e.target.name]: res });
//       }
//     } catch (error) {
//       console.error("Error in ValidationHandler:", error);
//     }
//   };

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     if (validator()) {
//       try {
//         setLoading(true);
//         if (location.state === null) {
//           // Execute API for adding a new job
//           const response = await axios.post(
//             "http://localhost:4000/job/add-job",
//             job,
//             {
//               headers: {
//                 "Content-Type": "application/json", // content type for JSON
//               },
//             }
//           );
//           console.log("job", job);
//           if (response) {

//             // Scroll to top and navigate to ManageJob after 2 seconds
//             window.scrollTo(0, 0);
//             setTimeout(() => {
//               navigate("/ManageJob");
//             }, 1000);
//           }
//         } else {

//           // Execute API for updating an existing job
//           let id = location.state?.id;
//           await updateRequest(UPDATE_DELETE_JOB, id, job, "");
//           setTimeout(() => {
//             navigate("/ManageJob");
//           }, 3000);
//         }
//       } catch (error) {
//         console.error("Error submitting job:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const validator = () => {
//     for (let field in errors) {
//       if (errors[field as keyof typeof errors] !== "") {
//         return false;
//       }
//     }
//     return true;
//   };

//   useEffect(() => {

//     // set job  if available location state
//     if (location?.state) {
//       setJob(location.state);
//     }
//   }, [location]);

//   useEffect(() => {
//     // Reset or set job details based on it's an edit route or not
//     if (!isEditRoute) {
//       setJob({
//         title: "",
//         content: "",
//         status: "",
//       });
//     } else {
//       setJob({
//         title: location.state.title,
//         content: location.state.content,
//         status: location.state.status,
//       });
//     }
//   }, [isEditRoute, location]);

//   return (
//     <>
//       <Nav />
//       <Container>

//         <Paper elevation={20} sx={{ p: 3, marginTop: "50px" }}>

//           <Box sx={{ p: "10px" }} component="form" onSubmit={handleSubmit}>
//             {isLoading && <LinearProgress />}
//             <Container maxWidth="md">
//               <Typography
//                 variant="h6"
//                 align="center"
//                 sx={{ m: "10px", color: "#0288d1" }}
//               >
//                 {location?.state?.set ? <>Edit Job</> : <>Add Job</>}
//               </Typography>

//               <Grid>
//                 <Grid xs={12} md={12} item>
//                   <TextField
//                     id="filled-read-only-input"
//                     label="Job Title"
//                     fullWidth
//                     required
//                     value={job.title}
//                     variant="outlined"
//                     name="title"
//                     error={Boolean(errors.title)}
//                     helperText={errors.title}
//                     onChange={updateValue}
//                     onBlur={(e) => ValidationHandler(e, "alphabetsAndSpace")}
//                     sx={{ background: "white" }}
//                     autoComplete="false"
//                   />
//                 </Grid>

//                 <Grid item md={12} style={{ textAlign: "left" }}>
//                   <Typography textAlign="left" sx={{ padding: 1 }}>
//                     JOB Content:
//                   </Typography>
//                   <JoditEditor
//                     value={job.content}
//                     onChange={(content: string) =>
//                       setJob({ ...job, content: content })
//                     }
//                   />
//                 </Grid>

//                 <Grid item md={12}>
//                   <FormControl
//                     sx={{ minWidth: 120, mt: 3 }}
//                     fullWidth
//                     required
//                   >
//                     <InputLabel id="demo-simple-select-label">
//                       Job Status
//                     </InputLabel>
//                     <Select
//                       labelId="demo-simple-select-required-label"
//                       label="Job Status"
//                       required
//                       id="demo-simple-select"
//                       value={job.status}
//                       name="status"
//                       sx={{ textAlign: "start" }}
//                       onChange={(e) =>
//                         setJob({ ...job, status: e.target.value })
//                       }
//                     >
//                       <MenuItem value="Active">Active</MenuItem>
//                       <MenuItem value="Inactive">Inactive</MenuItem>
//                     </Select>
//                   </FormControl>
//                   <Button
//                     variant="contained"
//                     type="submit"
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       mt: 2,
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Container>
//           </Box>
//         </Paper>
//       </Container>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Button,
  Container,
} from "@mui/material";
import JoditEditor from "jodit-react";
import LinearProgress from "@mui/material/LinearProgress";
import Nav from "../Components/Nav";
import { updateRequest } from "../api/api";
import { UPDATE_DELETE_JOB } from "../api/server";

interface Job {
  title: string;
  content: string;
  status: string;
}

export default function AddJobForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job>({
    title: "",
    content: "",
    status: "",
  });
  const [errors, setErrors] = useState({
    title: "",
  });
  const [isLoading, setLoading] = useState(false);
  const isEditRoute = location.pathname === "/EditJob";

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validator()) {
      try {
        setLoading(true);
        if (location.state === null) {
          const response = await axios.post(
            "http://localhost:4000/job/add-job",
            job,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response) {
            window.scrollTo(0, 0);
            setTimeout(() => {
              navigate("/ManageJob");
            }, 1000);
          }
        } else {
          const id = location.state?.id;
          await updateRequest(UPDATE_DELETE_JOB, id, job, "");
          setTimeout(() => {
            navigate("/ManageJob");
          }, 3000);
        }
      } catch (error) {
        console.error("Error submitting job:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const validator = () => {
    for (const field in errors) {
      if (errors[field as keyof typeof errors] !== "") {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (location?.state) {
      setJob(location.state);
    } else {
      setJob({
        title: "",
        content: "",
        status: "",
      });
    }
  }, [location]);

  return (
    <>
      <Nav />
      <Container>
        <Paper elevation={20} sx={{ p: 3, marginTop: "50px" }}>
          <Box sx={{ p: "10px" }} component="form" onSubmit={handleSubmit}>
            {isLoading && <LinearProgress />}
            <Container maxWidth="md">
              <Typography
                variant="h6"
                align="center"
                sx={{ m: "10px", color: "#0288d1" }}
              >
                {location?.state?.set ? <>Edit Job</> : <>Add Job</>}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Job Title"
                    fullWidth
                    required
                    value={job.title}
                    variant="outlined"
                    name="title"
                    error={Boolean(errors.title)}
                    helperText={errors.title}
                    onChange={updateValue}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Job Content:</Typography>
                  <JoditEditor
                    value={job.content}
                    onChange={(content: string) =>
                      setJob({ ...job, content: content })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">
                      Job Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      label="Job Status"
                      required
                      value={job.status}
                      name="status"
                      onChange={(e) =>
                        setJob({ ...job, status: e.target.value as string })
                      }
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
