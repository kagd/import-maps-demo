export function manager(){
    console.log('manager loaded');

    setTimeout(async () => {
        const {worker} = await import('./worker.js');
        worker();
    }, 5000);
}