class OddEvenPrinter {

    private int number = 1;
    private final int MAX = 10;

    public synchronized void printOdd() {

        while (number <= MAX) {

            while (number % 2 == 0) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }

            if (number <= MAX) {
                System.out.println(
                        Thread.currentThread().getName()
                                + " : " + number++);
            }

            notify();
        }
    }

    public synchronized void printEven() {

        while (number <= MAX) {

            while (number % 2 != 0) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }

            if (number <= MAX) {
                System.out.println(
                        Thread.currentThread().getName()
                                + " : " + number++);
            }

            notify();
        }
    }
}

public class OddEvenPrinterExample {

    public static void main(String[] args) {

        OddEvenPrinter printer = new OddEvenPrinter();

        Thread oddThread =
                new Thread(printer::printOdd, "Odd");

        Thread evenThread =
                new Thread(printer::printEven, "Even");

        oddThread.start();
        evenThread.start();
    }
}