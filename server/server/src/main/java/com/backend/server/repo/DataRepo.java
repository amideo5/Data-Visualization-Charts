package com.backend.server.repo;

import com.backend.server.Models.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepo extends MongoRepository<Data, ObjectId> {
}
