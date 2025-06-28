
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/AppLayout/Home";
import About from "./pages/AppLayout/About";
import Login from "./pages/AppLayout/Login";
import AuthRequired from "./pages/AppLayout/AuthRequired";
import NotFound from "./pages/AppLayout/NotFound";
import Vans from "./pages/AppLayout/Vans/Vans";
import VanDetail from "./pages/AppLayout/Vans/VanDetail";
import HostLayout from "./pages/AppLayout/Host/HostLayout";
import Dashboard from "./pages/AppLayout/Host/HostLayout/Dashboard";
import Income from "./pages/AppLayout/Host/HostLayout/Income";
import Reviews from "./pages/AppLayout/Host/HostLayout/Reviews";
import HostVans from "./pages/AppLayout/Host/HostLayout/HostVans";
import HostVanDetailLayout from "./pages/AppLayout/Host/HostLayout/HostVanDetailLayout";
import Details from "./pages/AppLayout/Host/HostLayout/HostVanDetailLayout/Details";
import Pricing from "./pages/AppLayout/Host/HostLayout/HostVanDetailLayout/Pricing";
import Photos from "./pages/AppLayout/Host/HostLayout/HostVanDetailLayout/Photos";

export default function App() {
    return (
        <div className="vanlife">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route element={<AuthRequired />}>
                            <Route path="host" element={<HostLayout />}>
                                <Route index element={<Dashboard />} />
                                <Route path="income" element={<Income />} />
                                <Route path="vans" element={<HostVans />} />
                                <Route path="vans/:id" element={<HostVanDetailLayout />}>
                                    <Route index element={<Details />} />
                                    <Route path="pricing" element={<Pricing />} />
                                    <Route path="photos" element={<Photos />} />
                                </Route>
                                <Route path="reviews" element={<Reviews />} />
                            </Route>
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VanDetail />} />
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}