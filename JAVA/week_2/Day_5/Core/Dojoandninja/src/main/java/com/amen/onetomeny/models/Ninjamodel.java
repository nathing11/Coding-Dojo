package com.amen.onetomeny.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="ninja")
public class Ninjamodel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	@NotNull
	@Size(min = 4, max = 100, message = "you need a name !")
	private String FirstName;
	
	@NotNull
	@Size(min = 4, max = 100, message = "you need a lasttName !")
	private String lasttName;
	
	@NotNull
	@Size(min = 4, max = 100, message = "you need a lasttName !")
	private int age;



	// This will not allow the createdAt column to be updated after creation
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

    public Ninjamodel() {
    }
    public Ninjamodel(String FirstName , String lasttName , int age )  {
        this.FirstName = FirstName;
        this.lasttName = lasttName;
        this.age = age;
    }
    //m:1
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="dojo_id")
    private Dojolmodel dojo;
    // Getters and setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public Dojolmodel getDojo() {
		return dojo;
	}
	public void setDojo(Dojolmodel dojo) {
		this.dojo = dojo;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLasttName() {
		return lasttName;
	}
	public void setLasttName(String lasttName) {
		this.lasttName = lasttName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	@PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }
	@PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

}
