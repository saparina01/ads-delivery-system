package com.ads_delivery.controller;

import com.ads_delivery.entity.Ads;
import com.ads_delivery.service.AdsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ads")
@CrossOrigin
public class AdsToOtherWebController {

    @Autowired
    private AdsService adsService;

    @PostMapping("/click")
    public String handleAdClick(@RequestBody String adId) {
        System.out.println(adId);
        adsService.clickCount(adId);
        return "success";
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
