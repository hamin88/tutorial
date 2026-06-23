import java.util.*;
import java.util.stream.*;

public class SecondHighestSalary    {
    public static void main(String[] args) {
        int[] salaries = {1000, 2000, 3000, 4000, 5000};
        int highest = Integer.MIN_VALUE;
        int secondHighest = Integer.MIN_VALUE;

        for (int salary : salaries) {
            if (salary > highest) {
                secondHighest = highest;
                highest = salary;
            } else if (salary > secondHighest && salary != highest) {
                secondHighest = salary;
            }
        }

        if (secondHighest == Integer.MIN_VALUE) {
            System.out.println("There is no second highest salary.");
        } else {
            System.out.println("The second highest salary is: " + secondHighest);
        }

   //option 2 : using java 8 stream
        int secondHighestStream = Arrays.stream(salaries)
                .distinct()
                .sorted()
                .skip(salaries.length - 2)
                .findFirst()
                .orElse(Integer.MIN_VALUE);
        System.out.println("The second highest salary is: " + secondHighestStream);
    }

    employees.stream()
            .map(Employee::getSalary)
    .distinct()
    .sorted(Comparator.reverseOrder())
            .skip(1)
    .findFirst();
}