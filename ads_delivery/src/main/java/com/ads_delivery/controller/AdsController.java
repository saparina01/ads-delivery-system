package com.ads_delivery.controller;

import com.ads_delivery.entity.Ads;
import com.ads_delivery.service.AdsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ads")
public class AdsController {

    @Autowired
    private AdsService adsService;

    @PostMapping("/click")
    public String handleAdClick(@RequestBody Ads ads) {
        try {
            // 处理广告点击数据
            if(adsService.addClickCount(ads.getAd_id()))
            return "Ad click recorded successfully.";
            else return "Ad click failed.";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to record ad click.";
        }
    }
    @GetMapping("/recommend")
    public List<Ads> getAdsRecommendation(@RequestParam String userId, @RequestParam int limit) {
        try {
            // 获取广告推荐数据
            return adsService.getRecommendedAds(userId, limit);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
