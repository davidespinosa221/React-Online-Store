import { createActions } from 'redux-actions';


const actionsUser = createActions({

	USER_LOGIN: user => {
		
		const { _id, username, firstname, lastname } = user;
			
		return { 
			
			user: {
				_id,
				username,
				firstname,
				lastname
			}

		};
	},
	USER_LOGOUT: val => val

});

const actionsIUstate = createActions({

	DEPARTMENTS: {
		OPEN: val => val,
		CLOSE: val => val
	}
});

const actionsItemsData = createActions({

	CATEGORIES: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	SUBCATEGORIES: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	DEALS_ITEMS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	BEST_SELLER_ITEMS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	MUST_HAVE_ITEMS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	SEASON_ITEMS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	FILTERED_ITEMS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		}),
		APPLY_FILTER: filter => ({
			filter
		})
	}
});


const actionsUserData = createActions({
	ORDERS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	ORDER_ITEMS: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	LAST_SEARCHES: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	},
	LAST_VIEW: {
		FETCH: val => val,
		FETCH_SUCCESS: docs => ({
			docs
		}),
		FETCH_FAILURE: errorMessage => ({
			errorMessage
		})
	}

})


export {
	actionsUser,
	actionsItemsData,
	actionsUserData,
	actionsIUstate
};