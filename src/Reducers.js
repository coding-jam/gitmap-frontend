import INITIAL_STATE from "/model/INITIAL_STATE";

var loadingStart= (state) => {
	return Object.assign({},state,{
		loading:{
			count:state.loading.count + 1
		}
	});
};

var loadingEnd = (state) => {
	var count = state.loadingCount > 0 ? state.loadingCount - 1 : 0;
	return Object.assign({},state,{
		loading:{
			count:count
		}
	});
};

var userByLocationLoaded = (state,action) => {

	var users = Object.assign({},state.users,{
		results:[...action.users],
		showUserModal:true
	});

	var location = Object.assign({},state.location,{
		country:action.country,
		district:action.district
	});

	var toReturn = Object.assign({},state,{
		users:users,
		location:location
	});

	return loadingEnd(toReturn);
};

var closeUserDialog = (state) => {

	var users = Object.assign({},state.users,{
		results:[],
		showUserModal:false
	});

	var location = Object.assign({},state.location,{
		district:null
	});

	return Object.assign({},state,{
		users:users,
		location:location
	});
}

var markersLoaded = (state,action) => {

	var users = Object.assign({},state.users,{
		lastQuery:action.query
	});

	var map = {...state.map,...{
		markers:[...action.markers],
		districtMode:action.districtMode
	}};

	var toReturn = Object.assign({},state,{
		users:users,
		map:map
	});

	return loadingEnd(toReturn);
};

var reducers = {
	loadingStart:loadingStart,
	loadingEnd:loadingEnd,
	userByLocationLoaded:userByLocationLoaded,
	closeUserDialog:closeUserDialog,
	markersLoaded:markersLoaded
};

export default function(state = INITIAL_STATE, action) {

	var reducer = reducers[action.actionType] || ((state) => {return state});

	return reducer(state,action);
}
