

const sqlite3 = require('sqlite3');
// 后端逻辑和数据库逻辑是分开的
// db 是数据库连接对象 数据库操作句柄
// 路径
// I/O 操作
const db = new sqlite3.Database('./mydatabase.db',
    async (err) => {
        if (err) {
            console.log('数据库连接失败',err);
            return;
        }
        console.log('数据库连接成功');
        // 风筝 数据库操作句柄
        await db.run(`
            CREATE TABLE IF NOT EXISTS employees(
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                department TEXT NOT NULL,
                salary INTEGER NOT NULL
                )
                `)
        // err 表示是否出错，容错是关键
        // node  js 快 毫秒级别
        // 数据库 别的服务器或硬盘上 秒级别
        // await
});

