const fetchCandidates = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
      const candidates = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
      ];
      resolve(candidates);
    }, 1000); 
  });
};

export const addCandidate = (newCandidate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedCandidates = [...candidates, newCandidate];
      resolve(updatedCandidates);
    }, 1000);
  });
};
