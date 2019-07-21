import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	};
	wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
	expect(wrapper.instance().filterRobots([])).toEqual([]);
});

// it('filters robots correctly', () => {
// 	const mockProps2 = {
// 		onRequestRobots: jest.fn(),
// 		robots: [
// 			{
// 				id: 3,
// 				name: 'John',
// 				email: 'john@gmail.com',
// 			},
// 		],
// 		searchField: 'a',
// 		isPending: false,
// 	};
// 	wrapper2 = shallow(<MainPage {...mockProps2} />);
//   expect(wrapper2.instance().filterRobots()).toEqual([]);
//   expect(wrapper2.instance().filterRobots()).toEqual([]);
// });

// it('filters Robots correctly', () => {
//   const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }],
//     searchField: 'Leanne',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
// });

// it('filters Robots correctly 2', () => {
//   const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }],
//     searchField: 'Xavier',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual([]);
// });
