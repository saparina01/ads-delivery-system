package com.ads_delivery.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Data
public class Ads {
    private String adId;
    private String title;
    private String image;
    private String details;
    private List<String> tags;//传输获取需要做处理
    private String belongUsername;
    private int clickCount;
    public String getTags() {
        if (tags != null && !tags.isEmpty()) {
            return String.join(",", tags);
        }
        return "";
    }
    public void setTags(String tagsString) {
        if (tagsString != null && !tagsString.isEmpty()) {
            this.tags = Arrays.asList(tagsString.split(","));
        } else {
            this.tags = new ArrayList<>();
        }
    }
}
