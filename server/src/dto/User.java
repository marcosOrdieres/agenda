package dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User implements Serializable {
	   private static final long serialVersionUID = 1L;
	   
	   @Id
	   private int id;
	   
	   @Column(name="Name")
	   private String name;
	   
	   @Column(name="Surname")
	   private String surname;
	   
	   @Column(name="Email")
	   private String email;
	   
	   @Column(name="Phone")
	   private int phone;
	   
	   @Column(name="Photo")
	   private String photo;

	   
	   public User(){}
	   
	   public User (int id, String name, String surname, String email, int phone, String photo){
		   this.id = id;
		   this.name = name;
		   this.surname = surname;
		   this.email = email;
		   this.phone = phone;
		   this.photo = photo;

	   }

	public int getId() {
		      return id;
	   }
	   
	   public void setId(int id) {
		   this.id = id;
	   }
	  
	   public String getName(){
		   return name;
	   }
	   
	   public void setName(String name){
		   this.name = name;
	   }
	   
	   public String getSurname(){
		   return surname;
	   }
	   public void setSurname(String surname){
		   this.surname = surname;
	   }
	   
	   public void setEmail(String email){
		   this.email = email;
	   }
	   public String getEmail(){
		   return email;
	   }
	   public void setPhone(int phone){
		   this.phone = phone;
	   }
	   public int getPhone(){
		   return phone;
	   }
	   public String getPhoto(){
		   return photo;
	   }
	   public void setPhoto(String photo){
		   this.photo = photo;
	   }
	   
	   @Override
	   public String toString()
	   {
	   return "User [id=" + id + ", name=" + name + ", surname=" + surname
	   + ", email=" + email +", phone=" + phone +", photo=" + photo +"]";
	   }


}
