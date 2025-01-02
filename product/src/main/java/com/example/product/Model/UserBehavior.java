package com.example.product.Model;

public class UserBehavior {

    private String userId;     // 用户ID
    private String tags;       // 用户行为标签（如：毛衣）
    private String behaviorType; // 行为类型（如：addToCart, click, purchase, search）

    // Getters and Setters
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getBehaviorType() {
        return behaviorType;
    }

    public void setBehaviorType(String behaviorType) {
        this.behaviorType = behaviorType;
    }
}
