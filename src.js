const { execSync } = require('child_process');
const { clean, lt } = require('semver');

module.exports = (config, pluginConfig, callback) => {
    const refs = execSync('git show-ref --tags').toString('utf-8').trim().split('\n');
    let latestVersion;
    let latestVersionCommitHash;

    for (const ref of refs) {
        const [commitHash, refName] = ref.split(' ');
        const version = clean(refName.split('/')[2]);

        // version is null if not valid
        if (version && (!latestVersion || lt(latestVersion, version))) {
            latestVersion = version;
            latestVersionCommitHash = commitHash;
        }
    }

    if (!latestVersion) {
        throw Error('There is no valid semver git tag. Create the first valid tag via "git tag v0.0.0" and then push it via "git push --tags".');
    }

    callback(null, {
        version: latestVersion,
        gitHead: latestVersionCommitHash
    });
};
