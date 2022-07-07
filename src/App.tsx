import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import "./App.css";

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
      main: "#be90d4",
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
      <Container>
        <Button variant="contained" color="secondary">
          Hello Motto
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
