const INITIAL_STATE = {
	map:{
		districtMode:false,
		markers:[]
	},
	location:{
		country:null,
		district:null
	},
	users:{
		lastQuery:null,
		results:[],
		showModal:false
	},
	loading:{
		count:0
	}
};

export default INITIAL_STATE;
