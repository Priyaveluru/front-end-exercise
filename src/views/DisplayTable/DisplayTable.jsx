import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { useSort } from '../../hooks/useSort';
import './styles.css';

const DisplayTable = ({ assets }) => {
	const keys = Object.keys(assets[0]);
	const [list, setList] = useState(assets);
	/* sort logic is added in useSort custom hook */
	const { items, requestSort, sortConfig } = useSort(list);

	const getClassNamesFor = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};
	const filterList = (e, key) => {
		const updatedList = assets.filter((list) => {
			return list[`${key}`].toString().toLowerCase().search(e.target.value.toString().toLowerCase()) !== -1;
		});
		/*updating the return data based on the filtered inputs*/
		setList(updatedList);
	};

	const formatHeader = (key) => {
		return key.charAt(0).toUpperCase() + key.slice(1);
	};

	const handleFavorites = (asset) => {
		if (localStorage.getItem(asset.id)) {
			localStorage.removeItem(asset.id);
		} else {
			/*adding favorite item details to local storage*/
			localStorage.setItem(asset.id, JSON.stringify(asset));
		}
	};

	return (
		<Table striped bordered hover variant='dark'>
			<thead>
				<tr>
					{keys.map((key) => {
						return (
							<th key={key}>
								<button
									type='button'
									onClick={() => requestSort(key)}
									className={getClassNamesFor(key)}
								>
									{formatHeader(key)}
								</button>
								<input
									type='text'
									placeholder={`Search ${key}`}
									onChange={(e) => {
										filterList(e, key);
									}}
								/>
							</th>
						);
					})}
					<th>Favorite</th>
				</tr>
			</thead>
			<tbody>
				{items.map((asset, key) => {
					return (
						<tr key={key}>
							<td>{asset.id}</td>
							<td>{asset.assetName}</td>
							<td>{`$${asset.price}`}</td>
							<td>{asset.lastUpdate}</td>
							<td>{asset.type}</td>
							<td>
								<button
									type='button'
									className='favorite'
									data-test-id='favorite'
									onClick={() => handleFavorites(asset)}
								>
									{!!localStorage.getItem(asset.id) ? '❤' : '🤍'}
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export { DisplayTable };

DisplayTable.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.object)
};
