package com.ecommerce.demo.model;
import jakarta.persistence.*;

@Entity
@Table(name = "hop")
public class Hop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
 
    private String name;
    private String description;
    private String purpose;
    private String alpha_acid;
    private String country;
    private String profile;
    private String substitutes;
    private String beer_style;
    
    public Hop() {
    }
    
    public Hop(Integer id, String name, String description, String purpose, String alpha_acid, String country,
        String profile, String substitutes, String beer_style) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.purpose = purpose;
      this.alpha_acid = alpha_acid;
      this.country = country;
      this.profile = profile;
      this.substitutes = substitutes;
      this.beer_style = beer_style;
    }
    public Integer getId() {
      return id;
    }
    public String getName() {
      return name;
    }
    public String getDescription() {
      return description;
    }
    public String getPurpose() {
      return purpose;
    }
    public String getAlpha_acid() {
      return alpha_acid;
    }
    public String getCountry() {
      return country;
    }
    public String getProfile() {
      return profile;
    }
    public String getSubstitutes() {
      return substitutes;
    }
    public String getBeer_style() {
      return beer_style;
    }
    public void setId(Integer id) {
      this.id = id;
    }
    public void setName(String name) {
      this.name = name;
    }
    public void setDescription(String description) {
      this.description = description;
    }
    public void setPurpose(String purpose) {
      this.purpose = purpose;
    }
    public void setAlpha_acid(String alpha_acid) {
      this.alpha_acid = alpha_acid;
    }
    public void setCountry(String country) {
      this.country = country;
    }
    public void setProfile(String profile) {
      this.profile = profile;
    }
    public void setSubstitutes(String substitutes) {
      this.substitutes = substitutes;
    }
    public void setBeer_style(String beer_style) {
      this.beer_style = beer_style;
    }

    
}
