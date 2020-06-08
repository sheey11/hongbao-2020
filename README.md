# 今年的红包谜题！
之前在 GitHub 上看到了 Soha 的红包，后来又找到了好多大佬发的红包，我也来凑个热闹。虽然春节早过了，但是现在宅在家里闲着也是闲着，不如发个红包。

这里是这个谜题的服务器端和一些数据。

# 解析
见 [2020 红包解析](https://sheey.moe/article/red-packet-2020)。

# 使用方法
## 服务端
1. 先安装依赖库。
    ```sh
    cd server
    npm i
    # or
    yarn install
    ```

2. 用 `node` 运行 `app.js` 开启服务器。
    ```sh
    node app.js
    ```

3. 用 `node` 运行 `telnet.js` 以开始监听 `2020` 端口的 `telnet` 的服务。
    ```sh
    node telnet.js
    ```
## 数据
1. 切换到 `data` 文件夹，安装依赖库。
    ```sh
    pip install -r requirements.txt
    ```
2. 使用 `python` 运行 `encoder.py` 从二维码（29 x 29）生成数据。
   ```
   python encoder.py
   ```
3. 使用 `python` 运行 `decoder.py` 从 `data.txt` 生成二维码（29 x 29）。
   ```
   python decoder.py
   ```
