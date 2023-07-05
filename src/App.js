// import logo from './logo.svg';

import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
import RoutesFolder from "./routes";

function App() {
  return (
    <div className="App">
        <Header/>
        <RoutesFolder/>
        <Footer/>
    </div>
  );
}

export default App;
