function generateMarkdown(data) {
    return `

# ${title}

## Description
${data.description}

## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${credits}

## Contact Information
Email me at: ${data.email}
GitHub: [${data.username}](https://github.com/${data.username})
`
function (license) {
    if (license !== "None") {
        return `## License
        This application is covered by the ${license} license.`
    }
    return ``;
}
}

module.exports = generateMarkdown;