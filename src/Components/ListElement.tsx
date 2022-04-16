import React, { useEffect, useState } from "react";

interface ListElementProps {
	key: number;
	[elementData: string]: any;
}

const ListElement = ({ elementData }: ListElementProps): JSX.Element => {
	return <div>{elementData["prod_id"]}</div>;
};

export default ListElement;
