package com.backend.server.Models;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "events")
@TypeAlias("events")
@Getter
@Setter
public class Data {
    @Id
    private ObjectId _id;
    private String end_year;
    private int intensity;
    private String sector;
    private String topic;
    private String insight;
    private String url;
    private String region;
    private String start_year;
    private String impact;
    private String added;
    private String published;
    private String country;
    private int relevance;
    private String pestle;
    private String source;
    private String title;
    private int likelihood;

    public Data(String end_year, int intensity, String sector, String topic, String insight, String url, String region, String start_year, String impact, String added, String published, String country, int relevance, String pestle, String source, String title, int likelihood) {
        this.end_year = end_year;
        this.intensity = intensity;
        this.sector = sector;
        this.topic = topic;
        this.insight = insight;
        this.url = url;
        this.region = region;
        this.start_year = start_year;
        this.impact = impact;
        this.added = added;
        this.published = published;
        this.country = country;
        this.relevance = relevance;
        this.pestle = pestle;
        this.source = source;
        this.title = title;
        this.likelihood = likelihood;
    }
}
