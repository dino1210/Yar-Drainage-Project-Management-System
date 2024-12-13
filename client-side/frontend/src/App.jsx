import React, { useState } from "react";
import { PlusCircle, CheckCircle, QrCode, FolderPlus } from "lucide-react";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [newProjectName, setNewProjectName] = useState("");
  const [items] = useState({
    "Cutting Tools": [
      { id: 1, code: "DISC-001", name: 'Cutting Disc 4" 1mm', checked: false },
      {
        id: 2,
        code: "DISC-002",
        name: 'Cutting Disc 4" 2.5mm',
        checked: false,
      },
    ],
    "Grinding Tools": [
      { id: 3, code: "DISC-003", name: 'Cutting Disc 7"', checked: false },
      { id: 4, code: "DISC-005", name: 'Grinding Disc 4"', checked: false },
    ],
    Wheels: [
      { id: 5, code: "DISC-004", name: 'Cutting Wheel 14"', checked: false },
    ],
  });

  const handleCreateProject = () => {
    if (!newProjectName) {
      alert("Please enter a project name.");
      return;
    }
    setProjects([...projects, { name: newProjectName, items: {} }]);
    setNewProjectName("");
    alert(`Project "${newProjectName}" created.`);
  };

  const toggleCheck = (category, id) => {
    setProjects((prevProjects) => {
      if (!currentProject) return prevProjects;

      const updatedItems = {
        ...currentProject.items,
        [category]: currentProject.items[category]?.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        ),
      };

      const updatedProject = { ...currentProject, items: updatedItems };

      return prevProjects.map((project) =>
        project.name === currentProject.name ? updatedProject : project
      );
    });
  };

  const handleCheckIn = () => {
    if (!currentProject) {
      alert("Please select or create a project.");
      return;
    }

    const checkedItems = [];
    for (const category in currentProject.items) {
      currentProject.items[category]?.forEach((item) => {
        if (item.checked) checkedItems.push(item.name);
      });
    }

    if (checkedItems.length === 0) {
      alert("No items selected for check-in.");
    } else {
      alert(
        `Checked in items for project "${
          currentProject.name
        }": ${checkedItems.join(", ")}`
      );
    }
  };

  const handleScanQRCode = () => {
    alert("QR Code Scanner functionality coming soon!");
    // Integrate QR code logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-700">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">Project Check-In</h1>

        {/* Project Creation */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold mb-2">Create a New Project:</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-grow rounded-lg border bg-gray-100 px-4 py-2 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Project Name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <button
              onClick={handleCreateProject}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
            >
              <FolderPlus className="w-4 h-4" />
              <span>Create</span>
            </button>
          </div>
        </div>

        {/* Project Selection */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold mb-2">Select a Project:</h2>
          <select
            className="w-full rounded-lg border bg-gray-100 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={(e) =>
              setCurrentProject(
                projects.find((project) => project.name === e.target.value)
              )
            }
          >
            <option value="">Select Project</option>
            {projects.map((project, index) => (
              <option key={index} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Item Selection */}
        {currentProject && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold mb-2">
              Check In Items for Project: {currentProject.name}
            </h2>
            {Object.entries(items).map(([category, categoryItems]) => (
              <div key={category} className="mb-4">
                <h3 className="font-medium text-gray-600 mb-2">{category}</h3>
                <ul className="space-y-2">
                  {categoryItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          Code: {item.code}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={currentProject.items[category]?.some(
                          (i) => i.id === item.id && i.checked
                        )}
                        onChange={() => toggleCheck(category, item.id)}
                        className="form-checkbox w-5 h-5 text-blue-500 rounded"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* QR Code Scanner */}
        <div className="mb-4">
          <button
            onClick={handleScanQRCode}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600"
          >
            <QrCode className="w-5 h-5" />
            <span>Scan QR Code</span>
          </button>
        </div>

        {/* Check-In Button */}
        <button
          onClick={handleCheckIn}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Check In Selected Items</span>
        </button>
      </div>
    </div>
  );
};

export default App;
