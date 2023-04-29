import React from 'react';

const Categories = ({ filterItems, categories }) => {
	return (
		<div className="btn-container">
			{categories.map((catergory, index) => {
				return (
					<button
						className="filter-btn"
						type="button"
						key={index}
						onClick={() => filterItems(catergory)}
					>
						{catergory}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
