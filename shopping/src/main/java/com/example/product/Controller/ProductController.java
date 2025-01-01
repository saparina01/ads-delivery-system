package com.example.product.Controller;

import com.example.product.Entity.Product;
import com.example.product.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;
    // 提取路径转换的公共方法
    @GetMapping
    public List<Product> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return products;
    }

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        List<Product> products = productService.getProductsByCategory(category);
        return products;
    }
    @PostMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestBody Map<String, String> requestBody) {
        String keyword = requestBody.get("keyword");
        List<Product> products = productService.searchProductsByKeyword(keyword);

        if (products.isEmpty()) {
            // 返回 404 状态码表示没有找到商品
            Map<String, String> responseMessage = new HashMap<>();
            responseMessage.put("message", "没有找到相关商品，试试其他的关键词");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(products); // 返回商品列表
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            // 如果商品不存在，返回 404 状态码和提示信息
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null);
        }

        // 转换商品图片路径
        String localPath = product.getImageurl();

        // 返回商品详情
        return ResponseEntity.ok(product);
    }


}

