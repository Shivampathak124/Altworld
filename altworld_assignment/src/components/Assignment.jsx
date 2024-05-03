
import React, { useState, useEffect } from "react";
import { fetchCandidates, addCandidate } from "./mockApi";

function Assignment() {
  const [candidates, setCandidates] = useState([]);
  const [newCandidateName, setNewCandidateName] = useState("");

 
  const loadCandidates = async () => {
    try {
      const data = await fetchCandidates();
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };


  const handleAddCandidate = async () => {
    try {
      const newCandidate = {
        id: candidates.length + 1,
        name: newCandidateName,
      };
      const updatedCandidates = await addCandidate(newCandidate);
      setCandidates(updatedCandidates);
      setNewCandidateName("");
    } catch (error) {
      console.error("Error adding candidate:", error);
    }
  };

  
  useEffect(() => {
    loadCandidates();
  }, []);

  return (
    <div>
      <h1>Assignment Page</h1>
      <h2>Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter candidate name"
          value={newCandidateName}
          onChange={(e) => setNewCandidateName(e.target.value)}
        />
        <button onClick={handleAddCandidate}>Add Candidate</button>
      </div>
    </div>
  );
}

export default Assignment;
