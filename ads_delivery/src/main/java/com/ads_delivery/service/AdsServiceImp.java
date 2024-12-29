package com.ads_delivery.service;

import com.ads_delivery.entity.Ads;
import com.ads_delivery.entity.UserBehavior;
import com.ads_delivery.mapper.AdsMapper;
import com.ads_delivery.mapper.UserBehaviorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class AdsServiceImp implements AdsService{

    @Autowired
    private AdsMapper adsMapper;
    @Autowired
    private UserBehaviorMapper userBehaviorMapper;

    @Override
    public List<Ads> listall() {
        return adsMapper.getAll();
    }

    @Override
    public boolean upload(Ads ads) {
        try{
            adsMapper.add(ads);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Ads> getRecommendedAds(String user_id, int limit) {
        List<UserBehavior> userBehaviors = userBehaviorMapper.getByUserId(user_id);
        List<String> tags = new ArrayList<>();
        List<Ads> recommendedAdsList = new ArrayList<>();
        List<Ads> resultAdsList = new ArrayList<>();
        for (UserBehavior userBehavior : userBehaviors) {
           tags.add(userBehavior.getTags());
        }
        for(String tag : tags) {
            recommendedAdsList.addAll(adsMapper.getByTags(tag));
        }
        for(int i=0;i<limit;i++) {
            for(Ads ads : recommendedAdsList) {
                resultAdsList.add(ads);
            }
        }
        return resultAdsList;
    }


    @Override
    public boolean delete(int ad_id) {
        try{
            adsMapper.delete(ad_id);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Ads> listForUser(String username) {
        return adsMapper.getByUsername(username);
    }

    @Override
    public boolean addClickCount(int ad_id) {
        Ads ads = adsMapper.getById(ad_id);
        if(ads==null){
            ads.setClick_count(ads.getClick_count()+1);
            adsMapper.update(ads);
            return true;
        }
        return false;
    }

}
