package com.ads_delivery.entity;

import lombok.Data;

@Data
public class UserBehavior {
    private int id;
    private String user_id;
    private String tags;//JSON
    private String behavior_type;
    private int behavior_weight;
    //view:1 click:2 search:3 purchase:4
}
