import cron, { ScheduledTask } from 'node-cron'

const task: ScheduledTask = cron.schedule('*/2 * * * *', () => {
    console.log('Running a task every two minutes....');
});

export const StartCounting = () => {
    task.start();
};