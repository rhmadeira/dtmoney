import { ThemeProvider } from "styled-components";
import Transactions from "./pages/Transactions";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  );
}

export default App;
