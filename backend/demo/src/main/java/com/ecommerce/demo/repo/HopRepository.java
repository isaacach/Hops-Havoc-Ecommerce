package com.ecommerce.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.demo.model.Hop;

public interface HopRepository extends JpaRepository<Hop, Integer> {

}
