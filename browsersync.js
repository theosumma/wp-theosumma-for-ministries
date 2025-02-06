const browserSync = require('browser-sync').create();

// Start BrowserSync
browserSync.init({
    proxy: "http://localhost", // Replace with your local WordPress site URL
    files: [
        "./assets/admin-app/dist/**/*.js", // Watch your output files
        "./assets/admin-app/dist/**/*.css", // Watch any CSS files if needed
        "./**/*.php", // Optionally watch PHP files for changes
        "!./RESTApi/**/*", // Exclude the RESTApi directory from being watched
    ],
    notify: false, // Disable the BrowserSync notification if desired
});
