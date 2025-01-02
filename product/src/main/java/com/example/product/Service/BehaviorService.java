package com.example.product.Service;

import com.example.product.Entity.UserScore;
import com.example.product.Model.UserBehavior;
import com.example.product.Repository.UserScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BehaviorService {

    @Autowired
    private UserScoreRepository userScoreRepository;

    // 根据行为类型赋分数
    public int getScoreForBehavior(String behaviorType) {
        switch (behaviorType) {
            case "click":
                return 1;
            case "addToCart":
                return 2;
            case "purchase":
                return 3;
            case "search":
                return 1;
            default:
                return 0;
        }
    }

    // 处理用户行为并更新分数
    public void processUserBehavior(UserBehavior userBehavior) {
        // 根据行为类型获取分数
        int score = getScoreForBehavior(userBehavior.getBehaviorType());

        // 查找用户和标签组合是否已存在
        UserScore userScore = userScoreRepository.findByUserIdAndTags(userBehavior.getUserId(), userBehavior.getTags());

        if (userScore == null) {
            // 如果没有找到，创建新记录
            userScore = new UserScore();
            userScore.setUserId(userBehavior.getUserId());
            userScore.setTags(userBehavior.getTags());
            userScore.setScore(score);
        } else {
            // 如果找到，更新现有记录的分数
            userScore.setScore(userScore.getScore() + score);
        }

        // 保存或更新用户行为的分数
        userScoreRepository.save(userScore);
    }
}
