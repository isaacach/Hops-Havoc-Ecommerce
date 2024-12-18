package com.ecommerce.demo.dao;

import java.util.List;
import com.ecommerce.demo.model.Hop;

public interface HopDao {
  List<Hop> findAll();
}
