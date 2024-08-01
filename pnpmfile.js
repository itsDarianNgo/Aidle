// pnpmfile.js
module.exports = {
    hooks: {
        readPackage(pkg) {
            if (pkg.dependencies) {
                if (pkg.dependencies['msgpackr']) {
                    pkg.dependencies['msgpackr'] = '^1.10.1';
                }
            }
            return pkg;
        }
    }
};
