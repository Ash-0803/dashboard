import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";
import Bar from "./scenes/Bar";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import FAQ from "./scenes/FAQ";
import Geography from "./scenes/Geography";
import Calendar from "./scenes/Calendar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: "flex" }} className="App">
            <Sidebar />
            <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
              <Topbar />
              {/* <Box sx={{ flexGrow: 1 }}> */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Invoices />} />
                <Route path="/invoices" element={<Contacts />} />
                <Route path="/form" element={<Bar />} />
                <Route path="/bar" element={<Form />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Box>
            {/* </Box> */}
          </Box>
        </Router>
        <main className="content"></main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
