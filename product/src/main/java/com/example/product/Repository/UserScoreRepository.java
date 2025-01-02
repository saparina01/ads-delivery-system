package com.example.product.Repository;


import com.example.product.Entity.UserScore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserScoreRepository extends JpaRepository<UserScore, Long> {

    // 根据 userId 和 tags 查询 UserScore
    UserScore findByUserIdAndTags(String userId, String tags);
}

