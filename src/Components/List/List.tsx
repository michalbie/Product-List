import React, { useEffect, useState, useRef } from "react";
import ListElement from "../ListElement/ListElement";
import "./List.css";
import downloadData from "../downloadData";

const List = (): JSX.Element => {
	const [data, setData] = useState(Object(null));
	const [filterOption, setFilterOption] = useState<string | undefined>("null");
	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		downloadData(setData);
	}, []);

	const updateFilterOption = () => {
		setFilterOption(selectRef?.current?.value);
	};

	let elements = new Array<JSX.Element>();

	for (const key of Object.keys(data)) {
		const value = data[key];
		if (filterOption != null && value["prod_status"].includes(filterOption)) {
			elements.push(<ListElement key={key} elementData={value}></ListElement>);
		} else if (filterOption == "null") {
			elements.push(<ListElement key={key} elementData={value}></ListElement>);
		}
	}

	return (
		<div id="container">
			<section className="select-area">
				<select ref={selectRef} id="tag-select" name="filter-select" onChange={updateFilterOption}>
					<option value="null">-- Wybierz filtr --</option>
					<option value="promotion">Promocja</option>
					<option value="new">Nowość</option>
					<option value="saleout">Wyprzedaż</option>
					<option value="bestseller">Bestseller</option>
					<option value="recommended">Polecamy</option>
				</select>
			</section>
			<div id="list-container">
				<div className="list">{elements}</div>
			</div>
		</div>
	);
};

export default List;
