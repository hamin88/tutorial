//Convert List<Employee> to Map<Id, Employee>
import java.util.*;
import java.util.stream.*;
import java.util.function.*;
record Employee(int id, String name, double salary) {}
public class ConvertListToMap {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee(1, "Alice", 50000),
                new Employee(2, "Bob", 60000),
                new Employee(3, "Charlie", 55000)
        );

        Map<Integer, Employee> employeeMap = employees.stream()
                .collect(Collectors.toMap(Employee::id, Function.identity()));
        System.out.println(employeeMap);
    }
}
