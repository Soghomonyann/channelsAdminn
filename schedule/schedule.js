import cron from "node-cron"

console.log(777);
const task = cron.schedule('* * * * * *', async () => {
    console.log('cron: ', new Date());
})

// task.start()