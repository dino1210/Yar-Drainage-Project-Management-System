import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import InventoryManagement from "./pages/InventoryManagement";
import Check from "./pages/Check";
import Reports from "./pages/Reports";
import UserManagement from "./pages/UserManagement";
import Help from "./pages/Help";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <Router>
      <main className="App">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              path="/"
            />
            <SidebarItem
              icon={<UserCircle size={20} />}
              text="Inventory Management"
              path="/inventory-management"
            />
            <SidebarItem
              icon={<Boxes size={20} />}
              text="Check-In/Check-Out"
              path="/check"
            />
            <SidebarItem
              icon={<BarChart3 size={20} />}
              text="Reports"
              path="/reports"
            />
            <SidebarItem
              icon={<Package size={20} />}
              text="User Management"
              path="/user-management"
            />
            <hr className="my-3" />
            <SidebarItem
              icon={<Settings size={20} />}
              text="Settings"
              path="/setting"
            />
            <SidebarItem
              icon={<LifeBuoy size={20} />}
              text="Help"
              path="/help"
            />
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/inventory-management"
                element={<InventoryManagement />}
              />
              <Route path="/check" element={<Check />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </main>
        </div>
      </main>
    </Router>
  );
}
