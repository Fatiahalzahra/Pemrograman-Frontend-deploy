//import browser routerdari react router
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        {/*
            *bungkus dan hubungkan aplikasi dengan browser router.
            *agar URL Browser dapat dimanipulasi oleh react router.
            */
        }
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById("root")
);