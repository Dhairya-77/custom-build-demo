
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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search-parts" element={<SearchParts />} />
              <Route path="/build-pc" element={<BuildPC />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/readymade" element={<Readymade />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/repair" element={<Repair />} />
              <Route path="/showroom-build" element={<ShowroomBuild />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/resell" element={<ResellPC />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
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
