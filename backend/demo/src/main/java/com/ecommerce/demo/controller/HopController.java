package com.ecommerce.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.demo.model.Hop;
import com.ecommerce.demo.repo.HopRepository;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/hops")
public class HopController {
    
    private HopRepository hopRepo;

    public HopController(HopRepository hopRepo) {
        this.hopRepo = hopRepo;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> hops() {
        return ResponseEntity.ok("Testing... Hello World");
    }

    @GetMapping("/getAll")
    public List<Hop> getAllHops(Model model) {
        List<Hop> listHops = hopRepo.findAll();
        model.addAttribute("listHops", listHops);

        return listHops;
    }

    @GetMapping("/filter")
    public List<Hop> getMethodName(@RequestParam("filter") String filter, @RequestParam("filterValue") String filterValue) {
        List<Hop> newHopList = new ArrayList<>();
        List<Hop> listHops = hopRepo.findAll();
        for (Hop hop : listHops) {
            if (hop.getProfile().contains(filter)) {
                newHopList.add(hop);
            }
        }
        return newHopList;
    }
    

}
