import { ThemeProvider } from 'styled-components'
import theme from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import ProductProvider from 'context/ProductContext';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
