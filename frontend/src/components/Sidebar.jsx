import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, TrendingUp, ListChecks, NotepadText, UserRoundCog } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BarChart2, color: "white", href: "/",},
  { name: "Inventory Management", icon: ShoppingBag, color: "white", href: "/products" },
  { name: "Check-In/Check-Out", icon: ListChecks, color: "white", href: "/users" },
  { name: "Reports", icon: NotepadText, color: "white", href: "/sales" },
  { name: "User Management", icon: UserRoundCog, color: "white", href: "/orders" },
  { name: "Settings", icon: Settings, color: "white", href: "/settings" },
];


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 mb-20 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-5 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors mb-4">
                <item.icon
                  size={22}
                  style={{ color: item.color, minWidth: "22px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar