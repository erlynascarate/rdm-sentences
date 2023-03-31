const messages = [
    'This is where it all begins...',
    'Commit committed',
    'Version control is awful',
    'COMMIT ALL THE FILES!',
    'This commit is a lie',
    'Here be Dragons',
    'Reinventing the wheel. Again.',
    'This is not the commit message you are looking for',
    'Batman! (this commit has no parents)',
]

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(`\x1b[34m${message}\x1b[89m`)
}

export default {
    funnyCommit,
}
