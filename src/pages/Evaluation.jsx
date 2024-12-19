import React from "react";

export const Evaluation = () => {
  const questions = [
    { id: 1, title: "Question 1", marks: "7/10", status: "viewed" },
    { id: 2, title: "Question 2", marks: "7/10", status: "viewed" },
    { id: 3, title: "Question 3", marks: "7/10", status: "viewed" },
    { id: 4, title: "Question 4", marks: "7/10", status: "pending" },
  ];

  const questionDetails = {
    text: `A paisa coin is made up of Al-Mg alloy and weighs 0.75g. It has a square shape, and its diagonal measures 17 mm. It is electrically neutral and contains equal amounts of positive and negative charges. Treating the paisa coin as made up of only Al, find the magnitude of the equal number of positive and negative charges. What conclusion do you draw from this magnitude?`,
    imageSrc: "solution.png",
  };

  return (
    <div className="container mx-auto min-w-[70vw] p-6 rounded-lg">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Evaluation Report</h1>
      </div>

      <div className="mb-4">
        <p>
          <strong>Subject Name:</strong> Physics
        </p>
        <p>
          <strong>Paper Name:</strong> CBSE 2021
        </p>
        <p>
          <strong>Marks Scored:</strong> 53/70
        </p>
      </div>

      <div className="mb-6">
        <label htmlFor="teachersNote" className="block text-sm font-medium">
          Teacher's Note:
        </label>
        <textarea
          id="teachersNote"
          rows="4"
          placeholder="Add a note for the student..."
          className="w-full bg-inherit mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search by no."
          className="flex-1 bg-inherit p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
          Search
        </button>
      </div>

      <div className="p-4 rounded-lg mb-6">
        {questions.map((question) => (
          <div
            key={question.id}
            className="flex items-center justify-between py-2 px-4 mb-2 rounded-md"
          >
            <span className="font-medium">{question.title}</span>
            <span className="font-medium">{question.marks}</span>
          </div>
        ))}
      </div>

      <div className=" p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Question Details:</h3>
        <p>{questionDetails.text}</p>
        {questionDetails.imageSrc && (
          <div className="mt-4">
            <img
              src={questionDetails.imageSrc}
              alt="Solution"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};
