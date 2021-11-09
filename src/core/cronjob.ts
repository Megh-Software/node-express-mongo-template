import cron, { ScheduledTask } from 'node-cron'

const task: ScheduledTask = cron.schedule('*/2 * * * *', () => {
    console.log('Crob job running....' + new Date());
});

export const StartCounting = () => {
    task.start();
};