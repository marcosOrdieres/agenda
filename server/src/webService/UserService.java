package webService;

import java.util.ArrayList;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import dto.User;
import model.AccessManager;

@Stateless
@LocalBean
@Path("/users")
public class UserService  {
	
@PersistenceContext(unitName="UserService", type=PersistenceContextType.TRANSACTION)

EntityManager entityManager;
ArrayList<User> UserList = new ArrayList<User>();

	@POST
    @Path("")
    @Consumes("application/json")
    @Produces("application/json")
    public String create(User user) {
		String response = null;
		try
		{
			User output = new AccessManager().createUser(user);
			Gson gson = new Gson();
			response = gson.toJson(output);

		} catch (Exception e)
			{
				e.printStackTrace();
			}
		return response;
    }
	

	
	@GET
    @Produces("application/json")
    @Path("/{id}")
	public String oneUser()
	{
		String users = null;
		try
		{
			UserList = new AccessManager().getOneUser();
			Gson gson = new Gson();
			users = gson.toJson(UserList);

		} catch (Exception e)
			{
				e.printStackTrace();
			}
		return users;
	}

	
	@PUT
    @Path("/{id}")
    @Produces("application/json")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(User user,@PathParam("id") int id)
	{
		System.out.printf("id %d \n",id);
		String response = null;
		try
		{
			user.setId(id);
			User output = new AccessManager().updateUser(user);
			Gson gson = new Gson();
			response = gson.toJson(output);

		} catch (Exception e)
			{
				e.printStackTrace();
			}
		return response;

	}
	
	@DELETE
    @Path("/{id}")
	public String deleteUser(@PathParam("id") int id)
	{		
		try
		{
			 return new AccessManager().deleteUser(id);
		} catch (Exception e)
			{
				e.printStackTrace();
			}
		return "error";

	}
	@GET
	@Path("/")
	@Produces("application/json")
	public String users()
	{
		String users = null;
		try
		{
			UserList = new AccessManager().getUsers();
			Gson gson = new Gson();
			users = gson.toJson(UserList);

		} catch (Exception e)
			{
				e.printStackTrace();
			}
		return users;

	}
}