package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import dto.User; 

public class Project
{
public ArrayList<User> getUsers(Connection con) throws SQLException
	{
		ArrayList<User> UserList = new ArrayList<User>();
		PreparedStatement stmt = con.prepareStatement("SELECT * FROM User");
		ResultSet rs = stmt.executeQuery();
		try
		{
		while(rs.next())
		{
			User UserObj = new User();
			UserObj.setId(rs.getInt("id"));
			UserObj.setName(rs.getString("name"));
			UserObj.setSurname(rs.getString("surname"));
			UserObj.setEmail(rs.getString("email"));
			UserObj.setPhone(rs.getInt("phone"));
			UserObj.setEmail(rs.getString("photo"));

			UserList.add(UserObj);
	}
		rs.close();
		stmt.close();
        con.close();
	} catch (SQLException e)
		{
		e.printStackTrace();
		}
	return UserList;
	 
	}

public ArrayList<User> getOneUserOnly(Connection con) throws SQLException
{
	ArrayList<User> UserList = new ArrayList<User>();
	PreparedStatement stmt = con.prepareStatement("SELECT * FROM User WHERE id=4");
	ResultSet rs = stmt.executeQuery();
	try
	{
	while(rs.next())
	{
		User UserObj = new User();
		UserObj.setId(rs.getInt("id"));
		UserObj.setName(rs.getString("name"));
		UserObj.setSurname(rs.getString("surname"));
		UserObj.setEmail(rs.getString("email"));
		UserObj.setPhone(rs.getInt("phone"));
		UserObj.setEmail(rs.getString("photo"));
		UserList.add(UserObj);
		
		rs.close();
		stmt.close();
        con.close();
}
} catch (SQLException e)
	{
	e.printStackTrace();
	}
return UserList;
 
}

public String deleteUser(Connection con, int id) throws SQLException
{
	PreparedStatement stmt = con.prepareStatement("DELETE FROM user WHERE id="+id);
	int rs = stmt.executeUpdate();
	try
	{
		stmt.close();
        con.close();
} catch (SQLException e)
	{
	e.printStackTrace();
	return "Error en la base de datos con el id: "+id;
	}
	return String.valueOf(rs);
}


public User updateUser(Connection con, User user) throws SQLException
{
	String query = String.format("UPDATE user SET name='%s', surname='%s', email='%s', phone=%d WHERE id=%d",
			user.getName(),user.getSurname(),user.getEmail(),user.getPhone(),user.getId());
	System.out.println(query);
	PreparedStatement stmt = con.prepareStatement(query);
	int rs = stmt.executeUpdate();
	try
	{
		stmt.close();
        con.close();
} catch (SQLException e)
	{
	e.printStackTrace();
	}
	if (rs ==0) {
		return null;
	}
return user;

}

public User createUser(Connection con, User user) throws SQLException
	{
		String query = String.format("INSERT INTO user VALUES (%d,'%s','%s','%s',%d,'%s')",
				user.getId(),user.getName(),user.getSurname(),user.getEmail(),user.getPhone(),user.getPhoto());
		System.out.println(query);
		PreparedStatement stmt = con.prepareStatement(query);
		int rs = stmt.executeUpdate();
		try
		{
			stmt.close();
	        con.close();
	} catch (SQLException e)
		{
		e.printStackTrace();
		}
		if (rs ==0) {
			return null;
		}
	return user;
	}
}
