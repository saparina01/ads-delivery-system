package com.ads_delivery.entity;

public enum Role {
    ADMIN,        // 管理员
    ADVERTISER,   // 广告主
    SITE_OWNER    // 网站主
}
//MyBatis 本身无法直接映射 enum 类型，因此我们需要使用自定义的 TypeHandler 来进行枚举的转换。
