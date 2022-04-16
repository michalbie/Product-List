import React, { useEffect, useState } from "react";
import "./App.css";
import DataLoader from "./Components/DataLoader";
import List from "./Components/List/List";

function App() {
	const [data, setData] = useState(Object(null));

	return (
		<div className="app">
			<DataLoader setData={setData}></DataLoader>
			<List data={data}></List>
		</div>
	);
}

export default App;
