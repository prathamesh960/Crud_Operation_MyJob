import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRequest, getRequest } from "../api/api";
import { UPDATE_DELETE_JOB, GET_JOB, GET_Count } from "../api/server";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Nav from "../Components/Nav";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Grid,
  TablePagination,
  Typography
} from "@mui/material";

interface User {
  _id: string;
  title: string;
  content: string;
  status: string;
}

export default function AddjobTable(props: any) {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState<any>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Function to handle page change in pagination
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  // Function to handle rows per page change in pagination
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Load users data from the server
  const loadUsers = async () => {
    try {
      const res = await getRequest(GET_JOB, "");
      if (res) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  // Load count data from the server
  const getCount = async () => {
    try {
      const res = await getRequest(GET_Count, "");
      if (res) {
        setCount(res.data[0]);
      }
    } catch (error) {
      console.error("Error loading count:", error);
    }
  };

  // Delete user data
  const deleteData = async (id: any, title: any) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      try {
        // Execute API call to delete user data
        deleteRequest(UPDATE_DELETE_JOB, id, "");
        // Reload users data after deletion
        loadUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  useEffect(() => {
    // Load initial data when component mounts
    loadUsers();
    getCount();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <Paper elevation={20} sx={{ p: 3, marginTop: 7 }}>
          
          {/* Display counts */}
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Add Count: {count && count.addCount}
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Update Count: {count && count.updateCount}
          </Typography>
        

          {/* Header */}
          <Grid
            container
            sx={{
              p: 2,
              background: "#0288d1",
              color: "white",
            }}
          >
            <Grid container sx={{ justifyContent: "center", alignItems: "center", mb: 2 }}>
              <Typography variant="h5" sx={{ mx: 3 }}>
                Manage Job
              </Typography>
            </Grid>
          </Grid>

          {/* User table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.no</TableCell>
                  <TableCell>Job Title</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user: User, index: number) => (
                    <TableRow key={user._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.title}</TableCell>
                      <TableCell>
                        <div dangerouslySetInnerHTML={{ __html: user.content }}></div>
                      </TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>
                        {/* Edit button */}
                        <Button variant="text" onClick={() =>
                          navigate("/EditJob", {
                            state: {
                              id: user._id,
                              title: user.title,
                              content: user.content,
                              status: user.status,
                              set: true,
                            },
                          })
                        }>
                          <EditIcon />
                        </Button>
                        {/* Delete button */}
                        <Button variant="text" onClick={() => deleteData(user._id, user.title)}>
                          <DeleteIcon sx={{ color: "red" }} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </>
  );
}
