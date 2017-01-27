package dao;
 
import java.sql.Connection;
import java.sql.DriverManager;
 
public class DbConnect{
	public Connection getConnection() throws Exception{
	try
	{
		String connectionURL = "jdbc:mysql://localhost:3306/restful";
		Connection connection = null;
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection(connectionURL, "root", "");
		return connection;
	} catch (Exception e){
		throw e;
		}
	}
}