package com.ads_delivery.entity;

import lombok.Data;

@Data
public class Ads {
    private int ad_id;
    private String title;
    private String image;
    private String details;
    private String tags;//传输获取需要做处理
    private String belong_username;
    private int click_count;
}
