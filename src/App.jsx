import { useState } from "react";

const table = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [tableData, setTableData] = useState([...table]);



  const handleDateSort =()=>{
    const sortedDate = [...tableData].sort((a,b)=>new Date(b.date)-new Date(a.date));
    setTableData(sortedDate); 

  }

  const handleViewSort =()=>{
    const sortedViews = [...tableData].sort((a,b)=>b.views-a.views);
    setTableData(sortedViews);    
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDateSort}>Sort by Date</button>
      <button onClick={handleViewSort}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data,index) => 
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.views}</td>
              <td>{data.article}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
