import { Task } from "./tasks";

export const TASKS: Task[] = [
    {
        title: 'Android\'s "Developer Options" crash',
        type: 'Bug',
        description: 'Android\'s "Developer Options" crash when try to open it',
        assignee: 'Dimitar Stefanov',
        priority: 'High',
        status: 'In progress',
        estimate: 4,
        createdAt: '16.02.2022'
    },
    {
        title: 'The device restarts when try to open "Settings"',
        type: 'Bug',
        description: '"When open "Settings" the device rebooting ',
        assignee: 'Atanas Yalachkov',
        priority: 'Critical',
        status: 'Ready for Test',
        estimate: 6,
        createdAt: '14.02.2022'
    },
    {
        title: 'The camera app freezes during start up',
        type: 'Bug',
        description: '"When open the camera app is freezing',
        assignee: 'Angel Dimitrov',
        priority: 'Normal',
        status: 'To Do',
        estimate: 3,
        createdAt: '25.01.2022'
    },
    {
        title: 'Application crashes when click the SAVE button while creating a new user',
        type: 'Bug',
        description: 'Application crashes when click the SAVE button while creating a new user',
        assignee: 'Polina Mihailova',
        priority: 'Critical',
        status: 'In progress',
        estimate: 6,
        createdAt: '20.02.2022'
    },
    {
        title: 'Upgrade button does not work',
        type: 'Bug',
        description: 'Click the upgrade button when logged in.',
        assignee: 'Mariyan Marinov',
        priority: 'Low',
        status: 'Ready for Test',
        estimate: 2,
        createdAt: '20.12.2021'
    },
    {
        title: 'Invalid password link sent to email',
        type: 'Bug',
        description: 'The link for setting the user password that is sent uppon registratio is broken.',
        assignee: 'Martin Mitrev',
        priority: 'Critical',
        status: 'Ready for Test',
        estimate: 6,
        createdAt: '21.02.2022'
    },
    {
        title: 'Missing product images',
        type: 'Story',
        description: 'Some of the items are with missing product images.',
        assignee: 'Nikola Petkov',
        priority: 'Normal',
        status: 'Done',
        estimate: 2,
        createdAt: '20.01.2022'
    },
    {
        title: '"View User Profil" should return information about user\'s location',
        type: 'Story',
        description: 'The method "View User Profil" returns incorrect information about user\'s location.',
        assignee: 'Dimitrinka Yalachkova',
        priority: 'Normal',
        status: 'Ready for Test',
        estimate: 3,
        createdAt: '24.01.2022'
    },
    {
        title: 'Missing items price',
        type: 'Story',
        description: 'Missing price in item',
        assignee: 'Milen Stefanov',
        priority: 'Critical',
        status: 'To Do',
        estimate: 5,
        createdAt: '20.02.2022'
    },
    {
        title: 'Login page not working',
        type: 'Story',
        description: 'When try to open login page, you will see "404 Page Not Found Error".',
        assignee: 'Denitsa Georgieva',
        priority: 'High',
        status: 'Done',
        estimate: 3,
        createdAt: '06.09.2021'
    },
    {
        title: 'User can not rename group conversation',
        type: 'Story',
        description: 'User can not rename group conversation',
        assignee: 'Stefan Nikolov',
        priority: 'Low',
        status: 'In progress',
        estimate: 1,
        createdAt: '20.11.2021'
    },
    {
        title: 'Slidebar not working when project is open',
        type: 'Story',
        description: 'Slidebar not working when project is open.',
        assignee: 'Mihail Angelov',
        priority: 'Low',
        status: 'To Do',
        estimate: 1,
        createdAt: '01.06.2021'
    }
   
    

];