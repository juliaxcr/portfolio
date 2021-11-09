const db = require("./db")
const Project = require("./models/projects")

const projects = [
    {
        name: "coLab",
        shortContent: "A real-time collaboration application with a code-editor, console and a whiteboard.",
        heroku: "https://colabapp.herokuapp.com/",
        github: "https://github.com/Ayse-Erduran/co-Lab",
        longContent: "coLab is a real-time collaboration application for remote teams. It features a code-editor and a console to write and execute code, as well as a whiteboard to brainstorm and design data flow and system architecture.",
        date: "2020",
        tech: ["Socket.io", "React", "Redux", "Ace", "HTML canvas"],
        imgOverview: "/images/projects/coLab/coLab1.png",
        imgTech: "/images/projects/coLab/coLab2.png"
    },
    {
        name: "Q-Party",
        shortContent: "A multiplayer 2D video game featuring a main board game interspersed with 3 minigames.",
        heroku: "https://super-quarantine-party.herokuapp.com/",
        github: "https://github.com/2001-second-split/Quarantine-Party",
        longContent: "Q-Party is a multiplayer 2D video game featuring a main board game interspersed with 3 minigames. A user creates or joins a room, waits for other players to join to advance to the board, rolls a dice to move on the board while triggering minigames along the way. First player to reach the end of the board wins!",
        date: '2020',
        tech: ["Socket.io", "Express.js", "Phaser 3", "Blender", "Texture Packer", "Tiled"],
        imgOverview: "/images/projects/Q-Party/q-party2.png",
        imgTech: "/images/projects/Q-Party/q-party3.png"
    },
    {
        name: "What-da-Duck",
        shortContent: "An e-commerce site selling rubber ducks to programmers.",
        heroku: "https://what-da-duck.herokuapp.com/",
        github: "https://github.com/2001-do-jest-while-true/grace-shopper",
        longContent: "What-da-Duck is an e-commerce site selling rubber ducks to programmers. You can choose a pre-built duck or customize your own",
        date: "2020",
        tech: ["React", "Redux", "Postgres", "Sequelize", "Node.js", "Passport.js"],
        imgOverview: "/images/projects/What-da-Duck/What-da-Duck1.png",
        imgTech: "/images/projects/What-da-Duck/What-da-Duck2.png",
    }
]

async function seed() {
    await db.sync({ force: true });
    console.log('db synced');

    await Promise.all(
        projects.map(async project => {
            const newProject = await Project.create(project);
            return newProject;
        })
    )
}

async function runSeed() {
    console.log('seeding...')
    try {
        await seed()
    } catch (err) {
        console.error(err)
        process.exitCode = 1
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
if (module === require.main) {
    runSeed()
}

module.exports = seed;