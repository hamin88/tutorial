import java.util.concurrent.*;
// Producer-Consumer problem using BlockingQueue
class Producer implements Runnable {

    private final BlockingQueue<Integer> queue;

    public Producer(BlockingQueue<Integer> queue) {
        this.queue = queue;
    }

    @Override
    public void run() {

        try {
            for (int i = 1; i <= 10; i++) {

                queue.put(i);

                System.out.println(
                        "Produced : " + i);

                Thread.sleep(500);
            }

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class Consumer implements Runnable {

    private final BlockingQueue<Integer> queue;

    public Consumer(BlockingQueue<Integer> queue) {
        this.queue = queue;
    }

    @Override
    public void run() {

        try {

            while (true) {

                Integer value = queue.take();

                System.out.println(
                        "Consumed : " + value);

                Thread.sleep(1000);
            }

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}


public class ProducerConsumerDemo {

    public static void main(String[] args) {

        BlockingQueue<Integer> queue =
                new ArrayBlockingQueue<>(5);

        ExecutorService executor =
                Executors.newFixedThreadPool(2);

        executor.submit(new Producer(queue));
        executor.submit(new Consumer(queue));

        executor.shutdown();
    }
}