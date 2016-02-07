module.exports = function(){
	var databaseConfiguration = null;
	if (~~process.env.enviroment==='dev'){
		databaseConfiguration = 'mongodb://admin:admin@ds059145.mongolab.com:59145/grader';
	}
	else{
		databaseConfiguration = 'localhost:27017/grader';
	}
	return databaseConfiguration;
};
