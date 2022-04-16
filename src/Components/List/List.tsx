import React, { useEffect, useState } from "react";
import ListElement from "../ListElement";
import "./List.css";

interface ListProps {
	data: Object;
}

const List = ({ data }: ListProps): JSX.Element => {
	const elements = Object.entries(data).map((key, value) => {
		return <ListElement key={value} elementData={key[1]}></ListElement>;
	});
	return <div className="list">{elements}</div>;
};

export default List;
