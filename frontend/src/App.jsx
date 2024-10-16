import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import InventoryManagement from "./pages/InventoryManagement";
import Check from "./Pages/Check";
import Reports from "./Pages/Reports"
import UserManagement from "./pages/UserManagement";
import Setting from "./Pages/Setting";


function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/users" element={<Check />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/orders" element={<UserManagement />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
