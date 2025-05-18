async function getData() {
  try {
    // 必须使用await等待fetch完成
    const res = await fetch("http://localhost:3000/api/articles"); // 添加端口号
    // 检查HTTP状态码
    if (!res.ok) {
      throw new Error(`HTTP错误! 状态: ${res.status}`);
    }

    // 解析JSON响应
    const data = await res.json();
    console.log(data); // 这里会打印实际的用户数据
  } catch (error) {
    console.error("获取数据失败:", error);
  }
}

getData();
