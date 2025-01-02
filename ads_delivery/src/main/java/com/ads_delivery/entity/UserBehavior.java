package com.ads_delivery.entity;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Data
public class UserBehavior {
    private int id;
    private String userId;
    private List<String> tags;
    private String behaviorType;
    private int behaviorWeight;
    //view:1 click:2 search:3 purchase:4
    public String getTags() {
        if (tags != null && !tags.isEmpty()) {
            return String.join(",", tags);
        }
        return "";
    }
    // 在从数据库读取时将逗号分隔的字符串转换为 List<String>
    public void setTags(String tagsString) {
        if (tagsString != null && !tagsString.isEmpty()) {
            this.tags = Arrays.asList(tagsString.split(","));
        } else {
            this.tags = new ArrayList<>();
        }
    }
}
