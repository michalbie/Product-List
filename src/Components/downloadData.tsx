import React from "react";

export default function downloadData(setData: React.Dispatch<any>) {
	const data = fetch("products.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			setData(myJson);
		});
}
