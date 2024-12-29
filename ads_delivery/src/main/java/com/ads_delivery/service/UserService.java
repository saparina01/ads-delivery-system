package com.ads_delivery.service;

import com.ads_delivery.entity.User;

public interface UserService {
    String register(User user);
    String login(User user);
}
