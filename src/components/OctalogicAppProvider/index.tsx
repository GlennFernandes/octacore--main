import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { theme } from "@octalogic-admin/constants";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[300],
      light: cyan[100],
      dark: cyan[700],
    },
    secondary: {
      main: cyan[300],
      light: cyan[100],
      dark: cyan[700],
    },
    background: {
      default: grey[100],
    },
  },
});

/* eslint-disable-next-line */
export interface OctalogicAppProviderProps {
  children: JSX.Element;
}

export function OctalogicAppProvider(props: OctalogicAppProviderProps) {
  const { children } = props;
  //   const queryClient = new QueryClient({
  //     defaultOptions: {
  //       queries: {
  //         refetchOnWindowFocus: false,
  //       },
  //     },
  //   });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default OctalogicAppProvider;
