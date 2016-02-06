module.exports = function(){
	var databaseConfiguration = null;
	if (~~process.env.enviroment==='dev'){
		databaseConfiguration = 'mongodb://zsnake:password@ds049104.mongolab.com:49104/angular-scaffold';
	}
	else{
		databaseConfiguration = 'localhost:27017/grader';
	}
	return databaseConfiguration;
};
