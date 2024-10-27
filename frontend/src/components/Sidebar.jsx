import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, TrendingUp, ListChecks, NotepadText, UserRoundCog } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BarChart2, color: "gray", href: "/",},
  { name: "Inventory Management", icon: ShoppingBag, color: "gray", href: "/inventory" },
  { name: "Check-In/Check-Out", icon: ListChecks, color: "gray", href: "/check" },
  { name: "Reports", icon: NotepadText, color: "gray", href: "/reports" },
  { name: "User Management", icon: UserRoundCog, color: "gray", href: "/users" },
  { name: "Setting", icon: Settings, color: "gray", href: "/setting" },
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
      <div className="h-full bg-white p-4 flex flex-col border-r shadow-lg ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 mb-20 rounded-md hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} style={{ color: 'gray' }}/>
        </motion.button>

        <nav className="mt-5 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors mb-4">
                <item.icon
                  size={22}
                  style={{ color: item.color, minWidth: "22px", }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap text-gray-800"
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