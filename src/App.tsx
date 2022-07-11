import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import "./App.css";
import ResponsiveAppBar from "./components/Appbar/ResponsiveAppBar";
import CategoryBlogs from "./components/CategoryBlogs/CategoryBlogs";
import LatestBar from "./components/LatestBar/LatestBar";
import SideBlogs from "./components/SideBlogs/SideBlogs";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#4d13d1",
      darker: "#053e85",
    },
    secondary: {
      main: "#f22613",
    },
    neutral: {
      main: blueGrey[900],
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <LatestBar />
      <SideBlogs />
      <CategoryBlogs />
    </ThemeProvider>
  );
}

export default App;
