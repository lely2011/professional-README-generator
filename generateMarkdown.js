function generateMarkdown(data) {
    return `

    # ${data.title}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}


    ## Usage
    ${data.usage}


    ## Credits
    ${data.credits}

    ## Contact Information
    Email me at: ${data.email}
    GitHub: [${data.username}](https://github.com/${data.username})
    `;
}

function generateLicense(license) {
    if (license !== "None") {
        return `## License
        This application is covered by the ${license} license.`
    }
    return ``;
}


module.exports = generateMarkdown;