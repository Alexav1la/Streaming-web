import { Routes, Route } from "react-router-dom";  
import { Suspense } from 'react';
import Home from "./Home";
import Loading  from "./Loading"; 
import Serie from "./Serie";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/serie" element={< Serie />} />
        </Routes>
        <Suspense fallback={<Loading/>}>
        </Suspense>
        </>
    );
}
export default App