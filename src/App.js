import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const App = () => {
	const [categories, setCategories] = useState(["Dragon Ball Z"]);

	return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</Fragment>
	);
}
