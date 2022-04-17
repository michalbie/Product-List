import { resolve } from "node:path/win32";
import React, { useState, useEffect } from "react";

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
	// const json = await data.json();
	// return json;
}
