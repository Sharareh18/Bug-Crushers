// Sample table data
const tableData = [
    { date: '2023-10-01', name: 'John Doe', steps: 5000 },
    { date: '2023-10-02', name: 'Jane Smith', steps: 6000 },
    { date: '2023-10-03', name: 'John Doe', steps: 7000 },
    { date: '2023-10-04', name: 'Jane Smith', steps: 8000 }
  ];
  
  // Function to parse and store table data in an array
  function storeTableData() {
    const data = [];
    tableData.forEach((row) => {
      const parsedDate = new Date(row.date);
      data.push({
        date: parsedDate,
        name: row.name,
        steps: row.steps
      });
    });
    return data;
  }
  
  // Store the table data in an array
  const storedData = storeTableData();
  console.log(storedData);
  