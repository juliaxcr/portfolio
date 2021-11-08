'use strict'
const db = require('./db')
const Project = require('./models/projects')

const projects = [
    {
        name: 'You-Rock',
        shortContent:
            'An e-commerce site selling emotional support pet rocks.',
        heroku: 'https://you-rock.herokuapp.com/',
        github: 'https://github.com/Grace-Shopper-We-Rock/We-Rock',
        longContent:
            'You Rock is an e-commerce site that allows visitors to browse and purchase emotional support pet rocks.',
        date: '2021',
        tech: ['Node.js', 'React', 'Redux', 'Express', 'Postgres', 'Material-UI'],
        imgOverview: '/images/projects/youRock/youRock1.png',
        imgTech: '/images/projects/youRock/youRock1.png',
    },
    {
        name: 'Form-Motion',
        shortContent:
            'FormMotion is a web-based app that allows users to draw their own character and virtual world - and then play in it!',
        heroku: 'http://www.form-motion.com/',
        github: 'https://github.com/FormMotion/FormMotion',
        longContent:
            'long description of project 2',
        date: '2021',
        tech: [
            'JavaScript',
            'Node.js',
            'React/Redux',
            'Atrament.js',
            'Phaser',
            'Material-UI',
            'Heroku',
        ],
        imgOverview: '/images/form-motion-0.png',
        imgTech: '/images/form-motion-1.png',
    },
    {
        name: 'Columbia-Buy-Sell-Trade',
        shortContent:
            'A mobile marketplace app that allows Columbia students to buy, sell, and trade their personal belongings.',
        // heroku: '',
        github: 'https://github.com/juliaxcr/columbia-buy-sell-trade',
        longContent:
            'The Columbia-Buy-Sell-Trade app allows Columbia students to buy, sell, and trade their personal belongings to their fellow classmates. On the app, users have access to all the items that other users are selling and can contact each seller through a chat window. Users are also able to upload items they would like to sell or trade by using the camera and image picker feature in the app.',
        date: '2021',
        tech: [
            'JavaScript',
            'React Native',
            'Yup',
            'Formik',
            'Expo',
            'Android Studio',
        ],
        imgOverview: '/images/columbia-bst-1.png',
        imgTech: '',
    },
]

// async function seed() {
//     await db.sync({ force: true }) // clears db and matches models to tables
//     console.log('db synced!')

//     // Creating Users
//     const project = await Promise.all([
//         Project.create(project[0]),
//         Project.create(project[1]),
//     ])

//     console.log(`seeded successfully`)
//     return {
//         projects: {
//             project1: projects[0],
//             project2: projects[1]
//         }
//     }
// }

// async function runSeed() {
//     console.log('seeding...')
//     try {
//         await seed()
//     } catch (err) {
//         console.error(err)
//         process.exitCode = 1
//     } finally {
//         console.log('closing db connection')
//         await db.close()
//         console.log('db connection closed')
//     }
// }

// /*
//   Execute the `seed` function, IF we ran this module directly (`node seed`).
//   `Async` functions always return a promise, so we can use `catch` to handle
//   any errors that might occur inside of `seed`.
// */
// if (module === require.main) {
//     runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed


async function seed() {
    await db.sync({ force: true })
    console.log('db synced')

    await Promise.all(
        projects.map(async (project) => {
            const newProject = await Project.create(project)
            return newProject
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

module.exports = seed
