import React, { useEffect, useState } from "react";
import "./ListElement.css";
import ProductTag from "./ProductTag";

interface ListElementProps {
	key: string;
	[elementData: string]: any;
}

const ListElement = ({ elementData }: ListElementProps): JSX.Element => {
	const statusList: [string] = elementData["prod_status"].split(",");

	const tags = statusList.map((tag, index) => {
		if (tag != "") return <ProductTag key={index} tagName={tag}></ProductTag>;
	});

	return (
		<div className="list-element">
			<div className="tag-container">{tags.length > 0 ? tags : null}</div>
			<img className="product-img" src="open-box.png"></img>
			<div className="text-container">
				<div className="title">{elementData["prod_name"]}</div>

				<div className="price-container">
					<hr></hr>
					<p className="price">{elementData["prod_price"]} zł</p>
					{elementData["prod_prev_price"] && elementData["prod_prev_price"] != elementData["prod_price"] ? (
						<s className="old-price">{elementData["prod_prev_price"]}</s>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ListElement;
