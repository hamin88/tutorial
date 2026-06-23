public class ReduceExample {
    public static void main(String[] args) {
        // Create an array of integers
        int[] numbers = {1, 2, 3, 4, 5};

        // Use the reduce method to sum the elements of the array
        int sum = java.util.Arrays.stream(numbers)
                .reduce(0, (a, b) -> a + b);

        // Print the result
        System.out.println("Sum: " + sum);
    }
}