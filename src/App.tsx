
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SearchParts from "./pages/SearchParts";
import BuildPC from "./pages/BuildPC";
import Cart from "./pages/Cart";
import Readymade from "./pages/Readymade";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import TrackOrder from "./pages/TrackOrder";
import Complaint from "./pages/Complaint";
import Repair from "./pages/Repair";
import ShowroomBuild from "./pages/ShowroomBuild";
import Inventory from "./pages/Inventory";
import ResellPC from "./pages/ResellPC";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/custom-build-demo/" element={<Home />} />
              <Route path="/custom-build-demo/login" element={<Login />} />
              <Route path="/custom-build-demo/signup" element={<Signup />} />
              <Route path="/custom-build-demo/forgot-password" element={<ForgotPassword />} />
              <Route path="/custom-build-demo/profile" element={<Profile />} />
              <Route path="/custom-build-demo/search-parts" element={<SearchParts />} />
              <Route path="/custom-build-demo/build-pc" element={<BuildPC />} />
              <Route path="/custom-build-demo/cart" element={<Cart />} />
              <Route path="/custom-build-demo/readymade" element={<Readymade />} />
              <Route path="/custom-build-demo/checkout" element={<Checkout />} />
              <Route path="/custom-build-demo/invoice" element={<Invoice />} />
              <Route path="/custom-build-demo/track-order" element={<TrackOrder />} />
              <Route path="/custom-build-demo/complaint" element={<Complaint />} />
              <Route path="/custom-build-demo/repair" element={<Repair />} />
              <Route path="/custom-build-demo/showroom-build" element={<ShowroomBuild />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/custom-build-demo/resell" element={<ResellPC />} />
              <Route path="/custom-build-demo/contact" element={<Contact />} />
              <Route path="/custom-build-demo/terms" element={<Terms />} />
              <Route path="/custom-build-demo/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
