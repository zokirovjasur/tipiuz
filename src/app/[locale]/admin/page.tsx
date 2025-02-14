"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const initialNews = [
  {
    id: 1,
    title: "New Research Grant",
    date: "2025-02-15",
    content: "Our institute has received a significant research grant...",
  },
  {
    id: 2,
    title: "Campus Expansion Project",
    date: "2025-02-10",
    content: "We're excited to announce our new campus expansion project...",
  },
];

const initialEvents = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "2025-03-20",
    location: "Main Hall",
  },
  {
    id: 2,
    title: "Alumni Meetup",
    date: "2025-04-05",
    location: "Garden Area",
  },
];

const initialFaculty = [
  {
    id: 1,
    name: "Dr. John Doe",
    department: "Computer Science",
    position: "Professor",
  },
  {
    id: 2,
    name: "Prof. Jane Smith",
    department: "Economics",
    position: "Associate Professor",
  },
];

const initialStats = {
  studentCount: 11000,
  teacherCount: 400,
  grantValue: 1000000000,
};

export default function AdminPage() {
  const [value, setValue] = useState(0);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [stats, setStats] = useState(initialStats);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  useEffect(() => {
    const storedNews = localStorage.getItem("news");
    const storedEvents = localStorage.getItem("events");
    const storedFaculty = localStorage.getItem("faculty");
    const storedStats = localStorage.getItem("stats");

    setNews(storedNews ? JSON.parse(storedNews) : initialNews);
    setEvents(storedEvents ? JSON.parse(storedEvents) : initialEvents);
    setFaculty(storedFaculty ? JSON.parse(storedFaculty) : initialFaculty);
    setStats(storedStats ? JSON.parse(storedStats) : initialStats);
  }, []);

  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("faculty", JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Admin Panel
      </Typography>
      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="admin tabs"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Faculty" {...a11yProps(2)} />
          <Tab label="Statistics" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <NewsManagement
            news={news}
            setNews={setNews}
            setSnackbar={setSnackbar}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EventsManagement
            events={events}
            setEvents={setEvents}
            setSnackbar={setSnackbar}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FacultyManagement
            faculty={faculty}
            setFaculty={setFaculty}
            setSnackbar={setSnackbar}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <StatisticsManagement
            stats={stats}
            setStats={setStats}
            setSnackbar={setSnackbar}
          />
        </TabPanel>
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

function NewsManagement({ news, setNews, setSnackbar }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentNews, setCurrentNews] = useState({
    id: null,
    title: "",
    date: "",
    content: "",
  });

  const handleOpenDialog = (
    newsItem = { id: null, title: "", date: "", content: "" }
  ) => {
    setCurrentNews(newsItem);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentNews({ id: null, title: "", date: "", content: "" });
  };

  const handleSaveNews = () => {
    if (currentNews.id) {
      setNews(
        news.map((item) => (item.id === currentNews.id ? currentNews : item))
      );
      setSnackbar({
        open: true,
        message: "News updated successfully",
        severity: "success",
      });
    } else {
      setNews([...news, { ...currentNews, id: Date.now() }]);
      setSnackbar({
        open: true,
        message: "News added successfully",
        severity: "success",
      });
    }
    handleCloseDialog();
  };

  const handleDeleteNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
    setSnackbar({
      open: true,
      message: "News deleted successfully",
      severity: "success",
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Manage News
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => handleOpenDialog()}
      >
        Add News Item
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleOpenDialog(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteNews(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentNews.id ? "Edit News" : "Add News"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={currentNews.title}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={currentNews.date}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, date: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Content"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={currentNews.content}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, content: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveNews}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function EventsManagement({ events, setEvents, setSnackbar }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    id: null,
    title: "",
    date: "",
    location: "",
  });

  const handleOpenDialog = (
    event = { id: null, title: "", date: "", location: "" }
  ) => {
    setCurrentEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentEvent({ id: null, title: "", date: "", location: "" });
  };

  const handleSaveEvent = () => {
    if (currentEvent.id) {
      setEvents(
        events.map((item) =>
          item.id === currentEvent.id ? currentEvent : item
        )
      );
      setSnackbar({
        open: true,
        message: "Event updated successfully",
        severity: "success",
      });
    } else {
      setEvents([...events, { ...currentEvent, id: Date.now() }]);
      setSnackbar({
        open: true,
        message: "Event added successfully",
        severity: "success",
      });
    }
    handleCloseDialog();
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((item) => item.id !== id));
    setSnackbar({
      open: true,
      message: "Event deleted successfully",
      severity: "success",
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Manage Events
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => handleOpenDialog()}
      >
        Add Event
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleOpenDialog(event)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {currentEvent.id ? "Edit Event" : "Add Event"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={currentEvent.title}
            onChange={(e) =>
              setCurrentEvent({ ...currentEvent, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={currentEvent.date}
            onChange={(e) =>
              setCurrentEvent({ ...currentEvent, date: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Location"
            type="text"
            fullWidth
            value={currentEvent.location}
            onChange={(e) =>
              setCurrentEvent({ ...currentEvent, location: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEvent}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function FacultyManagement({ faculty, setFaculty, setSnackbar }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentFaculty, setCurrentFaculty] = useState({
    id: null,
    name: "",
    department: "",
    position: "",
  });

  const handleOpenDialog = (
    facultyMember = { id: null, name: "", department: "", position: "" }
  ) => {
    setCurrentFaculty(facultyMember);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentFaculty({ id: null, name: "", department: "", position: "" });
  };

  const handleSaveFaculty = () => {
    if (currentFaculty.id) {
      setFaculty(
        faculty.map((item) =>
          item.id === currentFaculty.id ? currentFaculty : item
        )
      );
      setSnackbar({
        open: true,
        message: "Faculty member updated successfully",
        severity: "success",
      });
    } else {
      setFaculty([...faculty, { ...currentFaculty, id: Date.now() }]);
      setSnackbar({
        open: true,
        message: "Faculty member added successfully",
        severity: "success",
      });
    }
    handleCloseDialog();
  };

  const handleDeleteFaculty = (id) => {
    setFaculty(faculty.filter((item) => item.id !== id));
    setSnackbar({
      open: true,
      message: "Faculty member deleted successfully",
      severity: "success",
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Manage Faculty
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => handleOpenDialog()}
      >
        Add Faculty Member
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faculty.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleOpenDialog(member)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteFaculty(member.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {currentFaculty.id ? "Edit Faculty Member" : "Add Faculty Member"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={currentFaculty.name}
            onChange={(e) =>
              setCurrentFaculty({ ...currentFaculty, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Department"
            type="text"
            fullWidth
            value={currentFaculty.department}
            onChange={(e) =>
              setCurrentFaculty({
                ...currentFaculty,
                department: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Position"
            type="text"
            fullWidth
            value={currentFaculty.position}
            onChange={(e) =>
              setCurrentFaculty({ ...currentFaculty, position: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveFaculty}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function StatisticsManagement({ stats, setStats, setSnackbar }) {
  const [localStats, setLocalStats] = useState(stats);

  const handleUpdateStats = () => {
    setStats(localStats);
    setSnackbar({
      open: true,
      message: "Statistics updated successfully",
      severity: "success",
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Manage Statistics
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Student Count"
          variant="outlined"
          type="number"
          value={localStats.studentCount}
          onChange={(e) =>
            setLocalStats({
              ...localStats,
              studentCount: Number.parseInt(e.target.value),
            })
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Teacher Count"
          variant="outlined"
          type="number"
          value={localStats.teacherCount}
          onChange={(e) =>
            setLocalStats({
              ...localStats,
              teacherCount: Number.parseInt(e.target.value),
            })
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Grant Value (in billions)"
          variant="outlined"
          type="number"
          value={localStats.grantValue / 1000000000}
          onChange={(e) =>
            setLocalStats({
              ...localStats,
              grantValue: Number.parseFloat(e.target.value) * 1000000000,
            })
          }
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdateStats}>
          Update Statistics
        </Button>
      </Box>
    </Box>
  );
}
