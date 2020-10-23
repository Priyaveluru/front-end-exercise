import React, { useState } from 'react';

import { DisplayTable } from '../DisplayTable';

const Root = () => {
	const createAsset = (assetId, assetType) => {
		return {
			id: assetId,
			assetName:
				assetType === 'Stock'
					? ['AAPL', 'GOOGL', 'FB', 'TSLA', 'MSFT'][Math.floor(Math.random() * 4)]
					: ['EUR', 'USD', 'GBP', 'NIS', 'AUD'][Math.floor(Math.random() * 4)],
			price: Math.random() * 10,
			lastUpdate: Date.now(),
			type: assetType
		};
	};

	const getAllAssets = (n) => {
		const result = [];
		for (let i = 0; i < n; i++) {
			result.push(createAsset(i, 'Stock'));
			result.push(createAsset(i + n, 'Currency'));
		}
		return result;
	};

	const allAssets = getAllAssets(200);
	const [assets, setAssets] = useState(allAssets);

	const updateAssets = () => {
		return allAssets.map((val) => {
			const random = Math.random();
			val.price = random >= 0.5 ? val.price + random : val.price - random;
			val.lastUpdate = Date.now();
			return val;
		});
	};

	/* calling updateAssets function for every 1 second*/
	setInterval(() => {
		const updatedAssets = updateAssets();
		setAssets(updatedAssets);
	}, 1000);

	return <DisplayTable assets={assets} />;
};

export { Root };
