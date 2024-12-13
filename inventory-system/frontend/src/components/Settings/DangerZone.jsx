const DangerZone = () => {
    const handleDelete = () => {
      alert("Are you sure you want to delete your account?");
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-red-600 text-lg font-semibold mb-2">Danger Zone</h3>
        <p className="text-gray-600 mb-4">
          Permanently delete your account and all of your content. This action
          cannot be undone.
        </p>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete Account
        </button>
      </div>
    );
  };
  
  export default DangerZone;
  