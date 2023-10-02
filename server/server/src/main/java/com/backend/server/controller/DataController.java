package com.backend.server.controller;

import com.backend.server.Models.Data;
import com.backend.server.services.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/data")
@CrossOrigin(origins = "http://localhost:3000/")
public class DataController {

    @Autowired
    DataService dataService;

    @GetMapping("/")
    public ResponseEntity<?> findAllData() {
        List<Data> datas = dataService.findAllData();
        return ResponseEntity.status(HttpStatus.OK).body(datas);
    }
}
