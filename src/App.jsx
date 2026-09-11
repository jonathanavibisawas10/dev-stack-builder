import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolCard from "./components/ToolCard";
import SelectedStack from "./components/SelectedStack";
import Footer from "./components/footer";


function App() {
  const [tools, setTools] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tools.json")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tool) => {
    const exists = selectedStack.find((item) => item.id === tool.id);
    if (exists) {
      toast.warning(`${tool.name} is already in your stack!`, {
        position: "bottom-right",
      });
      return;
    }

    setSelectedStack([...selectedStack, tool]);
    toast.success(`Added ${tool.name} to your stack!`, {
      position: "bottom-right",
    });
  };

  const handleRemove = (id) => {
    const removedItem = selectedStack.find((item) => item.id === id);
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(updatedStack);

    if (removedItem) {
      toast.info(`Removed ${removedItem.name} from stack.`, {
        position: "bottom-right",
      });
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("Removed all items from your stack!", {
      position: "bottom-right",
    });
    
  };

  return (
    <div className="min-h-screen bg-gray-50/30 text-gray-800">
      <ToastContainer />
      <Navbar />
      <Hero />
      

      {/* Main Section: Tools Grid + Stack Sidebar */}
      <section id="technologies" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Explore the <span className="text-[#B341C3]">Technologies</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Pick and match technologies for your stack.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-[#B341C3] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left 3 Columns: Tools Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {tools.map((tool) => {
                const isAdded = selectedStack.some((item) => item.id === tool.id);
                return (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    onAddToStack={handleAddToStack}
                    isAdded={isAdded}
                  />
                );
              })}
            </div>
            <div className="lg:col-span-1">
              <SelectedStack
                selectedStack={selectedStack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>

    
    
  );
}

export default App;