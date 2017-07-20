const username = (state = {username : ""}, action) => {
	if (action.type === "CHANGE_USERNAME") {
		return action.username;
	}
	return state;
}

export default username;