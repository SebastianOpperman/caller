import React from 'react';

interface Props {
	accepted: number
}

export default (props:Props) => (
	<>
		{props.accepted === 0 && <h1>New delivery</h1>}
		{props.accepted === 1 && <h1>Cancelled delivery</h1>}
		{props.accepted === 2 && <h1>Let's Go!</h1>}
	</>
);