<template>
  <div class="product-list">
    <!-- 提示信息 -->
    <div v-if="noResults" class="no-results">
      <p>没有找到相关商品，试试其他的关键词。</p>
    </div>

    <!-- 商品列表 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="product in products" :key="product.id">
        <el-card :body-style="{ padding: '20px' }" class="product-item">
          <img :src="product.imageurl" :alt="product.name" class="product-image" />
          <div class="product-details">
            <p class="price">￥{{ product.price }}</p>
            <p class="description">{{ product.description }}</p>

            <!-- 商品操作按钮 -->
            <div class="actions">
              <!-- 下单按钮 -->
              <el-button
                @click="orderProduct(product.category)"
                size="large"
                class="el-button-large"
              >
                <i class="fa fa-money"></i> 下单
              </el-button>

              <!-- 加入购物车和查看详情按钮 -->
              <div class="el-button-group">
                <el-button
                  @click="addToCart(product.category)"
                  size="small"
                  class="el-button-small"
                >
                  <i class="fa fa-shopping-cart"></i> 加入购物车
                </el-button>
                <el-button
                  @click="viewDetails(product.id)"
                  size="small"
                  class="el-button-small"
                >
                  查看详情
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 商品详情弹窗 -->
    <el-dialog v-model="isDetailDialogVisible" title="商品详情" width="50%">
      <div v-if="currentProduct">
        <img
          :src="currentProduct.imageurl"
          alt="商品图片"
          class="detail-image"
        />
        <p class="detail-price">价格：￥{{ currentProduct.price }}</p>
        <p class="detail-rating">
          评分：{{ currentProduct.rating || "暂无评分" }}
        </p>
        <p>描述：{{ currentProduct.description }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDetailDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["categoryName", "searchQuery"],
  data() {
    return {
      products: [], // 商品列表
      noResults: false, // 是否没有找到商品
      currentCategory: this.categoryName, // 当前选择的分类
      currentSearchQuery: this.searchQuery, // 当前搜索的关键词
      isDetailDialogVisible: false, // 详情弹窗是否可见
      currentProduct: null, // 当前查看的商品详情
    };
  },
  methods: {
    fetchProducts() {
      let url = "http://10.100.164.35:8080/products";
      const params = {};

      // 如果有搜索关键词，使用 POST 请求
      if (this.currentSearchQuery) {
        url = "http://10.100.164.35:8080/products/search";
        params.keyword = this.currentSearchQuery;

        axios
          .post(url, params)
          .then((response) => {
            this.products = response.data;
            this.noResults = this.products.length === 0;

            // 如果有商品，发送搜索行为
            if (this.products.length > 0) {
              this.sendUserBehavior("search", this.products[0].category);
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              this.noResults = true;
              this.products = [];
            } else {
              console.error("获取商品列表失败:", error);
            }
          });

        return;
      }

      if (this.currentCategory && this.currentCategory !== "全部") {
        this.sendUserBehavior("clickCategory", this.currentCategory);
        url = `http://10.100.164.35:8080/products/category/${encodeURIComponent(
          this.currentCategory
        )}`;
      }
      axios
        .get(url)
        .then((response) => {
          this.products = response.data;
          this.noResults = this.products.length === 0;
        })
        .catch((error) => {
          console.error("获取商品列表失败:", error);
        });
    },
    addToCart(category) {
      this.sendUserBehavior("addToCart", category);
      this.$message.success("商品已加入购物车");
    },
    orderProduct(category) {
      this.sendUserBehavior("purchase", category);
      this.$message.success("商品已下单");
    },
    viewDetails(id) {
      axios
        .get(`http://10.100.164.35:8080/products/${id}`)
        .then((response) => {
          this.currentProduct = response.data;
          this.isDetailDialogVisible = true;
          this.sendUserBehavior("click", this.currentProduct.category);
        })
        .catch((error) => {
          console.error("获取商品详情失败:", error);
        });
    },
    sendUserBehavior(action, category) {
      const userID = localStorage.getItem("userId");

      const userBehavior = {
        userId: userID,
        tags: category,
        behaviorType: action,
      };

      axios
        .post("http://101.43.72.79:8088/api/behavior/upload", userBehavior)
        .then((response) => {
          console.log("行为数据已发送:", response.data);
        })
        .catch((error) => {
          console.error("行为数据发送失败:", error);
        });
    },
  },
  watch: {
    categoryName(newCategory) {
      this.currentCategory = newCategory;
      this.currentSearchQuery = "";
      this.noResults = false;
      this.fetchProducts();
    },
    searchQuery(newQuery) {
      this.currentSearchQuery = newQuery;
      this.noResults = false;
      this.fetchProducts();
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.product-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-details {
  padding: 10px;
  text-align: center;
}

.price {
  color: red;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.description {
  color: #888;
  font-size: 14px;
  margin: 10px 0;
}

.actions {
  margin-top: 15px;
}

.el-button-large {
  font-size: 16px;
  padding: 12px 20px;
  background-color: #ff5722; /* 恢复原本颜色 */
  color: white;
  width: 100%;
}

.el-button-large:hover {
  background-color: #ff3d00; /* 恢复原本悬浮颜色 */
}

.el-button-small {
  font-size: 12px;
  padding: 5px 10px;
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
  width: 48%;
}

.el-button-small:hover {
  background-color: #f5f5f5;
}

.no-results {
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 20px;
}

.detail-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.detail-price {
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.detail-rating {
  color: #ff9800;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}
</style>



