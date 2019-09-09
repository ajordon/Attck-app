import React from 'react';

const Namebox = props => {
	const { handleClick, value, name } = props
	return (
		<button type="button" className="btn-box" onClick={handleClick} value={value} name={name}>{name}</button>
	)
};

export default Namebox;
