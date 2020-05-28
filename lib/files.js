const fs = require('fs');
const path = require('path');

module.exports = {
	  getCurrentDirectoryBase: () => {
		      return path.basename(process.cwd()); //getting the current directory (default git repo name)
		    },

	  directoryExists: (filePath) => {
		      return fs.existsSync(filePath); //to check if .git folder already exists or not   
		    }
};

