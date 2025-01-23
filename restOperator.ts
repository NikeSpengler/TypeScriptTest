function logUserActivities(userId: string, ...activities: string[]): void {
    console.log(`User ${userId} performed the folloing activities:`);
    activities.forEach((activity, index) => {
        console.log(`${index + 1}. ${activity}`)
    })
}

console.log(logUserActivities('Nike Spengler', 'logged in', 'updated profile', 'made a purchase', 'saved item to favorite', 'logged out' ));