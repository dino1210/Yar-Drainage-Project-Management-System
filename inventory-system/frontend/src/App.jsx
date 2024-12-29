import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Headerbar from "./components/Headerbar";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
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
import { useState } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

  return (
    <Router>
      <main className="App">
        <div className="flex h-screen">
          {/* Sidebar - Visible only if authenticated */}
          {isAuthenticated && (
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
          )}

          {/* Main Content */}
          <main
            className={`flex-1 bg-gray-100 overflow-auto ${
              !isAuthenticated ? "flex items-center justify-center" : ""
            }`}
          >
            {!isAuthenticated ? (
              <Routes>
                {/* Redirect all routes to login if not authenticated */}
                <Route
                  path="*"
                  element={
                    <Login
                      onLoginSuccess={() => {
                        setIsAuthenticated(true); // Authenticate user on successful login
                      }}
                    />
                  }
                />
              </Routes>
            ) : (
              <>
                <Headerbar className="sticky z-0" />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/inventory-management"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <InventoryManagement />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/check"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Check />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/reports"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Reports />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/user-management"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <UserManagement />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/setting"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Setting />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/help"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Help />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </>
            )}
          </main>
        </div>
      </main>
    </Router>
  );
}
