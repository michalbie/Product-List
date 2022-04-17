import React, { useEffect, useState } from "react";
import "./ListElement.css";

interface ProductTagProps {
	tagName: string;
}

type tTagNames = {
	[key: string]: string;
};

const TagNames: tTagNames = {
	recommended: "Polecamy",
	promotion: "Promocja",
	new: "Nowość",
	bestseller: "Bestseller",
	saleout: "Wyprzedaż",
};

const ProductTag = ({ tagName }: ProductTagProps): JSX.Element => {
	return <div className="product-tag">{TagNames[tagName]}</div>;
};

export default ProductTag;
