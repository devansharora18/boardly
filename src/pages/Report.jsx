import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Report = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for programmatic navigation

  const papers = [
    { id: 1, title: "physics PYQ", status: "Pending", action: "Upload", route: "/eval/physics" },
    { id: 2, title: "maths PYQ", status: "Completed", action: "Result", route: "/eval/maths" },
    { id: 3, title: "chem PYQ", status: "Failed", action: "Reupload", route: "/eval/chemistry" },
  ];

  const filteredPapers = papers.filter((paper) =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePaperClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="container mx-auto min-w-[70vw] p-6 rounded-lg">
        <h1 className="text-xl font-semibold mb-6">Choose your paper for evaluation</h1>
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 border bg-inherit border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSearchQuery("")}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Clear
          </button>
        </div>
        <div>
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="flex items-center justify-between py-4 my-3 px-2 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() => handlePaperClick(paper.route)}
              >
                <div className="font-medium">{paper.title}</div>
                <div className="text-center">
                  {paper.status === "Completed" && (
                    <span className="text-green-500 font-medium">{paper.status}</span>
                  )}
                  {paper.status === "Failed" && (
                    <span className="text-red-500 font-medium">{paper.status}</span>
                  )}
                  {paper.status === "Pending" && (
                    <span className="text-gray-500 font-medium">{paper.status}</span>
                  )}
                </div>
                <button
                  className={`px-4 py-2 rounded-md shadow text-white ${
                    paper.action === "Upload"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : paper.action === "Result"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {paper.action}
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No papers found</p>
          )}
        </div>
      </div>
    </div>
  );
};
