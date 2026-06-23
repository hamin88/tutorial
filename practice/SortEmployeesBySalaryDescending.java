import java.util.*;
import java.util.stream.*;
record Employee(String name, double salary) {}
public class SortEmployeesBySalaryDescending {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee("Alice", 50000),
                new Employee("Bob", 60000),
                new Employee("Charlie", 55000)
        );

        List<Employee> sortedEmployees = employees.stream()
                .sorted((e1, e2) -> Double.compare(e2.salary(), e1.salary()))
                .collect(Collectors.toList());

        sortedEmployees.forEach(e -> System.out.println(e.name() + ": " + e.salary()));
    }
}