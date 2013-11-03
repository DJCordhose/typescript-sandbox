interface Friend {
    name: string;
    favoriteColor?: string;
}
var f: Friend;
f = {
    name: "Olli",
    favoriteColor: "Oma",
    evenMore: 10,
    whatEver: true
};

declare var friend: Friend;

friend = {
    name: "Oma"
};
