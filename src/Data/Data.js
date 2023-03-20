// Sidebar imports
import {
    UilEstate,
    UilUsersAlt,
    UilChart,
} from "@iconscout/react-unicons";


// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilUsersAlt,
        heading: "Visitors",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const cardsData = [
    {
        title: "Joiners",
        color: {
            backGround: "#980525",
            boxShadow: "0px 10px 20px 0px #ec0738",
        },
        barValue: 40,
        value: "15",
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Partnerships",
        color: {
            backGround: "#980525",
            boxShadow: "0px 10px 20px 0px #ec0738",
        },
        barValue: 40,
        value: "14",
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Stay in touch",
        color: {
            backGround:
                "#980525",
            boxShadow: "0px 10px 20px 0px #ec0738",
        },
        barValue: 20,
        value: "7",
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];