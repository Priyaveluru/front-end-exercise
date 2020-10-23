import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DisplayTable } from './DisplayTable';

describe('DisplayTable', () => {
	it('should display the data provided to the component', () => {
		const data = [
			{
				id: 0,
				assetName: 'AAPL',
				price: 5,
				lastUpdate: 1603477243364,
				type: 'Stock'
			}
		];
		const { queryByText } = render(<DisplayTable assets={data} />);
		expect(queryByText('0')).toBeTruthy();
		expect(queryByText('AAPL')).toBeTruthy();
		expect(queryByText(`$5`)).toBeTruthy();
		expect(queryByText('1603477243364')).toBeTruthy();
		expect(queryByText('Stock')).toBeTruthy();
	});

	it('should return the value which matches the input provided in the Id filter', () => {
		const data = [
			{
				id: 10,
				assetName: 'AAPL',
				price: 5,
				lastUpdate: 1603477243364,
				type: 'Stock'
			}
		];
		const { queryByPlaceholderText, queryByText } = render(<DisplayTable assets={data} />);
		fireEvent.change(queryByPlaceholderText('Search id'), { target: { value: '10' } });
		expect(queryByText('10')).toBeTruthy();
	});

	it('should update the table data to ascending order, upon clicking on header name', () => {
		const data = [
			{
				id: 10,
				assetName: 'FB',
				price: 5,
				lastUpdate: 1603477243364,
				type: 'Stock'
			},
			{
				id: 8,
				assetName: 'AAPL',
				price: 5,
				lastUpdate: 1603477243364,
				type: 'Stock'
			}
		];
		const { container, queryByText } = render(<DisplayTable assets={data} />);
		const table_data = container.querySelector('tbody td');
		expect(table_data.textContent).toBe('10');
		fireEvent.click(queryByText('Id'));
		expect(table_data.textContent).toBe('8');
	});

	it('should display black favorite icon on intial pageload', () => {
		const data = [
			{
				id: 10,
				assetName: 'AAPL',
				price: 5,
				lastUpdate: 1603477243364,
				type: 'Stock'
			}
		];
		const { queryByText } = render(<DisplayTable assets={data} />);
		expect(queryByText('🤍')).toBeTruthy();
	});
});
