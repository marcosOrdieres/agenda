package model;
 
import java.sql.Connection;
import java.util.ArrayList;

import dao.DbConnect;
import dao.Project;
import dto.User;

public class AccessManager
{
	public ArrayList<User> getUsers() throws Exception
	{
		ArrayList<User> UserList = new ArrayList<User>();
		DbConnect db = new DbConnect();
		Connection con = db.getConnection();
		Project access = new Project();
		UserList = access.getUsers(con);
		return UserList;
	}
	
	public ArrayList<User> getOneUser() throws Exception
	{
		ArrayList<User> UserList = new ArrayList<User>();
		DbConnect db = new DbConnect();
		Connection con = db.getConnection();
		Project access = new Project();
		UserList = access.getOneUserOnly(con);
		return UserList;
	}
	
	public String deleteUser(int id) throws Exception
	{
		DbConnect db = new DbConnect();
		Connection con = db.getConnection();
		Project access = new Project();
		return access.deleteUser(con, id);
	}
	
	public User updateUser(User user) throws Exception
	{
		DbConnect db = new DbConnect();
		Connection con = db.getConnection();
		Project access = new Project();
		return access.updateUser(con, user);
	}
	public User createUser(User user) throws Exception
	{
		DbConnect db = new DbConnect();
		Connection con = db.getConnection();
		Project access = new Project();
		return access.createUser(con, user);
	}
}