function logUserActivities(userId) {
    var activities = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        activities[_i - 1] = arguments[_i];
    }
    console.log("User ".concat(userId, " performed the folloing activities:"));
    activities.forEach(function (activity, index) {
        console.log("".concat(index + 1, ". ").concat(activity));
    });
}
console.log(logUserActivities('Nike Spengler', 'logged in', 'updated profile', 'made a purchase', 'saved item to favorite', 'logged out'));
