"use client"; // Add this line to mark this file as a Client Component

import React, { useState, useEffect } from 'react';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

// Step 1: Define the TypeScript interface for the demo objects
interface Demo {
  id: number;
  name: string;
  country: string;
  date: string; // Assuming date is in string format; adjust if it's different
}

const TablesPage = () => {
  // Step 2: Use the interface in the useState hook
  const [demos, setDemos] = useState<Demo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    // Fetch demo data from backend
    fetch("/api/demos")
      .then(response => response.json())
      .then((data: Demo[]) => setDemos(data)) // Step 3: Ensure fetched data matches the Demo interface
      .catch(error => console.error("Error fetching demo data:", error));
  }, []);

  // Step 4: Apply filtering and sorting with correct typing
  const filteredDemos = demos
    .filter((demo: Demo) => 
      (!searchTerm || demo.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedCountry || demo.country === selectedCountry) &&
      (!filterDate || demo.date === filterDate)
    )
    .sort((a, b) => sortByDate === "asc" ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Booked Demo" />

      <div className="flex flex-col gap-10">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Book a Demo</h1>
          
          <div className="flex flex-wrap mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="p-2 border border-gray-300 rounded mr-2"
            >
              <option value="">All Countries</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Rwanda">Rwanda</option>
              <option value="DR Congo">DR Congo</option>
              <option value="Togo">Togo</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Somalia">Somalia</option>
              <option value="Malawi">Malawi</option>
              <option value="Zambia">Zambia</option>
              <option value="Burundi">Burundi</option>
            </select>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <select
              value={sortByDate}
              onChange={(e) => setSortByDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Sort by Date</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDemos.map(demo => (
              <div key={demo.id} className="p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-bold">{demo.name}</h2>
                <p className="text-gray-600">{demo.country}</p>
                <p className="text-gray-600">{new Date(demo.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;


// "use client"; // Add this line to mark this file as a Client Component

// import React, { useState, useEffect } from 'react';
// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// import DefaultLayout from "@/components/Layouts/DefaultLayout";

// const TablesPage = () => {
//   const [demos, setDemos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [sortByDate, setSortByDate] = useState("");
//   const [filterDate, setFilterDate] = useState("");

//   useEffect(() => {
//     // Fetch demo data from backend
//     fetch("/api/demos")
//       .then(response => response.json())
//       .then(data => setDemos(data));
//   }, []);

//   const filteredDemos = demos
//     .filter(demo => 
//       (!searchTerm || demo.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
//       (!selectedCountry || demo.country === selectedCountry) &&
//       (!filterDate || demo.date === filterDate)
//     )
//     .sort((a, b) => sortByDate === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));

//   return (
//     <DefaultLayout>
//       <Breadcrumb pageName="Booked Demo" />

//       <div className="flex flex-col gap-10">
//         <div className="container mx-auto p-4">
//           <h1 className="text-2xl font-bold mb-4">Book a Demo</h1>
          
//           <div className="flex flex-wrap mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="p-2 border border-gray-300 rounded mr-2"
//             />
//             <select
//               value={selectedCountry}
//               onChange={(e) => setSelectedCountry(e.target.value)}
//               className="p-2 border border-gray-300 rounded mr-2"
//             >
//               <option value="">All Countries</option>
//               <option value="Mauritius">Mauritius</option>
//               <option value="Kenya">Kenya</option>
//               <option value="Uganda">Uganda</option>
//               <option value="Tanzania">Tanzania</option>
//               <option value="Rwanda">Rwanda</option>
//               <option value="DR Congo">DR Congo</option>
//               <option value="Togo">Togo</option>
//               <option value="Nigeria">Nigeria</option>
//               <option value="Somalia">Somalia</option>
//               <option value="Malawi">Malawi</option>
//               <option value="Zambia">Zambia</option>
//               <option value="Burundi">Burundi</option>
//             </select>
//             <input
//               type="date"
//               value={filterDate}
//               onChange={(e) => setFilterDate(e.target.value)}
//               className="p-2 border border-gray-300 rounded mr-2"
//             />
//             <select
//               value={sortByDate}
//               onChange={(e) => setSortByDate(e.target.value)}
//               className="p-2 border border-gray-300 rounded"
//             >
//               <option value="">Sort by Date</option>
//               <option value="asc">Ascending</option>
//               <option value="desc">Descending</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredDemos.map(demo => (
//               <div key={demo.id} className="p-4 border border-gray-300 rounded">
//                 <h2 className="text-xl font-bold">{demo.name}</h2>
//                 <p className="text-gray-600">{demo.country}</p>
//                 <p className="text-gray-600">{new Date(demo.date).toLocaleDateString()}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </DefaultLayout>
//   );
// };

// export default TablesPage;
