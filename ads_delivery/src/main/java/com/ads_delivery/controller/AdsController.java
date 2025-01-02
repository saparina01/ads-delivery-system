package com.ads_delivery.controller;

import com.ads_delivery.entity.Ads;
import com.ads_delivery.entity.UserBehavior;
import com.ads_delivery.service.AdsService;
import com.ads_delivery.service.UserBehaviorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AdsController {

    @Autowired
    private AdsService adsService;

    @Autowired
    private UserBehaviorService userBehaviorService;

    // 广告上传
    @PostMapping("/ads/upload")
    public boolean uploadAd(@RequestBody Ads ads) {
        return adsService.upload(ads);
    }

    // 广告删除
    @DeleteMapping("/ads/delete/{adId}")
    public boolean deleteAd(@PathVariable String adId) {
        return adsService.delete(adId);
    }

    // 获取广告列表（广告主）
    @GetMapping("/ads/listForUser")
    public List<Ads> getAdsForUser(@RequestParam String username) {
        return adsService.listForUser(username);
    }

    // 获取所有广告（管理员）
    @GetMapping("/ads/listAll")
    public List<Ads> getAllAds() {
        return adsService.listAll();
    }

//    // 获取用户行为数据（广告主）
//    @GetMapping("/behavior/getUserBehavior")
//    public List<UserBehavior> getUserBehavior(@RequestParam String userid) {
//        return userBehaviorService.getUserBehavior(userid);
//    }

    // 获取所有用户行为（管理员）
    @GetMapping("/behavior/listAll")
    public List<UserBehavior> getAllUserBehavior() {
        return userBehaviorService.listAll();
    }

}

