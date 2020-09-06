import React, { useState, Fragment } from 'react';
import './styles.css';
import Spacer from 'react-add-space';
function App() {
	let [
		input,
		setInput
	] = useState([]);

	let allnumber = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9
	];
	const [
		rantwo,
		setRantwo
	] = useState([]);

	const [
		ran,
		setRan
	] = useState([]);
	const [
		two,
		setTwo
	] = useState([]);
	const [
		three,
		setThree
	] = useState([]);
	let newinput = [];
	const summit = (e) => {
		function inArray(arr, el) {
			for (var i = 0; i < arr.length; i++) if (arr[i] === el) return true;
			return false;
		}
		newinput = [
			input.first,
			input.second
		];

		function arr_diff(a1, a2) {
			var a = [],
				diff = [];

			for (var i = 0; i < a1.length; i++) {
				a[a1[i]] = true;
			}

			for (var i = 0; i < a2.length; i++) {
				if (a[a2[i]]) {
					delete a[a2[i]];
				} else {
					a[a2[i]] = true;
				}
			}

			for (var k in a) {
				diff.push(k);
			}

			return diff;
		}

		let ex = arr_diff(allnumber, newinput);
		e.preventDefault();
		function getRandomIntNoDuplicates(min, max, DuplicateArr) {
			var RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
			if (DuplicateArr.length > max - min) return false; // break endless recursion
			if (!inArray(DuplicateArr, RandomInt)) {
				DuplicateArr.push(RandomInt);
				return RandomInt;
			}
			return getRandomIntNoDuplicates(min, max, DuplicateArr); //recurse
		}

		var duplicates = [];
		let limit = ex.length - 1;

		let arr = [];
		for (var i = 1; i <= 3; i++) {
			arr.push(getRandomIntNoDuplicates(1, limit, duplicates));
		}

		let arr2 = [];
		for (var i = 1; i <= 6; i++) {
			arr.push(getRandomIntNoDuplicates(1, limit, duplicates));
		}

		let tworan = [
			input.first.toString() + ex[arr[0]].toString(),
			input.first.toString() + ex[arr[1]].toString(),
			input.first.toString() + ex[arr[2]].toString(),
			input.second.toString() + ex[arr[3]].toString(),
			input.second.toString() + ex[arr[4]].toString(),
			input.second.toString() + ex[arr[5]].toString()
		];

		setRantwo(tworan);

		let randomThree = [
			ex[arr[0]],
			ex[arr[1]],
			ex[arr[2]]
		];

		let allFiveNum = newinput.concat(randomThree);
		setRan(allFiveNum);
		let twoArr = [
			12,
			13,
			14,
			15,
			23,
			24,
			25,
			34,
			35,
			45
		];

		let threeArr = [
			123,
			124,
			125,
			134,
			135,
			145,
			234,
			235,
			245,
			345
		];

		let resultsTwo = [];
		twoArr.map((item) => {
			item = item.toString();
			let b = allFiveNum[item[0] - 1].toString() + allFiveNum[item[1] - 1].toString();
			resultsTwo.push(b);
		});

		setTwo(resultsTwo);

		let resultsThree = [];
		threeArr.map((item) => {
			item = item.toString();
			let b =
				allFiveNum[item[0] - 1].toString() +
				allFiveNum[item[1] - 1].toString() +
				allFiveNum[item[2] - 1].toString();
			resultsThree.push(b);
		});

		console.log(resultsThree);
		setThree(resultsThree);
	};

	const handleNum = (e) => {
		const { name, value } = e.target;
		setInput((prevValue) => {
			return {
				...prevValue,
				[name] : value
			};
		});
	};
	return (
		<div class="p-4 w-full bg-gray-800 h-screen">
			<div class="p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg ">
				<span class="px-2 mr-2 border-r border-gray-800">
					<img
						src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
						alt="alt placeholder"
						class="w-8 h-8 -mt-1 inline mx-auto"
					/>
				</span>
				<span class="px-1 hover:text-white cursor-pointer">
					<i class="fas fa-stream p-2 bg-gray-800 rounded-full" />
				</span>
				<span class="px-1 hover:text-white cursor-pointer">
					<i class="fas fa-search p-2 bg-gray-800 rounded-full" />
				</span>
				<span class="px-1 hover:text-white cursor-pointer">
					<i class="fas fa-th p-2 bg-gray-800 rounded-full" />
				</span>
				<span class="px-1 hover:text-white cursor-pointer">
					<i class="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full" />
				</span>
				<span class="px-1 hover:text-white cursor-pointer w-8 relative">
					<i class="fas fa-bell p-2 bg-gray-800 rounded-full" />
					<span class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
						3
					</span>
				</span>
				<span class="hover:text-white cursor-pointer w-10 relative float-right mr-3">
					<i class="fas fa-user p-2 bg-gray-800 rounded-full" />
					<span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
						3
					</span>
				</span>
			</div>
			<div class="bg-gray-700 p-6 m-2 rounded-lg ">
				<input class="bg-gray-200 rounded-sm p-1 w-8 text-center" onChange={handleNum} name="first" />
				<input class="bg-gray-200 rounded-sm p-1 ml-2 w-8 text-center" onChange={handleNum} name="second" />
				<button class="bg-green-900 p-2 ml-4 rounded-lg text-white" onClick={summit}>
					คำนวน
				</button>
				<div class="flex mt-5">{ran.map((item) => <ShowAll data={item} />)}</div>
				<p class="text-white">ยีกีเว็บรวยรอบที่</p>
				<div class="flex mt-5">{<ShowAll2 data={ran[0]} />}</div>
				<div class="flex">{<ShowAll2 data={ran[1]} />}</div>
				{/* <div class="flex text-lg text-white">{two.sort().map((item) => <Two data={item} />)}</div> */}
				<div class="flex text-lg text-white mt-5">{newinput.map((item) => <Two data={item} />)}</div>
				<div class="flex text-lg text-white mt-5">
					{rantwo.sort().slice(0, 3).map((item) => <Two data={item} />)}
				</div>
				<br />
				<div class="flex text-lg text-white ">{rantwo.sort().slice(3).map((item) => <Two data={item} />)}</div>
				<br />
				<br />
				<div class="flex text-lg text-white">{three.sort().slice(0, 5).map((item) => <Two data={item} />)}</div>
				<br />
				<div class="flex text-lg text-white">{three.sort().slice(5).map((item) => <Two data={item} />)}</div>

				{/* <textarea id="w3review" name="w3review" rows="4" cols="50">
					{ran.map((item) => {
						return item;
					})}
				</textarea> */}
			</div>
		</div>
	);
}

const ShowAll = (props) => {
	return <div class="flex text-lg text-white">{props.data}</div>;
};

const ShowAll2 = (props) => {
	return (
		<Fragment>
			<span class="text-lg text-white">{props.data}</span>
		</Fragment>
	);
};
const Two = (props) => {
	return (
		<React.Fragment>
			{props.data}
			<Spacer amount={2} />
		</React.Fragment>
	);
};

export default App;
