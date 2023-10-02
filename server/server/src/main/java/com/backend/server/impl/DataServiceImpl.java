package com.backend.server.impl;

import com.backend.server.Models.Data;
import com.backend.server.repo.DataRepo;
import com.backend.server.services.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DataServiceImpl implements DataService {

    @Autowired
    DataRepo dataRepo;

    @Override
    public List<Data> findAllData() {
        return (List<Data>)dataRepo.findAll();
    }

}
