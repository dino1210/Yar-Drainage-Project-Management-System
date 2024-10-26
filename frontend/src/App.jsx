import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Upperbar from "./components/Upperbar";
import Dashboard from "./Pages/Dashboard";
import InventoryManagement from "./Pages/InventoryManagement";
import Check from "./Pages/Check";
import Reports from "./Pages/Reports"
import UserManagement from "./Pages/UserManagement";
import Setting from "./Pages/Setting";


function App() {
  return (
    <div className="flex h-screen bg-gray-200 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
      </div>

      <Upperbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/check" element={<Check />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
