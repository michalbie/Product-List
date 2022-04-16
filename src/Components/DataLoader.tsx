import React, { useState, useEffect } from "react";

interface DataLoaderProps {
	setData: React.Dispatch<React.SetStateAction<undefined>>;
}

const DataLoader = ({ setData }: DataLoaderProps) => {
	const downloadData = () => {
		fetch("products.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
			});
	};

	useEffect(() => {
		downloadData();
	}, []);

	return null;
};

export default DataLoader;
