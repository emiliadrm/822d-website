import { Route, Routes } from "react-router";
import Home from "./Home";
import WorkInProgress from "./pages/WorkInProgress";


const Root: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="comeback" element={<WorkInProgress />} />
            <Route path="voting" element={<WorkInProgress />} />
            <Route path="streaming" element={<WorkInProgress />} />
            <Route path="korean-streaming" element={<WorkInProgress />} />
            <Route path="moa-zone" element={<WorkInProgress />} />
            <Route path="822-team" element={<WorkInProgress />} />
     
        </Routes>
    )
}

export default Root;